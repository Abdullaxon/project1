"use strict";
let numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

let personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

let qusion1 = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
  qusion2 = +prompt("Unga qancha baho bergan bo'lar edingiz?");
personalNewsDB.news[qusion1] = qusion2;
console.log(personalNewsDB);
