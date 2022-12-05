"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



// console.log('arr' + " - object");
// console.log(4 + "5");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 !== '6');




// const isCheked = false,
//       isClose = false;

// console.log(isCheked || !isClose);








// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`)

// alert('Hello');
// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt ("Вам есть 18?", "18");
// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));


// const storeName = 'Ярче';
// let storeDescription = {
//     budget: 10000,
//     employees: ['Jeck', 'Alice', 'Anna'],
//     products: {
//         бумага: 100,
//         лопата: 50
//     },
//     open: true,
// }
// // const arr = ['a', 'b', 'c'];

// // arr[10] ='3456';

// // console.log(arr);

// // const arrObj = {
// //     a: 'a',
// //     1: 'b',
// //     2: 'c',
// //     abc: {
// //         df:[{}, {}],
// //         def: {

// //         }
// //     }
// // };
// // const b = 'b';


// // // arrObj.b = '1234';
// // arrObj[b] = [];

// // console.log(arrObj['b']);
// // console.log(arrObj.b);


// // // const obj = {a: 1, b: 2};
// // const obj = {
// //     Anna: 500,
// //     'Alice': 800,
// // };



// // // ['Anna', 500, 'Alice', 800];




// // // "use sctrict";



// // // let number = 4.6;
// // // console.log(4/0);
// // // console.log('string' * 9);

// // // const persone = `5`;

// // // const bool = false;

// // // // console.log(something);

// // // let und;
// // // console.log(und);

// // // const obj = {
// // //     name: "John",
// // //     age: 25,
// // //     isMarried: false,
// // // };

// // // // console.log(obj.name)
// // // console.log(obj["name"]);

// // // let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// // // console.log(arr[1]);



// // // // const vehicleBodyWidth = 5000,
// // // //       vehicleBodyLength = 4000;

// // // // console.log ("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// // // // // ['vruru', 'fdsfsd', 'hgfshs'].map(item => );

// // // // // Request
// // // // // data
// // // // // response

// // // // // snake_case
// // // // // UPPER_SNAKE_CASE
// // // // // Kebab-case
// // // // // PascalCase


// // // // let COLOR_RED = '#F00';


// // // // // lesson 1 practice
// // // // // const userName = 'John';
// // // // // let userNumber = 25;
// // // // // userNumber = 24;