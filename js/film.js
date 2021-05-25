function FilmProto(filmData) {
    this.data = filmData;
    this.start = `${toHour(GetRandomToMax(14)+9)}:${toMinutes(GetRandomToMax(6))}`
};
FilmProto.prototype.isNotForAdult = function () {
    return !this.data.adult;
};
FilmProto.prototype.getId = function () {
    return this.data.id;
};
FilmProto.prototype.getStart = function () {
    return this.start;
};
FilmProto.prototype.getLink = function () {
    return this.data.link;
};
FilmProto.prototype.getTitle = function () {
    return this.data.title;
};
FilmProto.prototype.getGenre = function () {
    return this.data.genre.map(g => g.name).join(', ');
};
FilmProto.prototype.renderFilmTableItem = function () {
    return `
    <tr>
        <td class="block03__table__firstcol">
            <input type="checkbox" id="${this.getId()}" class="visuallyhidden">

            <label for="${this.getId()}">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="checkMark__path" fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                        />
                </svg>
            </label>
        </td>
        <td>${this.getStart()}</td>
        <td><a href="https://www.kinopoisk.ru/film/${this.getLink()}" target="_blank">${this.getTitle()}</a> </td>
        <td>${this.getGenre()}</td>
    </tr>
`
}

class Film {
    constructor(filmData) {
        this.data = filmData;
        this.start = `${toHour(GetRandomToMax(14)+9)}:${toMinutes(GetRandomToMax(6))}`;
        this.id=filmData.id;
    }
    isNotForAdult() {
        return !this.data.adult;
    };
    getId() {
        return this.id;
    };
    getStart() {
        return this.start;
    };
    getLink() {
        return this.data.link;
    };
    getTitle() {
        return this.data.title;
    };
    getGenre() {
        return this.data.genre.map(g => g.name).join(', ');
    };
    renderFilmTableItem() {
        return `
        <tr>
            <td class="block03__table__firstcol">
                <input type="checkbox" id="${this.getId()}" class="visuallyhidden">
    
                <label for="${this.getId()}">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="checkMark__path" fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                            />
                    </svg>
                </label>
            </td>
            <td>${this.getStart()}</td>
            <td><a href="https://www.kinopoisk.ru/film/${this.getLink()}" target="_blank">${this.getTitle()}</a> </td>
            <td>${this.getGenre()}</td>
        </tr>
    `
    }

}