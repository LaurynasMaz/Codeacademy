// (49 sloc)  3.73 KB

// Filter
//   syntax:
//     filter((element, index, array) => { ... });
//   pvz:
//     items.filter( item => item > 10);
//   Ką daro:
//     Pereina per kiekvieną masyvo elementą ir jį prafiltruoja (taip kaip nurodyta iškviečiamojoje funkcijoje) ir sugrąžina tik tuos, kurie atitiko filtrą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//   Videos:
//     https://youtu.be/8kyLmsMYBBI
//     https://youtu.be/Q85O152q6UI
//     https://youtu.be/4_iT6EGkQfk
//     https://youtu.be/qmnH5MT_luk - ilgi bet, tikrai informatyvūs su paprastais paaiškinimais ir pavyzdžiais video pas šitą žmogelį.


// Reduce
//   syntax:
//     reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue);
//   pvz:
//     items.reduce((total, current) => {total + current}, 0);
//   Ką daro:
//     Sudeda visus masyvo elementus rekursijos būdu. Galima nustatyti pradinę reikšmę(nuo kokio skaičiaus skaičiuos).
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//   Videos:
//     https://youtu.be/tVCYa_bnITg
//     https://youtu.be/g1C40tDP0Bk
//     https://youtu.be/PAwd4gjb7aI
//     https://youtu.be/wM6WkVNMDuI


// Užduotys:
// 	/* Kur parašyta "naudojant" - privalu panaudoti tą metodą, bet galima naudoti ir kitus jei to neužtenka */
// 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
let food = [
  { 
    id:0,
    name: "Burgeris",
    inStock: true,
    primeCost: 0.3,
    cost: 1},
  {
    id:1,
    name: "Sūrainis",
    inStock: false,
    primeCost: 0.5,
    cost: 1.5},
  {
    id:2,
    name: "Dešrainis",
    inStock: true,
    primeCost: 0.2,
    cost: 1.1},
  {
    id:3,
    name: "Pica",
    inStock: true,
    primeCost: 0.7,
    cost: 1.8},
  {
    id: 4,
    name: "Sriuba",
    inStock: false,
    primeCost: 0.1,
    cost: 0.4},
  {
    id:5,
    name: "Cola",
    inStock: true,
    primeCost: 0.2,
    cost: 1.2},
  {
    id:6,
    name: "Fanta",
    inStock: false,
    primeCost: 0.2,
    cost: 1.2},
  {
    id:7,
    name: "Sprite",
    inStock: true,
    primeCost: 0.2,
    cost: 1.2},
  {
    id:8,
    name: "Mineralinis",
    inStock: false,
    primeCost: 0.1,
    cost: 1},
  {
    id:9,
    name: "Arbata",
    inStock: true,
    primeCost: 0.1,
    cost: 0.8},
];
// 2) Naudojant 1 užduoties masyvą:
//   2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.
let getInStock = food.filter(element => element.inStock === true);
console.log(getInStock);
//   2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.
let profitinStock = getInStock.map(element => (element.cost - element.primeCost).toFixed(2));

console.log(profitinStock);

//   2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)
let orders = [
  {name: "Burgeris", quantity: 4},
  {name: "Pica", quantity: 2},
  {name: "Pica", quantity: 3},
  {name: "Dešrainis", quantity: 2}
];
console.log(orders);
//   2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)
let profit = 0;
orders.forEach(order => {
  let item = food.find(element => element.name === order.name);
  profit += (item.cost - item.primeCost) * order.quantity;
});
console.log(profit.toFixed(2));

//   2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.
let orderToTake = orders.map(order => {
  let item = food.find(element => element.name === order.name);
  return {
    name: order.name,
    quantity: order.quantity,
    price: item.cost * order.quantity
  };
});
console.log(orderToTake)

// 3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
function createArray(A, B, C) {
  let array = [];
  for(let i = 0; i < A; i++) {
    array.push(Math.floor(Math.random() * (C - B + 1) + B));
  }
  return array;
}
console.log(createArray(3, 7, 17));

// 4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).
let string = 'Labas.Mano vardas-Laurynas, malonu susipažinti';
let stringArray = string.split(' ').join('.').split('.').join('-').split('-');
console.log(stringArray)


// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.
function filterEvenNumbers(array) {
  return array.filter(number => number % 2 === 0);
}
let array = createArray(3, 7, 17);
let evenNumbersArray = filterEvenNumbers(array);
console.log(evenNumbersArray);

// 6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.
function filterOddNumbers(array) {
  return array.filter(number => number % 2 !== 0);
}
let oddArray = filterOddNumbers(array);
console.log(oddArray);
// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
function filterWholeNumbers(array) {
  return array.filter(number => number % 1 === 0);
}
let wholeArray = filterWholeNumbers(array);
console.log(wholeArray);
// 8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
function filterAB(array, A, B) {
  return array.filter(number => number >= A && number <= B);
}
let arrayAB = filterAB(array, 8, 15);
console.log(arrayAB);
// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
function filterToUppercaseWords(words) {
  return words.filter(word => word[0] === word[0].toUpperCase());
}
let upperCaseWords = filterToUppercaseWords(stringArray)
console.log(upperCaseWords)
// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
function filterToLowercaseWords(words) {
  return words.filter(word => word[0] === word[0].toLowerCase());
}
let lowerCaseWords = filterToLowercaseWords(stringArray)
console.log(lowerCaseWords)
// 11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.
function filterWordsByFirstLetter(words, letter) {
  return words.filter(word => word[0] === letter);
}
let filterWordsByLetter = filterWordsByFirstLetter(stringArray, 'L');
console.log(filterWordsByLetter)
// 12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
function filterWordsByLastLetter(words, letter) {
  return words.filter(word => word[word.length-1] === letter);
}
let filterWordsLastLetter = filterWordsByLastLetter(stringArray, 's');
console.log(filterWordsLastLetter)
// 13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.
function calculateSum(array) {
  return array.reduce((accumulator, value) => accumulator + value, 0);
}
console.log(calculateSum(evenNumbersArray))
// 14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.
function calculatemulti(array) {
  return array.reduce((accumulator, value) => accumulator * value);
}
console.log(calculatemulti(oddArray))
// // FindIndex
//   Syntax:
//     findIndex((element, index, array) => { ... } )
//   Pvz:
//     const isLargeNumber = (element) => element > 13;
//   Ką daro:
//     Suranda ir grąžina indeksą to elemento esančio masyve, kuris pirmasis tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// Find
//   Syntax:
//     find((element, index, array) => { ... } )
//   Pvz:
//     const found = array1.find(element => element > 10);
//   Ką daro:
//     Suranda ir grąžina tą masyvo elementą, kuris pirmasis tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//   Video:
//     https://youtu.be/sBVaoFg2ww4

// Some
//   Syntax:
//     some((element, index, array) => { ... } )
//   Pvz:
//     const even = (element) => element % 2 === 0;
//   Ką daro:
//     Tikrina ar bent vienas elementas masyve tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//   Video:
//     https://youtu.be/RrvhtJYYKcw

// Every
//   Syntax:
//     every((element, index, array) => { ... } )
//   Pvz:
//     const isBelowThreshold = (currentValue) => currentValue < 40;
//   Ką daro:
//     Tikrina ar visi elementas masyve tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//   Video:
//     https://youtu.be/PJM3BaWu5Jw

// Includes
//   Syntax:
//     includes(searchElement, fromIndex)
//   Pvz:
//     pets.includes('cat');
//   Ką daro:
//     Patikrina ar masyve yra bent vienas nurodytas elementas ir grąžina true arba false.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// 1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).
function getBiggerThanA(array, A) {
  return array.findIndex(element => element > A);
}
// 2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
function getLessThanA(array, A) {
  return array.findIndex(element => element < A);
}
// 3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.
function getSmallLetter(array) {
  return array.findIndex(element => element[0] >= 'a' && element[0] <= 'z');
}
let array1 =['labas', 'Labas']
console.log(getSmallLetter(array1))
// 4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.
function getBigLetter(array) {
  return array.findIndex(element => element[0] >= 'A' && element[0] <= 'Z');
}
console.log(getBigLetter(array1))
// 5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function getLessThanABiggerThenB(array, A,B) {
  return array.findIndex(element => element < A && element < B);
}
// 6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// 7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).
// 8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
// 9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
// 10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.
// 11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
// 12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// 13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).
// 14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
// 15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
// 16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
// 17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
// 18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// 19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).
// 20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).
// 21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.
// 22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.
// 23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
// 24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).   
// 25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.
// 26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.