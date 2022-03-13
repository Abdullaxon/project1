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
 
const newsGenre = document.querySelector(".promo__genre");

 //newsGenre.innerHTML = "UzNews"; //Dinamichiskiy kontentni o'zgartirish 1 usuli

// newsGenre.textContent = "UzNews"; //textContentga html tag yozib bomidi faqat InnerHtmlga yozsa boladi qavsni ichida <p>UzNews</p>

newsGenre.insertAdjacentHTML("afterbegin","<p>Hello BBS world</p>");
const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];
