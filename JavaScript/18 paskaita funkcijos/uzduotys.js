// tasks1

// 1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)

function sudetis(nr1, nr2){
  return nr1 + nr2;
}
function atimtis(nr1, nr2){
  return nr1 - nr2;
}
function daugyba(nr1, nr2){
  return nr1 * nr2;
}
function dalyba(nr1, nr2){
  return nr1 / nr2;
}
function laipnis(nr1, nr2){
  return nr1 ** nr2;
}
function saknis(nr1, nr2){
  return nr1 ** (1/nr2);
}
function liekana(nr1, nr2){
  return nr1 % nr2;
}

// task 2 

// 2) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
function fisrttolast(array){
  for(let element of array){
      console.log(element)
    }

// task 3

// 3) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.
}
// function lastToFirst(array){
//   for(let arrayElement of array.reverse()){
//     console.log(arrayElement)
//   }
// }
function lastToFirst(array){
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

// task 4

// 4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.

let zodziai =['lesalas','labas', 'aš', 'esu','Kurmis','Cirkas','Žiogas','Roma','Vilnius'];
function zodziaimasyvas(zodziai){
  zodziai.sort(function(a,b){return a.localeCompare(b)});
}

// task 5

//5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.

let skaiciai = [1, 5, 3, 4, 6, 9, 7, 10, 9, 44, 2, 18];
function skaiciumasyvas(skaiciai){
  skaiciai.sort(function(a,b){return a-b});
}

// task 6

// 6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

function eile(num1, num2){
  for(let i = num1; i < num2+1; i++){
     console.log(i);
  }
}

// function nuoIki(nr1, nr2){
//   let arrayToReturn = [];
//   for(let i = nr1; i <= nr2; i++){
//     arrayToReturn.push(i);
//   }
//   return arrayToReturn;
// }

// task 7

// 7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)
function eile2(num1, num2, num3){
  for(let i = num2; i < num3+1; i+=num1){
     console.log(i);
  }
}
// function nuoIkiZingsniu(step, nr1, nr2){
//   let arrayToReturn = [];
//   for(let i = nr1; i <= nr2; i+=step){ // i = i + step
//     arrayToReturn.push(i);
//   }
//   return arrayToReturn;
// }
// task 8

// 8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).
function zodzioIlgis(vardas, pavarde){
  console.log((vardas+pavarde).length);
}
// task 9

// 9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

function skaiciaiIraides(num) {
  let raides = '';
  while (num >= 0) {
      raides = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + raides;
      num = Math.floor(num / 26) - 1;
  }
  return raides;
}

function abecelesRaides(kelinta){
const alphabet = ['A','Ą', 'B','C', 'Č', 'D','E', 'Ę','Ė','F','G','H','I', 'Į', 'Y', 'J',' K','L', 'M', 'N', 'O','P','R', 'S','Š', 'T','U', 'Ų', 'Ū', 'V', 'Z','Ž'];
return alphabet[kelinta-1];
}

//task 10

// 10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function matematika(n1, n2, operator){
  if(operator==='sum'){
    return n1+n2;
  }
  else if(operator==='sub'){
    return n1-n2;
  }
  else if(operator==='multi'){
    return n1*n2;
  }
  else if(operator==='div'){
    return n1/n2;
  }
}
// task 11 

// 11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function BetKoksSkaicius(){
  let randomSkaicius = Math.floor(Math.random()*11);
  let pakeltasKvadratu = skaiciausKvadratas(randomSkaicius);
  return pakeltasKvadratu;
}
function skaiciausKvadratas(skaicius){
  return skaicius**2;
}
function randomNumber_1_To_10(){
  return Math.ceil(Math.random()*10);
}
function squareNumber(){
  return randomNumber_1_To_10()**2;
  // return Math.pow(randomNumber_1_To_10(), 2);
}
// extra0) Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])

  let masyvas1 = [1,2,3,4,5,6,7];
  let masyvas2 = ['a','b','c'];

  function fancyMasyvuJungimas(arr1, arr2){
   while(arr2.length){
      arr1.splice(arr2.length,0,arr2.shift());
   }
   return arr1;
  }
  
  console.log(fancyMasyvuJungimas(masyvas1, masyvas2));
// extra1) Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.
function number(num1, num2){
  for(let i = num1; i < num2+1; i++){
    if (i  % 3 === 0 && i % 5 === 0) {
     console.log ("Fizz Buzz");
    }else if (i % 3 === 0) {
      console.log ("Fizz");
    } else if (i % 5 === 0) {
      console.log ("Buzz")
    }
    else {console.log (i);
    }
  }
}

  

// extra2) Sukurti funkciją, kuri randa visus pirminius skaičius iki nurodyto parametro.
function pirminiai(num1, num2){
  for(let i = num1; i < num2+1; i++){
    if (i % i === 0 && i % 1 === 0)  {
     console.log (i);
     }
    }
  }

