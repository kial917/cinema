
function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1;
};

function toHours(num) {
    return `${num}`.padStart(2, '0')
}
function toMinutes(num) {
    return String(num).padEnd(2,'0');
}

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