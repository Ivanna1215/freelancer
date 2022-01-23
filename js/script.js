'use strict'
// Функції колбеки
function calcSumm (a,b,more,less) {
    let numSumm = a+b;
    if (numSumm>3){
        more();
    } else {
        less ();
    }
}
function showMoreMessage () {
    console.log ('More 3')
}
function showLessMessage () {
    console.log ('less 3')
}
calcSumm (1,5,showMoreMessage,showLessMessage);

// Рекурсія 
function calcSummresult (numOne,numTwo){
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * calcSummresult (numOne,numTwo-1);
    }
}
console.log (calcSummresult(3,3));
console.log (calcSummresult(5,3));
console.log (calcSummresult(8,3));

// Function Expression
// let diskont;

// if (a<b) {
//     diskont = function (a,b) {
//         let res = a + b ;
//         console.log (res);
//     }
 
// } else if (a>b) {
// diskont = function (a,b) {
//     let res = a - b;
//     console.log (res);
// }

// }
// console.log (diskont (500,5));  


    let get1301Summ;
    if (2>1) {
        get1301Summ = function (a,b) {
            let summ = a+b;
            console.log (summ);
        }
    }
    get1301Summ (50,65);

    // arrow functions

    let getMessage = (text,name)=> text +''+','+name + '!';
    console.log (getMessage ('Hello','Ivanna'));

    let getMessage1901 = (text,name) => {
        let message =  text +''+','+name + '!';
        return message;
    };
    console.log (getMessage1901('Hello','Iva'));

    // Завдання з learn.java.script.ru 
    // Переписати за допомогою функції стрілки

    let func_ask = (question,yes,no) =>  {
if (confirm(question)) yes()
else (no);
    }
    func_ask (
' you are agree?',
// function () { alert ('You have confirmed');},
() => alert ('You have confirmed'),
// function () {alert ('You have not confirmed');}
() => alert ('You have not confirmed') 
    );
    