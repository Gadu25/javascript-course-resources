'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('Hello my name is Alex')
// }

// calling /running/ invoking function
// logger();


// Function declaration; arrangement is not important, can be called earlier than declared
// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1999)

// Function expression; arrangement is important
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge1(1999)

// console.log(age1, age2);


// Arrow function
// const calc = birthYear => 2037 - birthYear;
// const addFunc = (num1, num2) => num1 + num2;
// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstname} will retire after ${retirement} years`;
// }


// console.log(calc(1999))
// console.log(addFunc(1, 2))
// console.log(yearsUntilRetirement(1999, 'Alexander'))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
const cutFruitPieces = (fruit) => fruit * 4

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
    return juice
}

console.log(fruitProcessor(2, 3));