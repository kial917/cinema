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

const renderFilmBlock = (filmId, title, posterUrl) => {
    const id = `block05-films-desc-${filmId}`;
    const wrapperLi = document.createElement('li');
    wrapperLi.classList.add('movieSelect', 'inner');
    const filmTitle = document.createElement('h4');
    filmTitle.innerText = `${title}`;
    const descFilm = document.createElement('p');
    descFilm.innerText = "loading...";
    descFilm.id = `${id}`;
    wrapperLi.append(filmTitle, descFilm);
    wrapperLi.style.background = `url('${posterUrl}') no-repeat center / cover`;
    return [wrapperLi, descFilm];
};

const fetchBlockFilms = async () => {
    const result = await topFilmsRequest();
    const data = await result.json();

    const requests = [];
    const filmBlocksMap = new Map();
    data.films.forEach(async (film) => {
        const [wrapperLi, descFilm] = renderFilmBlock(film.filmId, film.nameRu, film.posterUrlPreview);
        filmBlocksMap.set(film.filmId, wrapperLi)
        requests.push(new Promise(async (resolve, rej) => {
            const detailResult = await filmsDetailsRequest(film.filmId);
            const detailData = await detailResult.json();
            const description = detailData.data.description;
            descFilm.innerText = description;
            if (!description) {
                filmBlocksMap.delete(film.filmId);
            }
            resolve();
        }));
    });
    await Promise.all(requests);
    const elements = [...filmBlocksMap.values()].slice(0,9);
    blockFilmWrapper.append(...elements);
};

fetchBlockFilms();