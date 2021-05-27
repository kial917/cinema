"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this.data = filmData;
    this.start = "".concat(toHours(GetRandomToMax(14) + 9), ":").concat(toMinutes(GetRandomToMax(5)));
    this.id = filmData.id;
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
  }, {
    key: "getLink",
    value: function getLink() {
      return this.data.link;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.data.title;
    }
  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.data.genre.map(function (g) {
        return g.name;
      }).join(', ');
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n        <tr>\n            <td class=\"block03__table__firstcol\">\n                <input type=\"checkbox\" id=\"".concat(this.getId(), "\" class=\"visuallyhidden\">\n    \n                <label for=\"").concat(this.getId(), "\">\n                    <svg width=\"11\" height=\"9\" viewBox=\"0 0 11 9\" fill=\"white\"\n                        xmlns=\"http://www.w3.org/2000/svg\">\n                        <path class=\"checkMark__path\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                            d=\"M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z\"\n                            />\n                    </svg>\n                </label>\n            </td>\n            <td>").concat(this.getStart(), "</td>\n            <td><a href=\"https://www.kinopoisk.ru/film/").concat(this.getLink(), "\" target=\"_blank\">").concat(this.getTitle(), "</a> </td>\n            <td>").concat(this.getGenre(), "</td>\n        </tr>\n    ");
    }
  }]);

  return Film;
}();