//  lambda/ arrow function

// lambda synstax
/*
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
*/

// senuoju budu

function daugyba(par1, par2){
  return par1*par2;
}
// naujuoju (lambda/arrow)
  let daugyba1 = (par1, par2) => par1*par2;

 //1) Parašykite lambda, kuri grąžina tekstą "Labas!".
 
  let Hello = ()=>"labas";
 
 // 2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.
  let sum = (nr1, nr2) => nr1+nr2;

//3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.

  let ilgis = (word) => word.length;

// 4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.
  let firstLetter = (word) => word.charAt(0);  

//5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.
  let lastLetter = (word) => word.charAt(word.length-1);

//6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą. 
  let squere = (nr1, nr2) => nr1**nr2;

//7+) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę. 
  let getStringsInArray = (array)=>{
    // for(let i = 0; i < 5; i++){}
    // for(let word of array){}
    for(let word of array){console.log(word)};
  };


//8+) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę. 
 let everySecondWordInArray = (array)=>{
  for(let i = 0; i < array.length; i+=2){
    console.log(array[i])
  }
};
//9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.
let everyNthWordInArray = (array, element)=>{
  for(let i = 0; i < array.length; i+=element){
    console.log(array[i])
  }
};

// 10+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius skaičius.
let allEvenNumbersInArray = (array)=>{
  for(let number of array.sort()){number%2===0?console.log(number):null}
}
// 11+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik nelyginius skaičius.
let allOddNumbersInArray = (array)=>{
  for(let number of array.sort()){number%2===1?console.log(number):null}
}
// 12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių. 
let stringsThreeInLength = (array)=>{
  for(let word of array){word.length>3?console.log(word):null}
};

// 13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia (nurodyta) raide.
let letterInArray = (letter,array)=>{
  for(let word of array){word[0]===letter?console.log(word):null} 
}
// 14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide. (A - trumpiausias galimas žodžio ilgis, B - ilgiausias galimas žodžio ilgis).
let mixedLettersArray =(minLength, maxLength,array)=>{
  for(let word of array){
    if(word[0]!==word[0].toLowerCase()){continue}
    if(word.length>minLength && word.length<maxLength){console.log(word)
    }
  }
}


// 15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.
let onlyWordsInArray = (array)=>{
  let arrayWords = [];
  for (let element of array){
    typeof(element)=== 'string'?arrayWords.push(element):null;
  }
  return arrayWords
}
  
// 16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).
let onlyWordsInArrayMin = (minLength,array)=>{
  let newWordsArray=[];
  for(let element of array){
    if(typeof(element)!=='string'){continue};
    if(element.length>minLength){newWordsArray.push(element)};
  }
  return newWordsArray;
}

// 17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.
let onlyUpperCaseWordsInArray= (array)=>{
  let arrayBig = [];
  for(let element of array){
    if (typeof(element)!== 'string'){continue};
    if(word[0]!==word[0].toUpperCase())arrayBig.push(element);
  } 
  return arrayBig;
}

// 18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.
let onlyNumbersInArray= (array)=>{
  let numberArray = [];
  for(let element of array){
    if (typeof(element)!== 'number')numberArray.push(element);
  }
  return numberArray;
}

// 19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).


// 20+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra mažesni negu A. (A - didžiausias galimas skaičius).

// 21++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B. (A - mažiausias galimas skaičius, B - didžiausias galimas skaičius).

// 22+++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides, tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)
 // Masyvų matodai




  // 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
    
    let string =(stringArray) =>
    stringArray.toString();

  // 2) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
    
    let reversedArray = array=>{
    let reversedArray=[];
    for(let i = array.length-1; i >= 0; i--){reversedArray.push(array[i])};
    return reversedArray;
  }
  // 3) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius. (galima su forEach arba paprastu for)
  let biggestSmallestNumber = (array)=>{
    for(let number of array){
      let biggestNumber=true;
      for(let anotherNumber of array){
         if(number<anotherNumber){biggestNumber=false;break};
         }
      if(biggestNumber){console.log("Didžiausias skaičius:",number);break};
          };
      for (let number of array){
        let smallestNumber = true;
        for(let anotherNumber of array){
          if(number>anotherNumber){smallestNumber=false;break};
        }
        if(smallestNumber){console.log("Mažiausias skaičius:",number);break};
      }
    }
  // 4) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.
  getRepeatingElements = (array1, array2)=>{
    for(let element of array1){
      for(let element2 of array2){
        if(element===element2){console.log(element)}
      } 
    }
  } 

  let mas4_1 = [1,2,3,4,5,6];
  let mas4_2 = [4,9,5,8,7,6,1];
  let zodzMas41 = ['labas','ąžuolas', 'žodis', 'aha','haha','hihi'];
  let zodzMas42 = ['labas','hihi','ate','ąžuolas','ąsotis', 'žodis', 'kanarėlė'];
  let vienodi = (arr1, arr2) => {
    // let arrToReturn = [];
    for(let i = 0; i < arr2.length; i++){
      arr1.includes(arr2[i]) ? console.log(arr2[i]) : null;
    }
    // return arrToReturn;
  }
  
  vienodi(mas4_1, mas4_2);
  vienodi(zodzMas41, zodzMas42);
  
  // 5) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
  let arrayFromindex =(array, indexArray)=>{
    let array2=[];
    for(let index of indexArray){array2.push(array[index])}
  }
 
  // Iteraciniai masyvų metodai
  /*
/*
  Iteraciniai masyvų metodai - iteruoja per masyvą ir leidžia atlikti kažkokį veiksmą su kakviena iteraciją.
  Naudinga naudoti tose situacijose kuriose negalimas parastas for arba for of
*/ 
/*
  Iteracianiai masyvu metodai
  forEach() - Iteruoja  per masyvo elementus
  map()  - Grąžina naują kažkaip modifikuotą msayvą
  filter() - Grąžina naują masyvą, kurs atitinka nurodytą sąlygą
  reduce() - Grąžina reikšmė, kuri susideda iš viso masyvo modifikuotų elementų nuo pradžios iki galo.

  reduceright() - Grąžina reikšmė, kuri susideda iš viso masyvo modifikuotų elementų grąžina reikšmę nuo galo iki pradžios
  some()        - tikrina ar bent vienas masyvo elementas atitinka kažkokią salyga ir grąžina true/false         
  every()       - tikrina ar kiekvienas vienas masyvo elementas atitinka kažkokią salyga ir grąžina true/

  find()         - ieško masyve sąlyga atitikančio  pirmojo elementą ir jį grąžina (jeigu neranda grąžina undifiend)
  findLast()     - ieško masyve sąlyga atitikančio  paskutinio elementą ir jį grąžina (jeigu neranda grąžina undifiend)
  findIndex()    - ieško masyve sąlyga atitikančio  pirmojo elemento ir jį grąžina jo indeksą (jeigu neranda grąžina -1)

  findLastIndex()- ieško masyve sąlyga atitikančio  paskutinio elemento ir jį grąžina jo indeksą (jeigu neranda grąžina -1)
  flatMap()      - grąžina naują masyva kuiame visi elemntai yra vienu lygmentu  žemiau ir kažkaip papildomai modifikuoti galbūt/

  at()
  concat()
  copyWithin()
  join()
  keys()
*/ 
/*
   syntax for every iterarion method excpet reduce , reduceRight, sort
   someArray.forEach(element => veiksmai)
   someArray.forEach((element, iteration) => veiksmai)
   someArray.forEach((element, iteration, array) => veiksmai)
   element - e
   itration - i

*/ 
let mokomasisMasyvas =[4,6,2,"zodis",false,false,4];
//  forEach()  - neatlieka kažko extra
/*
   minusai :
   Negali buti sustabdytas (break)
   Negražina jokios reikšmės (return)
*/ 
console.groupCollapsed('forEach')
mokomasisMasyvas.forEach(element => console.log("masyvo elementas",element));
mokomasisMasyvas.forEach((element, iteracija) => console.log("masyvo " + iteracija +" elementas",element)); 
mokomasisMasyvas.forEach((element, iteracija, masyvas) => console.log("masyvo " + iteracija +" elementas",element," sekantis elementas yra", masyvas[iteracija+1])); 
console.groupEnd();

// map - grąžina naują kažkaip modifikuotą  masyvą.
let naujasMasyvas = mokomasisMasyvas.map(element => element+5);
console.log(mokomasisMasyvas)
console.log(naujasMasyvas)

// filter - grąžina naują masyvą, kurs atitinka nurodytą sąlygą

   naujasFiltruotasMasyvas = mokomasisMasyvas.filter(element => typeof(element) ==='number');
   console.log(mokomasisMasyvas)
   console.log(naujasFiltruotasMasyvas)


// reduce - grąžina reikšmė, kuri susideda iš viso masyvo modifikuotų elementų nuo pradžios iki galo
// reduceRight - kuri susideda iš viso masyvo modifikuotų elementų grąžina reikšmę nuo galo iki pradžios
/*
   syntax for reduce , reduceRight
   someArray.reduce((accumulator, element) => veiksmai)
   someArray.reduce((accumulator, element, iteration) => veiksmai)
   someArray.reduce((accumulator, element, iteration, array) => veiksmai)
    someArray.reduce((accumulator, element) => veiksmai, InitialValue)
   someArray.reduce((accumulator, element, iteration) => veiksmai, InitialValue)
   someArray.reduce((accumulator, element, iteration, array) => veiksmai, InitialValue)
   element - e
   itration - i

*/ 
let reduceintasMasyvas = mokomasisMasyvas.reduce((bendras, elementas) => {
  console.log(bendras);
  return bendras + ' ' + elementas;
}, 'pradžia');
console.log(reduceintasMasyvas);
console.log(mokomasisMasyvas);