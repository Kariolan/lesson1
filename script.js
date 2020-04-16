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

for (let i = 0; i  < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = +prompt("Во сколько обойдется?");

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }

};

// let i=0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '') {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         console.log("error");
//         i++
//     };
// };

// let i=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '') {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         console.log("error");
//         i++;
//     };
// }
// while (i < 2);

// 4 block
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
//log
// expenses[firstQ] = secondQ;