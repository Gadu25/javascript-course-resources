let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

// VALUES AND VARIABLES
let country = 'Philippines';
const continent = 'Asia';
let population = 117337368;
// console.log(country, continent, population);
// =======================================================

// DATA TYPES
let isIsland = true;
let language;

// console.log(typeof (isIsland))
// console.log(typeof (population))
// console.log(typeof (country))
// console.log(typeof (language))
// =======================================================

// let, const, and var
language = 'Filipino';
// continent = 'Europe';

// console.log('new continent', continent);
// =======================================================

// BASIC OPERATORS
let halfPopulation = population / 2;
console.log('half population', halfPopulation)
population += 1
console.log('population + 1 ', population)
let finlandPopulation = 6000000;
if (population > finlandPopulation) {
    console.log('Philippines has larger population than Finland');
}
let averagePopulation = 33000000
if (population < averagePopulation) {
    console.log('Philippine population has below average in terms of population count');
}
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// STRINGS AND TEMPLATE LITERALS
let newCountry = 'Portugal';
let newContinent = 'Europe';
let newPopulation = '11 million';
let newLanguage = 'portuguese';

let newDescription = `${newCountry} is in ${newContinent}, and its ${newPopulation} people speak ${newLanguage}`;

console.log(newDescription);


// TAKING DECISIONS: IF / ELSE STATEMENTS
if (population > 33000000) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is 22 million below average`)
}