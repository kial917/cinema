const filmsData = [{
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

const tableBody = document.getElementById('block03__table__body');
tableBody.innerHTML = ``;

filmsData.forEach(elem => {
    const film = new Film(elem);
    if (film.isNotForAdult()) {
        tableBody.innerHTML += film.renderFilmTableItem();
    }
});