/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

// const newsGenre = document.querySelector(".promo__genre");

//newsGenre.innerHTML = "UzNews"; //Dinamichiskiy kontentni o'zgartirish 1 usuli

// newsGenre.textContent = "UzNews"; //textContentga html tag yozib bomidi faqat InnerHtmlga yozsa boladi qavsni ichida <p>UzNews</p>

// newsGenre.insertAdjacentHTML("afterbegin","<p>Hello BBS world</p>");

const btnNews = document.querySelector(".btn-news"),
  newsGenre = document.querySelector(".promo__genre"),
  bg = document.querySelector(".promo__bg"),
  listNews = document.querySelector(".promo__interactive-list");

const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];

btnNews.remove();
newsGenre.textContent = "UzNews";
newsGenre.style.color = "crimson";

bg.style.backgroundImage = "url(img/2.jpg)";

listNews.innerHTML = "";
news.forEach((itemNews, index) => {
  listNews.innerHTML += `
    <li class="promo__interactive-item">
      ${index + 1} ${itemNews}
      <div class="delete"></div>
    </li>
    `;
});
