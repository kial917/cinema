"use strict";

var filmsData = [{
  id: 26,
  link: 838,
  title: 'Человек-паук',
  genre: [{
    name: 'фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'приключения'
  }]
}, {
  id: 27,
  link: 1122114,
  title: 'Собачья жизнь 2',
  genre: [{
    name: 'фэнтэзи'
  }, {
    name: 'драма'
  }, {
    name: 'комедия'
  }]
}, {
  id: 28,
  link: 846824,
  title: 'История игрушек 4',
  genre: [{
    name: 'Мультфильм'
  }, {
    name: 'фэнтэзи'
  }, {
    name: 'комедия'
  }]
}, {
  id: 29,
  link: 693730,
  title: 'Люди в чёрном: Интэрнэшнл',
  genre: [{
    name: 'фанстастика'
  }, {
    name: 'боевик'
  }, {
    name: 'комедия'
  }]
}, {
  id: 30,
  title: 'Кожаные барсетки 5',
  adult: true,
  genre: [{
    name: 'фанстастика'
  }]
}];
var tableBody = document.getElementById('block03__table__body');
tableBody.innerHTML = "";
filmsData.forEach(function (elem) {
  var film = new Film(elem);

  if (film.isNotForAdult()) {
    tableBody.innerHTML += film.renderFilmTableItem();
  }
});