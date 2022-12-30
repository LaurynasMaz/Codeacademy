//  Metodai

//  Number
/*
  Kreipimasis į number metodus prasideda žodžiu "Math" už jo rašome taška "." ir už taįko rašome metodo pavadinimą ir skliausteliuose su galimais parametrais Pvz: Math.random();
  (459.545454).toFixed(3);
  Math - alieka skaičiavimus , pateikia duomenis.
  number - atlieka pakietimus, konvertavimus.
*/

console.groupCollapsed("Numbers/Math");
let number = 50.143451;
console.log(number.toFixed(4));
console.log(Math.floor(number));
console.log(Math.random() * number);
console.log(number.toString());
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Math.pow(5,2));
console.log(Math.sqrt(25));
console.log((Math.random() * number).toFixed(2));
console.log(Number(number.toFixed(4)));
console.log(number.toFixed(4)*1);
console.log("...........");
console.groupEnd();

// String

/*
String metodai yra kažkokios funckijos , kurios atelieka kažkokius veikmus su duotosiomis žodinėmes reikšmėmis. Tam tikriems metodams, parametrai yra reikalingi, kitiems - ne.
*/
console.groupCollapsed("String");
let zodis = 'Labas . 65.4 asd.                             ';
console.log(zodis.split(' '));
console.log(zodis[0]);
console.log(zodis.charAt(0));
console.log(zodis.length);
console.log(zodis.charAt(zodis.length - 1));
console.log(zodis.slice(-1));
console.log(zodis.trim().split(' '));
console.log(zodis.includes(' s'));
console.log(zodis.slice(5,10));
console.log(zodis.replaceAll(/[0-9]/g, "x"));
console.log(zodis.concat(', ', 'labas', zodis));
console.log(zodis.toUpperCase());
console.groupEnd();
// RegexP

/*
  Regular expression (reguliariosios išraiškos) - yra nurodytos simbolių sekos, kurias turi atitikti vartotojo vedama informacija.
  \d - digit (skaičius nuo 0 iki 9)
  [0-9] - digit (skaičius nuo 0 iki 9)
  [a-z] - char (raidės nuo a iki z)
  [A-Z] - char (raidės nuo A iki Z)
  {sk} - kiek sykių kartoti prieš tai nurodytą info
  \s - whiteSpace (tarpas)
  ^ - sekos pradžia
  $ - sekos pabaiga
  .....
*/
//  (+370) 644 44444
// let phoneRegex =('^\(\+[0-9]{3}\)\s[0-9]{3}\s[0-9]{5}$');
                         // '^\(\+\d{3}\)\s\d{3}\s\d{5}$'
        // telefono numeris (+666) 666 66666

  // task1 number

  // 1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
  
  function MilkPrice(nr1) {
      if (nr1 % 1 === 0) {
        console.log("Nereiks centų");
      } else {
        console.log("Reiks centų");
      }
    }
//2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).
function MilkPrice(nr1) {
  if (nr1 % 1 === 0) {
    console.log(nr1.toFixed(2)+" Nereiks centų");
  } else {
    console.log(nr1.toFixed(2)+" Reiks centų");
  }
}
//3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

document.querySelector('#degaline form').addEventListener('submit',function(e){
  e.preventDefault();
  const price = parseFloat(document.querySelector('#degaline form .kaina').value);
  const fuelAmount = parseFloat(document.querySelector('#degaline form .degaluKiekis').value);
  const outputElement = document.querySelector('#degaline .output');
  outputElement.innerHTML=(price*fuelAmount).toFixed(2)+ "Eur";
});

// task 2 
//1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
document.querySelector('#task2 form').addEventListener('submit',function(e){
  e.preventDefault();
  const vardas = (document.querySelector('#task2 form .vardas').value);
  const skaicius = parseFloat(document.querySelector('#task2 form .skaicius').value);
  const outputElement = document.createElement('h1');

  // Check if the number of times to repeat name is whole
  if(skaicius % 1 != 0){
    console.log("Turi buti sveikas skaicius");
    return false;
  }
  let parsedName = "";
  for(let i = 0; i < skaicius; i++){parsedName+=vardas+" "};
  outputElement.innerText=parsedName;
  e.target.appendChild(outputElement);
  //   2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
  console.log(vardas.trim().length);
});
 // 3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
 document.querySelector("#task3 .forma").addEventListener('submit',function(e){
  e.preventDefault();

  const nameSurnameArray = document.querySelector("#task3 .VardasPavarde").value.split(" ");
  const nameElement = document.createElement('h1');
  const surnameElement = document.createElement('h1');

  nameElement.innerText=nameSurnameArray[0];
  for(let surname of nameSurnameArray){
     if(surname===nameSurnameArray[0]){continue;}
     surnameElement.innerText+=surname+" ";
  }

  outputContainer.append(nameElement, surnameElement);
});

//4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.

// //      string task 4
// function fullNameSplit(fullName){
//   console.log(fullName.indexOf(' '));
//   let firstSpace = fullName.indexOf(' ');
//   let name1 = fullName.slice(0, firstSpace);
//   let name2 = fullName.slice(firstSpace+1);
//   console.log(name1+'-----'+name2);
// }

// fullNameSplit("Rokas Banaitis trečiasis");

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