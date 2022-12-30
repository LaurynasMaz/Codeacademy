//  Užduotys be ir  su iteraciniais metodais
{
let wordArray = ['labas','kalnas','Laurynas','butelis','pele','gruodis'];
let numberArray = [-1,2,6,-8,-6,5,78,9,85,454,545]; 
let mixedArray = ['labas','kalnas','Laurynas',false,false, true, -8,5,84,52,84,52,185,48];

// 1) Parašykite funkcija Į konsole išpausdinti pateikto masyvo duomenys (atskirose eiltuse)
console.groupCollapsed("task1");
let uzduotis1be = (masyvas) =>{
  for(let i = 0; i < masyvas.length; i++){
   console.log(masyvas[i]);
  }
}
console.log(uzduotis1be(numberArray));

let uzduotis1su = (masyvas) =>{masyvas.forEach(element => console.log(element) );}
console.log(uzduotis1be(mixedArray));
console.groupEnd();

// 2) Parašykite funkciją, kuri gražintų masyvą, kuriame tik skaičiai už 10  is jei pateikto masyvo
console.groupCollapsed("task2")
let uzd_2_be = (masyvas) => {
  let grazinamasMasyvas = [];
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] > 10){
      grazinamasMasyvas.push(masyvas[i]);
    }
    // masyvas[i] > 10 ? grazinamasMasyvas.push(masyvas[i]) : null;
    // masyvas[i] > 10 && grazinamasMasyvas.push(masyvas[i]);
  }
  return grazinamasMasyvas;
}
console.log(uzd_2_be(numberArray));
let uzd_2_su = (masyvas) => masyvas.filter(element => element > 10);
console.log(uzd_2_su(numberArray));
console.groupEnd();

// 3) Parašykite funkciją, kuri patikrintų ar jei paduotame string masyve bent vienas elemntas yra ilgesnis negu 5 raidžių žodis.
console.groupCollapsed("task3");
let task3be = (masyvas) =>{
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i].length>50){
      return true;
    }
  } return false;
}
console.log(task3be(wordArray));

let task3su = (masyvas) => masyvas.some(element =>element.length > 50);
console.log(task3su(wordArray));
console.groupEnd();

// 4) Parašykite funkciją, kuri jei paduotame mišriame masyve, rastų ir gražintu pirmaji kintamį kuris yra skaičius

let task4be = (masyvas) =>{
  for(let i = 0; i < masyvas.length; i++){
    if(typeof(masyvas[i]) ==="number"){
      return  masyvas[i]
   }
  } 
}
console.log(task4be(mixedArray));
let task4su = (masyvas) => masyvas.find(element => typeof(element)==='number')
console.log(task4su(mixedArray));
}
{
// Iteracinių masyvų metodų užduotys:
//   1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
//   2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
  const cars = ["BMW", "VW", "Audi"]
  cars.forEach((element,iteration) => console.log(element,iteration))
//   3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
  let arrayNames = ["laurynas","Petras","gyTis","JOnas","LUKAS"]
  function capitalizeNames(arrayNames) {
    return arrayNames.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }
  console.log(capitalizeNames(arrayNames));
//   4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
arrayAge = [5,9,7,45,1,18,96,24,5,21]
let ageOfFreinds = (array) => array.filter(element => element > 18);
console.log(ageOfFreinds(arrayAge))

//   5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
let city =["Vilnius","Alytus","Kaunas","Kernavė"]
let firstLetter = (array) => array.find(element => element[0].toLowerCase()==='k')
console.log("Pirmasis miestas kuris turi  pirmają raidę K:",firstLetter(city));

//   6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
let someWord = (array) => array.some(element => element[0]===element[0].toLowerCase())
console.log("Ar yra miestas kuris prasideda mažaja raide:",someWord (city));
//   7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.
let everyWord = (array) => array.every(element => element[0]===element[0].toUpperCase())
console.log("Ar visi miestai  prasideda didžiają raide:",everyWord(city));

// 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
[
  {id:0, 
  name:"Burgeris",
  inStock:true,
  primeCost:0.3,
  cost:1},
  {id:1,
  name:"Hot Dogas",
  inStock:false,
  primeCost:0.5,
  cost:1},
  {id:2,
  name:"Pienas",
  inStock:true,
  primeCost:0.6,
  cost:2}
]
// 2) Naudojant forEach - išvesti masyvą į konsolę.
// 3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.
// 4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
//   4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
//   4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)
//   4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)
//   4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
}

// Destruktūrizavimas

/*
Destruktūrizavimas - kažkokio elemento/ų išskirstymas dalymas

Video:
    https://youtu.be/UgEaJBz3bjY
    https://youtu.be/NIq3qLaHCIs
    https://youtu.be/-vR3a11Wzt0

  array destructuring syntax

    let [a, b] = masyvas; (priskyrimas paeiliui)
    let [a, , b] = masyvas; (elemento praleidimas)
    let [a, , b, ...c] = masyvas; (likusių elementų priskyrimas)
    let [a = 'default value', , b, ...c] = masyvas; (galima priskirti numatytas reikšmės, kurios bus priskirtos tokiu atveju, kai destruktūrizuojamame elemente ta reikšmė bus undefined)

  object destructuring syntax

    let {a, b} = objektas; (priskyrimas pagal raktinius žodžius)
    let {a, b : kitasB} = objektas; (priskyrimas pagal pervadintą raktinį žodį)
    let {a, b : kitasB, ...like} = objektas; (priskyrimas neparinktų elementų)
    let {a, b : kitasB, c = "c default", ...like} = objektas; (nerastų raktinių žodžių default reikšmes nustatymas)
*/

// arr be Destruktūrizavimo

let masyvas = ['labas',54,true,'zodis',45,78];
let a = masyvas[0];
let b = masyvas[1];
console.log(a,b);

// arr su Destruktūrizavimu
let [ c ='default value', , d, ...visiLike] = masyvas;
console.log(c, d, visiLike);

let destrF = (arg1, arg2, ...args) => {
  console.log(arg1, arg2,args);
}
destrF(1,2,3,4,5,6,7,8,9);

// obj be destr...

let objektas ={
  vardas: 'Laurynas',
  amzius: 27,
  gyvenamojiVieta:{
    salis:"Lietuva",
    miestas:"Alytus"
  },
  batai : 'žieminiai'
}

let {amzius, vardas: pilnasVardas, pavarde = 'nenurodyta', ...kitkas} = objektas
console.log(pilnasVardas, amzius, pavarde, kitkas);

// 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.
{
let array = ['Laba','diena'];
let [nr1, nr2] = array;
console.log(nr1,nr2);
}
//  2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.
{
let array = ['Laba','diena',true,'gera','diena',5,9,8,7,9];
let [nr1, nr2,nr3,nr4,nr5,nr6,nr7,nr8,nr9,nr10] = array;
console.log(nr1, nr2,nr3,nr4,nr5,nr6,nr7,nr8,nr9,nr10);
}
//  3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.
{
  let array = ['Laba','diena',true,'gera','diena'];
  let [nr1, nr2,...nr3] = array;
  console.log(nr1, nr2,nr3,);
}
//  4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.
{
let array = ['Laba','diena',true,'gera','diena',5,9,8,7,9];
let [,,,...nr1] = array;
console.log(nr1);
}
// 5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

let object ={
  object1: 'Laba',
  object2: 'Labas',
  object3: 'Labass',
}
let {object1,object2,object3} =object
console.log(object1,object2,object3)

// 6) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
{
  let array = ['Laba','diena'];
  let [a, b] = array;
  console.log(nr1 = b,nr2= a);
  }
  {
    let array = ['Laba','diena'];
    let [b, a] = array;
    console.log(a,b);
    }


// 2 kintamųjų reikšmių sukeitimas
let a1 = 5;
let b1 = 10;
let saugykla = a1;
a1 = b1;
b1 = saugykla;
console.log(a1, b1);

let a2 = 5;
let b2 = 10;
[a2, b2] = [b2, a2];
console.log(a2, b2);

let a3 = 5;
let b3 = 10;
a3 = a3 + b3; // 15
b3 = a3 - b3; // 5
a3 = a3 - b3; // 10
console.log(a3, b3);

//          Konspektas
/*Math
  Math.properties
    Math.E          -   Euler's number              -   approximately 2.718
    Math.LN10       -   natural logarithm of 10     -   approximately 2.302
    Math.LN2        -   natural logarithm of 2      -   approximately 0.693
    Math.LOG10E     -   base 10 logarithm of e      -   approximately 0.434
    Math.PI         -   PI                          -   approximately 3.14159
    Math.SQRT1_2    -   square root of 1/2          -   approximately 0.707
    Math.SQRT2      -   square root of 2            -   approximately 1.414
  Math.methods()
*/
/*Number
  Number.properties
    Number.EPSILON            -   difference between 1 and the smallest floating point number greater than 1
    Number.MAX_SAFE_INTEGER   -   maximum safe integer in JavaScript (253 – 1)
    Number.MAX_VALUE          -   maximum numeric value representable in JavaScript
    Number.MIN_SAFE_INTEGER   -   minimum safe integer in JavaScript, or -(253 - 1)
    Number.MIN_VALUE          -   smallest positive numeric value representable in JavaScript
    Number.NaN                -   Not-A-Number, which is equivalent to NaN
    Number.NEGATIVE_INFINITY  -   negative Infinity value
    Number.POSITIVE_INFINITY  -   positive Infinity value
  Number.methods()
*/
/*String
  String.properties
    String.length - length of the string in UTF-16 code units
  String.methods()
    
*/