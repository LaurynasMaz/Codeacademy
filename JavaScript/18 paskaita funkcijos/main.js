//    Ciklai

/*
  do while - bent vieną sykį būtų paleistas ciklas
  for in  - suka ciklą per objektą
  for of - suka ciklą per masyvą

  array interation methods

*/
// do while
{
  console.groupCollapsed('do while');
 let i = 1;
// while(i>10){
//   console.log('veiksmai');
//   i++
// }

do {
  console.log('veiksmai');
  i++;
} while(i>10);
console.groupEnd();
}

// for in
{
  console.groupCollapsed('for in');
  let objektas = {a:1, b:2, c:3, d:4, e:5};
  for(let raktas in objektas){
    console.log(raktas, ':', objektas[raktas]);
  }
  console.groupEnd();
}
// for of
{
  console.groupCollapsed('for of');
  let masyvas = [5,6,8,9,4,5,9,false,false,true,'hallo',5,6,8];
  // for(let i = 0; i < masyvas.length; i++){
  //   typeof(masyvas[i]) === "number" ? console.log(element) : null;
  // }

  for(let element of masyvas){
    typeof(element) === 'number' ? console.log(element) : null;
  // if(typeof(element) === 'number') {
  // console,log(element;)
  //}
  }
  console.groupEnd();
}
// for each
{
  console.groupCollapsed('for each');
  let masyvas = [5,6,8,9,4,5,9,false,false,true,'hallo',5,6,8];
  masyvas.forEach(element => typeof(element) === 'number' ? console.log(element) : null );
  console.groupEnd();
}

//      Funkcijos

/*
  Funkcija -  Veiksmų seka, kuri yra vygdoma tik tuomet, kai į tą funkciją yra kreipiamasi.
  Parametrai/Argumentai - duomenys, perduodami funckicjai jos iškvietimo metu, su kuriais funkcijos viduje bus atliekami kažkokie veiksmai.
  Return - funckija gali kažką grąžinti. Funkcijos veiksmai vyksta iki tol kol pesiekiamas return.
*/

function hello(vardas){
  console.log("Hello " + vardas);
}

function sudetis(nr1, nr2){
  console.log("Why not")
  if(typeof(nr1)==='number' && typeof(nr2)==='number'){
  let atsakymas = nr1 + nr2;
  return atsakymas;
  }
  else {
    return 'Error 404';
  }
  console.log("not heppening")
}

function kiekStringuMasyve(array){
  let kiek = 0
  for(let i = 0; i < array.lenght; i++){
      if(typeof(array[i]) === "string"){
        kiek ++;
      }
  }
  return kiek;
}

/// Mastyvų metodai

/*
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
*/

let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gabaliukas = masyvas.slice(3,6);
let iskirptas = masyvas[3];
masyvas.splice(3, 2, 2, 1, 4, 1);
let sujungtas = masyvas.concat([0,'lesalas','labas', 'aš', 'esu','Lietuviškai'], [false,2,6, 20,'ąsa', 80,'šalta', 756 ]);
sujungtas.sort(function(a,b){return a-b});
let zodziumasyvas =['lesalas','labas', 'aš', 'esu','Lietuviškai'];
zodziumasyvas.sort(function(a,b){return a.localeCompare(b)});


