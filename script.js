'use strict';

//1 block
var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


//2 block
var appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


//3 block
let q1 = prompt("Введите обязательную статью расходов в этом месяце");
let q2 = +prompt("Во сколько обойдется?");
let q3 = prompt("Введите обязательную статью расходов в этом месяце");
let q4 = +prompt("Во сколько обойдется?");

appData.expenses[q1] = q2;
appData.expenses[q3] = q4;


// 4 block
alert(appData.budget/30);


//log
// expenses[firstQ] = secondQ;
console.log(appData.expenses);


// 
//var leftBoardWidth = 1;
// {
//     let second = 2;
//     console.log(second);
// }
// const pi = 3.14;
// console.log(4/0);
// var person = {
//     name: "John",
//     age: 25,
//     isMerried: false
// }

// console.log(person["name"]);

// let arr = ['aaa','bbb','ccc'];

// console.log(arr[1]);

// let answer = confirm("fffff");

// console.log(answer);

// let answer = +prompt("Есть ли Вам 18?", "Yes");

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(5 + (answer));

// let incr = 10,
//     decr = 10;


// console.log(incr++);
// console.log(decr--);

// let isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);