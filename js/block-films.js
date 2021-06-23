const blockFilmWrapper = document.getElementById('block05__wrappermosaic');
blockFilmWrapper.innerHTML = "";

const renderFilmBlock = (filmId, title, posterUrl) => {
    const id = `block05-films-desc-${filmId}`;
    const wrapperLi = document.createElement('li');
    wrapperLi.classList.add('movieSelect', 'inner');
    const link = document.createElement('a');
    link.href = `/single/?id=${filmId}`
    const filmTitle = document.createElement('h4');
    filmTitle.innerText = `${title}`;
    const descFilm = document.createElement('p');
    descFilm.innerText = "loading...";
    descFilm.id = `${id}`;
    link.append(filmTitle, descFilm);
    wrapperLi.append(link);
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
        requests.push(new Promise(async (resolve) => {
            const detailResult = await filmsDetailsRequest(film.filmId);
            const detailData = await detailResult.json();
            const description = detailData.data.description;
            descFilm.innerText = description;
            if (description) {
                filmBlocksMap.set(film.filmId, wrapperLi)
            }
            resolve();
        }));
    });
    await Promise.all(requests);
    const elements = [...filmBlocksMap.values()].slice(0, 9);
    blockFilmWrapper.append(...elements);
};

fetchBlockFilms();