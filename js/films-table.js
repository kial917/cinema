const films = [{
    id: 26,
    link: 838,
    start: '10:00',
    title: 'Человек-паук',
    genre: [{
            name: 'фантастика',
        },
        {
            name: 'боевик',
        },
        {
            name: 'приключения',
        },
    ]
}, {
    id: 27,
    link: 1122114,
    start: '12:00',
    title: 'Собачья жизнь 2',
    genre: [{
            name: 'фэнтэзи',
        },
        {
            name: 'драма',
        },
        {
            name: 'комедия',
        },
    ]
}, {
    id: 28,
    link: 846824,
    start: '14:00',
    title: 'История игрушек 4',
    genre: [{
            name: 'Мультфильм',
        },
        {
            name: 'фэнтэзи',
        },
        {
            name: 'комедия',
        },
    ]
}, {
    id: 29,
    link: 693730,
    start: '16:00',
    title: 'Люди в чёрном: Интэрнэшнл',
    genre: [{
            name: 'фанстастика',
        },
        {
            name: 'боевик',
        },
        {
            name: 'комедия',
        },
    ]
}, {
    id: 30,
    start: '01:00',
    title: 'Кожаные барсетки 5',
    adult: true,
    genre: [{
            name: 'фанстастика',
        },

    ]
}, ];

const filmHelper = {
    getId (){
        return this.id || this.title.replaceALL(' ','-')
    },
    getTitle (){
        return this.title;
    },
    getStart(){
        return this.start;
    },
    getGenre(){
        return this.genre.map(g=>g.name).join(', ');
    },
    getLink(){
        return this.link;
    },
};

function renderFilmTableItem(film) {
    return `
        <tr>
            <td class="block03__table__firstcol">
                <input type="checkbox" id="${filmHelper.getId.apply(film)}" class="visuallyhidden">

                <label for="${filmHelper.getId.apply(film)}">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="checkMark__path" fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                            />
                    </svg>
                </label>
            </td>
            <td>${filmHelper.getStart.apply(film)}</td>
            <td><a href="https://www.kinopoisk.ru/film/${filmHelper.getLink.apply(film)}" target="_blank">${filmHelper.getTitle.apply(film)}</a> </td>
            <td>${filmHelper.getGenre.apply(film)}</td>
        </tr>
    `
}

const tableBody = document.getElementById('block03__table__body');
tableBody.innerHTML = ``;

films.forEach(film=>{
    if (!film.adult) {
        tableBody.innerHTML += renderFilmTableItem(film);
    }
})