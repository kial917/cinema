const films = [{
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
}, ];

const tableBody = document.getElementById('block03__table__body');
tableBody.innerHTML = ``;

for (let i = 0; i < films.length; i++) {
    tableBody.innerHTML += `
    <tr>
                            <td class="block03__table__firstcol">

                                <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path class="checkMark__path" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                        fill="white" />
                                </svg>


                            </td>
                            <td>${films[i].start}</td>
                            <td><a href="https://www.kinopoisk.ru/film/838/" target="_blank">${films[i].title}</a> </td>
                            <td>${films[i].genre.map(g=>g.name).join(', ')}</td>
                        </tr>
    `
};