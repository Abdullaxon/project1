"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const persone = `Alisa`;
// console.log(persone);

// const bool = true;

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.isMarried);

// let arr = ['plum.png', 'orange.jpeg', 7, 'apple.bmp', {}, [],];
// console.log(arr[2]);

// alert("Hello world");

// const result = confirm(" Are you here?");
// console.log(result);

// const answer = prompt("Vam yest 18", "18");
// console.log(answer + "da");

// const answers = [];

// answers[0] = prompt("kak vasha imya?", "");
// answers[1] = prompt("kak vasha familya?", "");
// answers[2] = prompt("Skolka vam let?", "");

// console.log(typeof(answers));

// interpolyatsiya--------------
// const category = 'toys';

// console.log(`https://sqb.uz/${category}/5`);

// const user = "Ivan";

// alert(`Salom, ${user}`);


// console.log('arr' + " - object");
// console.log(5 + +"20");




// 
// let num = 50;

// while(num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num < 55);




// const num = 50;

// if (num === 50) {
//     console.log("da moy durug ti zalatoy!");
// } else {
//     console.log('Izvini brat !!');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// const carNumber = 70;

// if (carNumber > 69) {
//     console.log('Its not my car!');
// } else if (carNumber == 70){
//     console.log('Yes its my car number');
// }

// if (1 === '1'){
//     console.log('istina!');
// } else {
//     console.log('Lojj');
// }

// //varyant2

// if (5 == '5'){
//     console.log('Istina!')
// }else {
//     console.log('Lojj!')
// }

// let message = (92 > '11' && 58 < 100) ? 'istina!' : 'lojj!';

// let a = 30,
//     b = 20,
//     c = 15;


// if(a > b || b < a){
//     console.log('A katta');
// }else if(b > c || c < b){
//     console.log('B katta');
// }else{
//     console.log('C katta');
// } 

// let age = prompt('Yoshingizni kiriting!');

// if(age >= 18){
//     alert("Hush kelibsiz");
// }else{
//     alert('hali yoshsiz');
// }

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = prompt('Skolka filmov vii uje posmotrili?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     let a = prompt('Odin iz posledniy prosmotrov filmov', ''),
//         b = prompt('Na skolka otseneti ego', '');

//     if(a != null && b != null && a != '' && b != '' && a.length < 50){

//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else {
//         console.log('Error');
//         i--;
//     }
// }
// if(personalMovieDB.count < 10){
//     console.log('Siz juda kam kino korasiz!');
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Siz klasik kino tomoshabinisiz!');
// }else if(personalMovieDB.count >= 30){
//     console.log('Siz kinosevarsiz!');
// }else{
//     console.log('Xato yuz berdi 070');
// }



// console.log(personalMovieDB);

// function showFirstFunction(text){

//     console.log(text);
    
// }
// showFirstFunction("Hello function");

// function summa(a, b){
//     return a+b;
// }
// console.log(summa (2,3));

// function calc(a, b){
//     return a * b;
// }
// console.log(calc(5,3));

