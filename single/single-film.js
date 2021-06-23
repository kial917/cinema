const likesSf = document.getElementById('sf-likes');
const stars = document.querySelectorAll('.rating_start');

const searchParams = new URLSearchParams(location.search);

const filmId = searchParams.get('id');

const fetchKinopoiskData = async () => {
    const answer = await filmsDetailsRequest(filmId);
    const {
        data: filmdata
    } = await answer.json();
    const header = document.getElementById('sf-header');
    header.textContent = filmdata.nameRu;
    const description = document.getElementById('sf-description');
    description.textContent = filmdata.description;
    const poster = document.getElementById('sf-moviePoster');
    poster.src = filmdata.posterUrl;
    const premiere = document.getElementById('sf-premiere');
    premiere.textContent = filmdata.premiereRu;
}
const fetchFilmMeta = async () => {
    const answer = await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}`);
    const {
        body: {
            views,
            likes,
            ratings,
            ...rest
        }
    } = await answer.json();
    //TODO:  Не забыть удалить console.log
    console.log({
        views,
        likes,
        ratings,
        ...rest
    });
    const viewsSf = document.getElementById('sf-views');
    viewsSf.textContent = `${views} views`;

    likesSf.textContent = `${likes} likes`;
    const rating = document.getElementById('sf-rating');
    rating.textContent = Math.floor((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10;
    const inRating = Math.round(ratings.reduce((a, b) => a + b) / ratings.length);
    const stars = document.querySelectorAll('.rating_start');

    for (let i = 0; i < stars.length; i++) {
        if (i >= inRating) break;
        const star = stars[i];
        star.classList.add('star-selected')

    }

}
const likeIcon = document.getElementById('like-icon');
likeIcon.addEventListener('click', () => {
    if (!likeIcon.classList.contains('like-icon--liked')) {
        const likesCount = parseInt(likesSf.textContent, 10) + 1;
        likesSf.textContent = `${likesCount} likes`;
        const likeIcon = document.getElementById('like-icon');
        likeIcon.classList.add('like-icon--liked');
        const answer = fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
})

for (const star of stars) {
    star.addEventListener('click', () => {
        
        fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: +star.dataset.value
            })
        });

    })
}

fetchKinopoiskData();
fetchFilmMeta();