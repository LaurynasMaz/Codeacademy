/* Js Pagrindai 
  1) Kintamieji
    String - žodinis kintamasis rašomas kabutėse // '' // "" // ``//
    Number - sakitinis kintamasis
    Boolean  - loginis kintamasis (true/false)
    Array - masyvas
  2) Operatoriai
      Matematiniai(+ trumpiniai) :      
       Aritmetic ones
        + - sudetis
        - - atimtis
        * - daugyba
        / - dalyba
        ** - kelimas laipsniu(šaknies traukimas)
        % - liekanos radimas
                Assigment
        = - lygybė       


                Shortcuts
        ++ - didėjimas vienetu (kazkas = kazkas +1)
        -- - mažėjimas vienetu (kazkas = kazkas -1)
        += - pridejimas (kazkas = kazkas + kazkiek)
        -= - atimimas (kazkas = kazkas - kazkiek)
        *= - dauginimas (kazkas = kazkas * kazkiek)
        /= - dalinimas (kazkas = kazkas / kazkiek)
        %= - liekanos radimas (kazkas = kazkas % kazkiek)
        **= - laipsnio kelimas / saknies traukimas (kazkas = kazkas ** kazkiek)
     Palyginimo : 
      ==  -  ar lygu duomenys
      === - ar lygu duomenys ir tipas
      > - daugiau negu
      < - maziau negu 
      >=  - daugiau arba lygu
      <=  - maziau arba lygu
      Loginiai:
        ! - ne (apevercia reksme)(NOT)
        && - ir                  (AND)
        || - arba                 (OR)

  3) Sąlygos
    if(if else; if elseif else...) : papildoma salyga, kuri tikrinama jeigu auksciau esanti/cios salyga/os grazino false
else if ...
    switch
    ternary(sąlyga?tiesa:melas) (sąlyga&&tiesa) :
      Naudojant && tirkiniama ar abejose pusese yra tiesa, Jei bent vienoje  yra melas - grazina mela, Jeigu kaireje pusėje yra melas dešinės pusės net netrikina.
  Naudojant || tikrinama ar bent vienoje pusėje yra tiesa. Jei bent vienoje pusėje yra tiesa - grąžina tiesa, Jeigu kairėje pusėje yra tiesa - dešinės pusės net netikrina.
  4) Ciklai
    for (for in; for of) :
     for -naudojamas kai zinai kiek kartu vyksta cikas
     for in  - suka ciklą per objektą
     for of - suka ciklą per masyvą
    while (do while) :
      while ciklas naudojamas tuomet, kai negali apsakičiuoti/žinoti kiek kartų reikės vygdyti.
      while (salyga)
      do while - bent vieną sykį būtų paleistas ciklas
    iteraciniai masyvų metodai (forEach, map filter, reduce) :
    
  5) Funcijos
    paprastas funcijos deklaravimas (senasis būdas) :
      Veiksmų seka, kuri yra vygdoma tik tuomet, kai į tą funkciją yra kreipiamasi.
      Parametrai/Argumentai - duomenys, perduodami funckicjai jos iškvietimo metu, su kuriais funkcijos viduje bus atliekami kažkokie veiksmai.
      Return - funckija gali kažką grąžinti. Funkcijos veiksmai vyksta iki tol kol pesiekiamas return
    anoniminės :
    arrow / lambda :
     lambda/ arrow function

      lambda synstax
        paramentras => veiksmas

        (paramentras1,parametras2) => veiksmas

        (paramentras1,parametras2) => {return veiksmas}

        (paramentras1,parametras2) => {
          veiksmas1
          veiksmas2
          return ats;
        }

        let pavadinimas =(paramentras1,parametras2) => {return veiksmas}

        Lambda yra standratizuotas funckijų užrašymo būdas nuo ECMA6 versijos(2015 metų)
        Jis yra trumpesnis, patogesnis, greitesnis.
  6) Metodai
    Number/Math : 
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
    String :
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
    Array :
    pop()       - išimą iš masyvo galo, modfikuoja.
      shift()     - išimą iš masyvo pradžios, modfikuoja.
      push()      - prideda prie masyvo galo, modfikuoja.
      unshift()   - prideda prie masyvo pradžios, modfikuoja.

      reverse()   - apsuka masyvą, modifikuoja masyvą
      slice(nr1, nr2)  - paima nuo  nr1i ki nr2 masyvo elementus
      splice(nr1,nr2,nr3,nr4) - nuo nr 1 trina nr2 kiekį elementų ir toje vietoje iterpia nr3 nr4 nr5 ... elementus , modifikuoja
      arr1.concat(arr2, arr3, arr4) - prie array1 masyvo prijungia arr2 , arr3 arr4 ... masyvus , nemodifikuoja
      sort()      - išrykiuoja masyvą abėcelės tvarka.
        skaičiu problemą spendžiame su (function(a,b){return a-b}); i sort skliaustelius
        žodžiu problema sprendžiama su funkcija kuri yra ikelta i sort skliaustelius (function(a,b){return a.localeCompare(b)})
    Object  
     
  7)Destuktūrizavimas    
*/
// 1) Pasirašyti / susikurti string kintamąjį.
const string = "labas";
// 2) Pasirašyti / susikurti number kintmąjį.
const number = 5;
// 3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.  
const stringArray = ["labas", "ate", "lalala"];
// 4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.
const numberArray = [5,6,8,7,9,11];
// 5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.
const mixArray = [5,"labas", 4, "ate"];
// 6) Išvesti pirmąją 1'os užduoties kintamojo raidę.
console.log(string.charAt(0));
// 7) Išvesti paskutinę 1'os užduoties kintamojo raidę.
console.log(string.charAt(string.length-1));
// 8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.
let middleIndex = Math.floor(string.length/2)
console.log(string[middleIndex]);
// 9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").
function stringLetter(index) {
 return string.charAt(index-1)
}
// 10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.
function isEven(number){
  return number%2 === 0 
}
// 11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.
function isOdd(number){
  return number%2 !==0
}
// 12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.
function isWholeNumber(number){
  return number%1 === 0;
}
// 13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);
function isEvenOrOdd(number){
if(number%2 === 0)
console.log("lyginis");
else
console.log("nelyginis")
}
// 14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
function isItLongerthenFive(array){
  let newArray = array.filter(element=>element.length > 5);
  return newArray;
}


// 15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.
function isItlessthenEight(array){
  let newArray = array.filter(element=>element.length < 8);
  return newArray;
}
// 16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.
function getFirstLetters(array) {
  const firstLetters = array.map(word => word[0])
  return firstLetters;
}
// 17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.
function getLastLetters(array) {
  const lastLetters = array.map(word => word[word.length-1])
  return lastLetters;
}
// 18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")
function getMiddleWord(array, a, b) {
  return array.filter(element=>element.length > a && element.length < b)
}
// 19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
function calculateSum(array) {
  return array.reduce((accumulator, value) => accumulator + value, 0);
}
// 20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.
function calculateEverySecond(array) {
return array.reduce((accumulator, value, i) => (i & 1 ? accumulator + value : sum), 0);
}
// 21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.
function getEveryNth(array, nth) {
  const result = [];

  for (let i = 0; i < array.length; i +=nth) {
    result.push(array[i]);
  }

  return result.reduce((accumulator, value) => accumulator + value, 0);
}

// 22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)
function sumEveryNth(array, n, odd) {
  let sum = 0;
  for (let i = n - 1; i < array.length; i += n) {
    if ((array[i] % 2 !== 0) === odd) {
      sum += array[i];
    }
  }
  return sum;
}
// 23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.
function splitArray(array) {
  let numbers = [];
  let strings = [];
  for (let element of array) {
    if (typeof element === "number") {
      numbers.push(element);
    } else {
      strings.push(element);
    }
  }
  return { numbers, strings };
}

// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
let array = stringArray
array.forEach(element => {
  console.log(element);
});

// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
function getEveryThird(array) {
  const result = [];

  for (let i = 0; i < array.length; i +=3) {
    result.push(array[i]);
  }

  return result;
}

// 3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.
function getEveryNth2(array, nth) {
  const result = [];

  for (let i = 0; i < array.length; i +=nth) {
    result.push(array[i]);
  }

  return result;
}
// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
function isItmorethenFiftyFour(array){
  let newArray = array.filter(element=>element < 54);
  return newArray;
}
// 5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.
function startsWithLetter(array, a){
  let newArray = array.filter(element=>element.charAt[0] === a);
  return newArray;
}
let letter = 'a';
function printStartingWith(array, letter) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === letter) {
        return array[i];
      }
    }
}
console.log(printStartingWith(array, letter))
// 6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).
numberArray.sort(function(a,b){return a-b});
stringArray.sort(function(a,b){return a.localeCompare(b)});
// 7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje
function printEvenNumbers(array) {
    const evenNumbers = array.filter(num => num % 2 === 0).sort((a, b) => b - a);
    console.log(evenNumbers);
  }

// 1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.
{
function getNumbersGreaterThanA(array, A) {
	const greaterNumbers = [];
	for (let i = 0; i < array.length; i++) {
	  if (array[i] > A) {
		greaterNumbers.push(array[i]);
	  }
	}
	return greaterNumbers;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const A = 5;
  
  const greaterNumbers = getNumbersGreaterThanA(numbers, A);
  console.log(greaterNumbers);
}
// 1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.
{
function getNumbersGreaterThanALessThanB(array, A, B) {
	const numbersAB = [];
	for (let i = 0; i < array.length; i++) {
	  if (array[i] > A && array[i] < B) {
		numbersAB.push(array[i]);
	  }
	}
	return numbersAB;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const A = 5;
  const B = 7;
  const numbersAB = getNumbersGreaterThanALessThanB(numbers, A, B);
  console.log(numbersAB);
}
  
// 1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).
{
function getNumbersTF(array, A, B, odd) {
  const result = [];
  for (let number of array) {
    if (number > A && number < B && (number % 2 !== 0) === odd) {
      result.push(number);
    }
  }
  return result;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let A = 2;
let B = 7;
let odd = true;

let result = getNumbersTF(array, A, B, odd);
console.log(result);
}
// 1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.
function getNumbersA(array, A) {
  return array.filter(number => number > A);
}
function getNumbersAB(array, A, B) {
  return array.filter(number => number > A && number < B);
}
function getNumbersABOdd(array, A, B, odd) {
  return array.filter(number => number > A && number < B && (number % 2 !== 0) === odd);
}
// 2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.

function getLongWords(words, A) {
  let longWords = [];
  for (let word of words) {
    if (word.length > A) {
      longWords.push(word);
    }
  }
  return longWords;
}
// 2.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.
function getBetweenABLengthWords(words, A, B) {
  let betweenABLengthWords = [];
  for (let word of words) {
    if (A < word.length < B) {
      betweenABLengthWords.push(word);
    }
  }
  return betweenABLengthWords;
}
// 2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).
function getFilteredWords(words, A, B, uppercase) {
  let filteredWords = [];
  for (let word of words) {
    if (A < word.length < B && word[0].toUpperCase() === uppercase.toUpperCase()) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
}
// 2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.
const getLongWords2 = (words, A) => {
  let longWords = [];
  for (let word of words) {
    if (word.length > A) {
      longWords.push(word);
    }
  }
  return longWords;
}

const getBetweenABLengthWords2 = (words, A, B) => {
  let betweenABLengthWords = [];
  for (let word of words) {
    if (A < word.length < B) {
      betweenABLengthWords.push(word);
    }
  }
  return betweenABLengthWords;
}

const getFilteredWords2 = (words, A, B, uppercase) => {
  let filteredWords = [];
  for (let word of words) {
    if (A < word.length < B && word[0].toUpperCase() === uppercase.toUpperCase()) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
}
// 3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
// 3.1.1) Jeigu atrinkinėja skaičius, tai juos surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.
// 3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).
// 3.2.1) Jeigu atrinkinėja žodžius, tai juos surikiuoti pagal abėcėlę A->Z arba Z->A (true/false) ir grąžintų sutvarkytą masyvą.
// 3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).
// 3 užduoties galutinės versijos funkcijos ir jos kvietimo pvz.: 
// 	funkcija vardas(masyvas, numberArString, didejimoArMazejimo, minimum, maximum);
// 	let rikiuotas = vardas(masyvas3, true, false, 3, 6) -> kintamajam "rikiuotas" grąžina masyvą, kuris susideda iš masyvas3 buvusių elementų, kurie yra: true - number, false - mažėjimo tvarka, 3 - didesni negu 3, 6 - mažesni negu 6.
function filterAndSortArray(array, type, sort, min, max) {
  let result = [];
  for (let item of array) {
    if (typeof item === type) {
      if (type === 'number') {
        if (item >= min && item <= max) {
          result.push(item);
        }
      } else {
        if (item.length >= min && item.length <= max) {
          result.push(item);
        }
      }
    }
  }

  if (type === 'number'){
    if (sort) {
      result.sort(function(a, b){
        return a - b;
      });
    } else {
      result.sort(function(a, b){
        return b - a;
      });
    }
  } else {
    if (sort){
      result.sort();
    } else {
      result.sort().reverse();
    }
  }

  return result;
}
const mixedArray = [5, 'labas', true, true, 18, 14, 'ate','geras', false];
const numbers = filterAndSortArray(mixedArray, 'number', false, 3, 18);
console.log(numbers);
const strings = filterAndSortArray(mixedArray, 'string', true, 2, 3);
console.log(strings);



// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
function arrayToString(array) {
  let string = '';
  for (let i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}
// 2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)

let bigNumber = "544454545645";
function bigNumberEven(number){
  let answer = Array.from(number).map((digit, index, array)=>{
    let finalNumber = "";
    if(digit % 2 === 0 && array[index-1] % 2 === 0){
      finalNumber="-"+digit;
    }
    else{finalNumber+=digit};

    return finalNumber;
  });

  let finalAnswer = "";
  answer.forEach(digit=>finalAnswer+=digit);
  return finalAnswer;
}
console.log(bigNumberEven(bigNumber));


// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
let array1 = ([1, 2, 3, 4, 5, 6, 7]).reduceRight(function(previous, current) {
  previous.push(current);
  return previous;
}, []);
 console.log(array1);
// 4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).
function removeItem(array, ...remove) {
  const filteredArray = array.filter(item => !remove.includes(item));
  return filteredArray;
}
// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.
let numbersTask5 = [2, 4, 9, 2, 0, 16, 24];
let sorted = numbersTask5.slice().sort(function(a, b) {
  return a - b;
});
let smallest = sorted[0],                                   
    largest  = sorted[sorted.length - 1];
console.log('Smallest: ' + smallest);
console.log('Largest: ' + largest);

// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.
{
let arrayTask6 = ["labas","ate","viso"];
let array2Task6 = ["labas","iki","viso"];
const arrayAnswer = arrayTask6.filter(element => array2Task6.includes(element));
console.log(arrayAnswer);
}
// 7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
let arrayTask7 = ['a', 'b', 'c', 'd', 'e', 'f'];
let index = [0, 3, 4];
function findArrayIndex(arrayTask7, index) {
  let newArrayTask7 = [];
  for (let i = 0; i < index.length; i++) {
    newArrayTask7.push(arrayTask7[index[i]]);
  }
  return newArrayTask7;
}
console.log(findArrayIndex(arrayTask7 , index));

// 8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let Task8Array = ['a', 1, 'a', 2, '1'];
let unique = Task8Array.filter(onlyUnique);
console.log(unique);

// 9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.
let task9Array1 = [1, 2, 3, 4];
let task9Array2 = [3, 4, 5, 6];
let task9Array3 = [2, 3, 4, 5];
function commonElementsOfArray(array1, array2, array3) {
  const map = new Map();
  const updateMap = array => {
    array.forEach(entry => {
      if(!map.has(entry)) {
        map.set(entry, 1);
      } else {
        let timesSeen = map.get(entry);
        map.set(entry, ++timesSeen);
      }
    });
  };
  updateMap(array1);
  updateMap(array2);
  updateMap(array3);
  map.forEach((count, key) => {
    // remove all entries not seen at least 3 times
    if (count !== 3) {
      map.delete(key);
    }
  });
  return [...map.keys()];
}
console.log(commonElementsOfArray(task9Array1, task9Array2, task9Array3));
// 10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).
function getNthLargestNumber(numbers, n) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[numbers.length - n];
}
console.log(getNthLargestNumber([12,54,1,65,78,91,45],3))