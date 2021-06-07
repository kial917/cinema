const blockFilmWrapper = document.getElementById('block05__wrappermosaic');
blockFilmWrapper.innerHTML = "";

const apiHeaders = {

    'accept': 'application/json',
    'X-API-KEY': '518a9dd7-cd81-4b22-ad18-f74d9edb7ae3',

};

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
        headers: {
            ...apiHeaders
        },cors:'no-cors'
    })

    .then(data => data.json())
    .then(data => {
        data.films.forEach(film => {
            const id=`block05-films-desc-${film.filmId}`
            blockFilmWrapper.innerHTML += `
            <li class='movieSelect inner' id="bgCinemaImg1" style="background: url('${film.posterUrlPreview}') no-repeat center / cover;">
                    <h4>${film.nameRu}</h4>
                    <p id="${id}">...loading</p>
                </li>
            `
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
                headers: {
                    ...apiHeaders
                }, cors:'no-cors'
            })
            .then(data => data.json())
            .then(({data:{description}}) => {
                const desc = document.getElementById(id);
                desc.innerText = description;

                if (!description){
                    const root = desc.parentNode;
                    
                    blockFilmWrapper.removeChild(root);
                }
                
            })
    
        })
        
    })

;