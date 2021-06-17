const blockFilmWrapper = document.getElementById('block05__wrappermosaic');
blockFilmWrapper.innerHTML = "";


const kinopoiskapiunofficialRequest = (url) => {
    return fetch(url, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '518a9dd7-cd81-4b22-ad18-f74d9edb7ae3',
        },
        cors: 'no-cors'
    })
};

const topFilmsRequest = () => {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');
};
const filmsDetailsRequest = (id) => {
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`);
};

const fetchBlockFilms = async () => {
    const result = await topFilmsRequest();
    const data = await result.json();
    data.films.forEach(async (film) => {
        const id = `block05-films-desc-${film.filmId}`
        const wrapperLi = document.createElement('li');
        wrapperLi.classList.add('movieSelect', 'inner');
        const filmTitle = document.createElement('h4');
        filmTitle.innerText = `${film.nameRu}`;
        const descFilm = document.createElement('p');
        descFilm.id = `${id}`;
        wrapperLi.append(filmTitle, descFilm);
        blockFilmWrapper.append(wrapperLi);
        const liStyle = document.getElementById(id).parentNode;

        liStyle.style.background = `url('${film.posterUrlPreview}') no-repeat center / cover`;
    });
};

fetchBlockFilms();

// fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
//         headers: {
//             ...apiHeaders
//         },
//         cors: 'no-cors'
//     })

//     .then(data => data.json())
//     .then(data => {
//         data.films.forEach(film => {
//             const id = `block05-films-desc-${film.filmId}`
//             blockFilmWrapper.innerHTML += `
//             <li class='movieSelect inner'  no-repeat center / cover;">
//                     <h4>${film.nameRu}</h4>
//                     <p id="${id}">...loading</p>
//                 </li>
//             `

//             const liStyle = document.getElementById(id).parentNode;

//             liStyle.style.background = `url('${film.posterUrlPreview}') no-repeat center / cover`;


//             fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
//                     headers: {
//                         ...apiHeaders
//                     },
//                     cors: 'no-cors'
//                 })
//                 .then(data => data.json())
//                 .then(({
//                     data: {
//                         description
//                     }
//                 }) => {
//                     const desc = document.getElementById(id);
//                     desc.innerText = description;

//                     if (!description) {
//                         const root = desc.parentNode;

//                         blockFilmWrapper.removeChild(root);
//                     }

//                 })

//         })

//     })

// ;