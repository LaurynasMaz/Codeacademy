//     Kintamieji 
/*  
 Objektas - Obeject - {raktas:reksmė, raktas1:reikmė1....}
 Masyvas - Array - [reiksme, reiksme, reiksme...]

 Tiek objektas , tiek masyvas yra konteineriniai kintamieji. Tai reiškia, kad jų viduje galima talpinti keletą reikšmių (gali būti skirtingų kintamūjų tipų).
*/

//     Objektai
{console.groupCollapsed('objektai');
  /*
  let vardas ='Laurynas';
  let pavarde = 'Mazeika';
  let amzius = 27;
  let vedes = false;
  console.log(vardas);
  console.log(pavarde);
  console.log(amzius);
  console.log(vedes);

  let vardas1 ='Rokas';
  let pavarde1 = 'Banaitis';
  let amzius1 = 26;
  let vedes1 = false;
  console.log(vardas1);
  console.log(pavarde1);
  console.log(amzius1);
  console.log(vedes1);*/
 


  let zmogus = {
    vardas: 'Laurynas',
    pavarde:'Mazeika',
    amzius:27,
    vedes:false,
    vieta: {
      Miestas: 'Alytus',
      salis: 'Lietuva',
      zemynas: 'Europa',
      planeta:'Žemė'
    }
  }
  console.log(zmogus.vardas);
  console.log(zmogus.pavarde);
  console.log(zmogus.amzius);
  console.log(zmogus.vedes);
  console.log(zmogus.vieta.Miestas);

  let zmogus1 = {
    vardas: 'Petras',
    pavarde:'Petraitis',
    amzius:26,
    vedes:false
  };
  console.log(zmogus1);
  zmogus1.vardas = 'Jonas';
  zmogus1.ugis = 184;
  console.log(zmogus1);
  console.groupEnd();
}
//    Masyvai
{
  console.groupCollapsed('masyvai');
  let menesis ="Sausis";
  let menesis1 ='Vasaris';
  let menesis2 ='Kovas';
  let menesis3 ='Balandis';
  let menesis4 ='Gegužė';
  //.....

  // let menesiai ={
  //   pirmas:'Sausis',
  //   antras:'Vasaris',
  //   trecias:'Kovas'
  // }
  let menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis' ];
  console.log(menesiai[10]);

  let masyvas = [222, 22 , 22222, false , [5, 8, 'Roma', true, 'Klaida'],'Masina', 'Laukas', true ];
  console.log(masyvas);
  masyvas[1] ='pakeistas';
  masyvas.push('push'); // push - prie masyvo galo prideda naują reiksmę.
  masyvas.unshift('unshift') ;// unshift prideda prie masyvo pradzios naują reiksmę.
  console.log(masyvas);
  let masyvobandymoMetodai = masyvas.pop(); // pop - iš masyvo išima paskutinį elementą.
  masyvobandymoMetodai = masyvas.shift(); // shift -  iš masyvo išima pirmą elementą.
  masyvobandymoMetodai = masyvas.length; // lenght - mastyvo ilgio duomuo(number)
  console.log(masyvas);
  console.log(masyvas[0]);
  console.log(masyvas[masyvas.length-1]);
  console.groupEnd();
}

//   Masyvai ir Objektai
{ console.groupCollapsed('masyvai ir obektai');
  let mixed1 = {
    vardas: 'Laurynas',
    pavarde:'Mazeika',
    amzius:27,
    vedes:false,
    vieta: {
      Miestas: 'Alytus',
      salis: 'Lietuva',
      zemynas: 'Europa',
      planeta:'Žemė'
    },
    pomegiai: ['Sportas', 'PC games', 'Gulet']
  }
  console.log(mixed1.vardas + " turi " + mixed1.pomegiai.length + " pomegius.")
  console.log(mixed1.vardas + " vienas is pomegiu  " + mixed1.pomegiai[1] + ".")
  console.log(mixed1.vardas + " vienas is pomegiu  " + mixed1.pomegiai[Math.floor(Math.random()*mixed1.pomegiai.length)] + ".")
  console.log(Math.floor(Math.random()*mixed1.pomegiai.length));

  let mixed2 =[
    {
    vardas: 'Laurynas',
    pavarde:'Mazeika',
    amzius:27,
    },
    {
    vardas: 'Petras',
    pavarde:'Petraitis',
    amzius:28,
    },
    {
    vardas: 'Jonas',
    pavarde:'Jonaitis',
    amzius:47,
    }
  ];
  console.log(mixed2)
  console.groupEnd();
}
// Sąlygos
/*
  If Else
  switch
  Ternary(max trumpintas if else) sąlyga ? jeigu tiesa: jeigu melas
  OR - AND - galimas if sąlygų trumpinimas
*/
// Ternary
{ console.groupCollapsed('tennary')
  if(10>5){
  console.log('Tiesa');
  } else { 
    console.log('Melas');
  }

  10 > 5 ? console.log('tiesa'): console.log('melas');

  // let number = prompt('Iveskite skaiciu')
  let number = 10;
  if(number > 20){
    console.log('20 -> infinity');
  } else if(number <= 0){
    console.log('- infinyti -> 0');
  } else{
    console.log('0 -> 20');
  }

  number > 20 ? console.log('20 -> infinity') : number <=0
              ? console.log('- infinyti -> 0') : console.log('0 -> 20');
  console.groupEnd();
}
// task1 
{
let string1 ='String1';
let string2 ='String2';
let string3 ='String3';
let string4 ='String4';
let string5 ='String5';

let Number1 ='Number1';
let Number2 ='Number2';
let Number3 ='Number3';
let Number4 ='Number4';
let Number5 ='Number5';

let bool1 = true;
let bool2 = false;
let bool3 = false;
}
// task 2 
{ console.groupCollapsed('task')
  let masyvas1 = ['zodis1', 'zodis2', 'zodis3' , 'zodis4' , 'zodis5' , 'zodis6'];
 
  let zmogus = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 44,
    vedes: true,
    turivaiku: false,
    turiDarba:true
  }
  

  let masyvas2 = ['zodis1', 'zodis2', 'zodis3' ,['zodelis1','zodelis2','zodelis3','zodelis4',], 'zodis4' , 'zodis5' , 'zodis6'];
 

  let masyvas3 = ['zodis1', 'zodis2', 'zodis3' , 'zodis4',
    {
      zodelis:'1',
      zodelis1: 1,
      zodelis2:'masina',
      zodelis3: true
    }
  ];


  let zmogus1 = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 44,
    vedes: true,
    pomegiai: ['betkas', 'betkas1', 'betkas2', 'betkas3' ]
  }
  

  let zmogus2 = {
    vardas: 'Jonas',
    pavarde:'Jonaitis',
    amzius:44,
    vedes:true,
    vieta: {
     gatve: 'gera',
     miestas:'dar geresnis',
     salis:'nuostabi',
     planeta:'geriausia'
    }
  }
  



  /// task 3 ir 4
  console.log (masyvas1[0], masyvas1[1])
  
  console.log(zmogus.vardas);
  console.log(zmogus.pavarde);


  console.log (masyvas2[0], masyvas2[3][3],masyvas2[5]);

  console.log(masyvas3[1],masyvas3[3], masyvas3[4].zodelis);

  console.log(zmogus1.vardas + " " + zmogus1.pomegiai[1] +  " "  + zmogus1.amzius + ".")

  console.log(zmogus2.amzius);
  console.log(zmogus2.pavarde);
  console.log(zmogus2.vieta.miestas);

  console.log ([0]>[2])
  console.log(zmogus.vardas < zmogus.pavarde);
  console.log (masyvas2[0] > masyvas2[3][2])
console.groupEnd();
}
// 5 uzduotis
{
// 
//   let lytis= prompt('kokia tavo lytis?');

//   if(lytis =='moteris'){
//     console.log('Tu esi moteris');
//   } else if(lytis == 'vyras'){
//     console.log('Tu esi vyras');
//   }
// 
}
// Ciklai
/*
  for
  while

  for in
  for of
  do while

  Ciklai - yra kartojami nurodyti veiksmai, tol kol yra tenkinama pateikta sąlyga.
*/

//    for -naudojamas kai zinai kiek kartu vyksta cikas
{console.groupCollapsed('for');
// for(iteratoriaus, salyga(iteratoriumi), iteratoriausKitimas ){
//   //veiksmai
// }

  for(let i=0; i < 10; i++ ){
    console.log(i)
  }
  // for(let i=1; i <= 10; i++ ){
  //   console.log(i)
  // }
  let masyvas = [1,2,3,4,5,6,7,8,9,5,2,5,4];
  for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}
  console.groupEnd();
}



// while 
/*
  while ciklas naudojamas tuomet, kai negali apsakičiuoti/žinoti kiek kartų reikės vygdyti.
  while (salyga)
  veiksmai
*/
{
console.groupCollapsed('while')

let masyvas = [1,2,3,4,5,6,7,8,9,5,2,5,4];
console.log(masyvas);
while(masyvas.length){
 console.log(masyvas.shift());
}
console.log(masyvas)

let i = 1;
while(i <= 10){
  console.log(i);
  i++;
}


console.groupEnd();
}
{

  {
  console.group('task6');
  
    var skaiciuMasyvas =[]
    for(i=0; i < 50; i++ ){
    skaiciuMasyvas.push(Math.floor(Math.random()*101))
    }
    console.log(skaiciuMasyvas);
    
    console.groupEnd();
  } 
  {
    console.group('task7');

    for(let i = 0; i < skaiciuMasyvas.length; i+=3){
      console.log(skaiciuMasyvas[i]);
  }
    console.groupEnd();
  }
  {
    console.group('task8');

    skaiciuMasyvas = skaiciuMasyvas.reverse();
    for(let i = 0; i < skaiciuMasyvas.length; i+=2){
      console.log(skaiciuMasyvas[i]);
    }

    console.groupEnd();
   }   
  {
    console.group('task9');

    for(let i = 0; i < skaiciuMasyvas.length; i++){
    skaiciuMasyvas[i] > 54 ? console.log(skaiciuMasyvas[i]) : null;
    }
    console.groupEnd();
          
   } 
  {
     console.group('task10');
        for(let i = 0; i < skaiciuMasyvas.length; i++){
        if (skaiciuMasyvas[i] % 2 == 0 )
      console.log(skaiciuMasyvas[i]);
      }
      console.groupEnd();
    }
      {console.group('task10 - 2 ');
        for(let i = 0; i < skaiciuMasyvas.length; i++){
        if (skaiciuMasyvas[i] % 2 !== 0 )
      console.log(skaiciuMasyvas[i]);
        }
       console.groupEnd();
      }
      
  console.groupEnd();
 
  }
  
  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}