"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded bu bizni birinchi html fayllarimiz o'qilgandan keyin java script kolarimiz oqishi uchun xizmat qiladi!
  const btnNews = document.querySelector(".btn-news"),
    newsGenre = document.querySelector(".promo__genre"),
    bg = document.querySelector(".promo__bg"),
    listNews = document.querySelector(".promo__interactive-list"),
    readBtn = document.querySelector(".readMore"),
    addForm = document.querySelector(".add"),
    addInput = document.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox'); // chek box ni ovolish

  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = (arr) => {
    arr.sort();
  };
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)} ...`;
      }
      if (favourite) {
        console.log("sevimli yangiligingiz qo'shilmoqda");
      }
      news.push(newFilm);
      sortArr(news);
      createNewsList(news, listNews);
    }

    //event.target.reset();
    addInput.value = "";
  });

  btnNews.remove();
  newsGenre.textContent = "UzNews";
  newsGenre.style.color = "crimson";

  bg.style.backgroundImage = "url(img/2.jpg)";
  readBtn.style.borderRadius = "50px";
  // readBtn.onclick = function () {      //knopkani bosganda xodisa roy berishini amalga oshrdik onclick function yordamida bu usul kotta proyektlada oxshamidi
  //   console.log("hello world");
  // };
  // readBtn.addEventListener("click", () => {
  //   console.log("Hiiii");
  // });

  function createNewsList(newsList, parent) {
    parent.innerHTML = "";
    sortArr(news);
    newsList.forEach((itemNews, index) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">
          ${index + 1} ${itemNews}
          <div class="delete"></div>
        </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(i, 1);

        createNewsList(newsList, parent);
      });
    });
  }

  createNewsList(news, listNews);

  // input.addEventListener("input", (event) => {
  //   // bu yerda biz event orqali form ichidagi inputni  qiymatni oldik
  //   console.log(event.target.value);
  // });
});
