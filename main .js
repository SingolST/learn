"use strict";

const str = "teSt";

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world";

// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const test = "12.2px";

// console.log(parseInt(test));
console.log(parseFloat(test));

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello('Bill'));


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(5));

// function getMathResult (num, times) {
//     if (typeof(times) !== 'number' || times <= 0){
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++){
//         if (i === times) {
//             str +=`${num * i}`
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
// console.log(getMathResult(5, 3));