/*console.log("Labas Rytas JS`e")*/

// komentaras 

// Kintamieji 

/*
string - žodinis kintamasis rašomas kabutėse // '' // "" // ``//
number - sakitinis kintamasis
bootlean/bool - loginis kintamasis (true/false)

null - tusčias
undifined - neapibrėštas
NaN - Not a Number

array - masyvas
object - objektas

---------------------------------------------------------------------

var/let/const -  kintamųjų ribų nurodymai
nameOrSmth - kintamjojo vardas
value - kintamojo reikšmė

*/

let manoVardas0 = "Laurynas";
let manoVardas1 = 'Laurynas';
let manoVardas2 = `Laurynas`;

let manoAmzius0 = 27;
let manoAmzius1 = 27.2;
let manoAmzius2 = 26+1.2;

let vedeIrTuriVaiku= false;
let nevedeIrTuriVaiku= true;

let Skitamasis1 ='Pelė';
let Skitamasis2 ='Monitorius';
let Skitamasis3 ='Klavetūra';
let Skitamasis4 ='Laptopas';
let Skitamasis5 ='Dėžė';

let Nkintamasis1 = 12;
let Nkintamasis2 = 22;
let Nkintamasis3 = 31;
let Nkintamasis4 = 42;
let Nkintamasis5 = 55;

let arlaptop= false;
let arDeze= true;

//-----------------------------------------------------------------

//                   Operatoriai  

/* 
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

        Comperason

==  -  ar lygu duomenys
=== - ar lygu duomenys ir tipas
> - daugiau negu
< - maziau negu 
>=  - daugiau arba lygu
<=  - maziau arba lygu

        Logical
! - ne (apevercia reksme)(NOT)
&& - ir                  (AND)
|| - arba                 (OR)

        Type
typeof - tikrina tipa
instanceof





*/

// Task2
{
console.log('Skitamasis1 + Skitamasis2', Skitamasis1 + Skitamasis2);
console.log('Skitamasis4 - Skitamasis5', Skitamasis4 - Skitamasis5);
console.log('Skitamasis3 * Skitamasis5',Skitamasis3 * Skitamasis5);
console.log('Skitamasis2 / Skitamasis5', Skitamasis2 / Skitamasis5);
console.log('Skitamasis2 **Skitamasis5',Skitamasis4 ** Skitamasis5);
console.log('Skitamasis2 % Skitamasis5',Skitamasis5 % Skitamasis5);
console.log( 'Skitamasis3++',Skitamasis3++);
console.log( 'Skitamasis2--',Skitamasis3--);

console.log('Nkitamasis1 + Nkitamasis2',Nkintamasis1 + Nkintamasis2);
console.log('Nkitamasis1 - Nkitamasis2',Nkintamasis4 - Nkintamasis5);
console.log('Nkitamasis1 * Nkitamasis2',Nkintamasis3 * Nkintamasis5);
console.log('Nkitamasis1 / Nkitamasis2',Nkintamasis2 / Nkintamasis5);
console.log('Nkitamasis1 ** Nkitamasis2',Nkintamasis4 ** Nkintamasis5);
console.log('Nkitamasis1 % Nkitamasis2',Nkintamasis5 % Nkintamasis5);
console.log('Nkitamasis3++',Nkintamasis3++);
console.log('Nkitamasis--',Nkintamasis2--);

console.log('Skitamasis1 + Nkintamasis2',Skitamasis1 + Nkintamasis2);// veikia tik + 
console.log('Skitamasis1 - Nkintamasis2',Skitamasis1 - Nkintamasis2);
console.log('Skitamasis1 * Nkintamasis2',Skitamasis1 * Nkintamasis2);
console.log('Skitamasis1 / Nkintamasis2',Skitamasis1 / Nkintamasis2);
console.log('Skitamasis1 ** Nkintamasis2',Skitamasis1 ** Nkintamasis2);
console.log('Skitamasis1 % Nkintamasis2',Skitamasis1 % Nkintamasis2);

// naudojant matematinius orperatoroius su boolean tipo kintamsiais, boolean tipo kintamieji yra verčiami  į 0 ir 1. false - 0 ; true - 1
console.log('arDeze + arlaptop',arDeze + arlaptop);
console.log('arDeze - arlaptop',arDeze - arlaptop);
console.log('arDeze * arlaptop',arDeze * arlaptop);
console.log('arDeze / arlaptop',arDeze / arlaptop);
console.log('arDeze ** arlaptop',arDeze ** arlaptop);
console.log('arDeze % arlaptop',arDeze % arlaptop); // tik sitas negalimas
console.log('arlaptop++',arlaptop++);
console.log('arDeze',arDeze--);
}

// task3
{
console.log('Nkintamasis1 += Nkintamasis2',Nkintamasis1 += Nkintamasis2);
console.log('Nkintamasis1 -= Nkintamasis2',Nkintamasis4 -= Nkintamasis5);
console.log('Nkintamasis1 *= Nkintamasis2',Nkintamasis3 *= Nkintamasis5);
console.log('Nkintamasis1 /= Nkintamasis2',Nkintamasis2 /= Nkintamasis5);
console.log('Nkintamasis1 **= Nkintamasis2',Nkintamasis4 **= Nkintamasis5);
console.log('Nkintamasis1 %= Nkintamasis2',Nkintamasis5 %= Nkintamasis5);
console.log('Nkintamasis3++',Nkintamasis3++);
console.log('Nkintamasis2--',Nkintamasis2--);
console.log('Skitamasis1 += Skitamasis2', Skitamasis1 +=Skitamasis2);
}
// task4
{
console.log('Nkitamasis1 == Nkitamasis2',Nkintamasis1 == Nkintamasis2);
console.log('Nkitamasis1 != Nkitamasis2',Nkintamasis1 != Nkintamasis2);
console.log('Nkitamasis1 !== Nkitamasis2',Nkintamasis1 != Nkintamasis2);
console.log('Nkitamasis1 === Nkitamasis2',Nkintamasis4 === Nkintamasis5);
console.log('Nkitamasis1 > Nkitamasis2',Nkintamasis3 > Nkintamasis5);
console.log('Nkitamasis1 < Nkitamasis2',Nkintamasis2 < Nkintamasis5);
console.log('Nkitamasis1 >= Nkitamasis2',Nkintamasis4 >= Nkintamasis5);
console.log('Nkitamasis1 <= Nkitamasis2',Nkintamasis5 <= Nkintamasis5);
}

//    Sąlygos

/*

if - pradinė sąlyga
else if - papildoma salyga, kuri tikrinama jeigu auksciau esanti/cios salyga/os grazino false
else if ...
else - vydomas jeigu visos aukciau esancios salygos grazino false.
                  Nesting
Salygos viduje rasoma kita salyga

*/
{
  let amzius = 15;
  if(amzius>= 18){
    console.log('Esi pilnametis');
    if(amzius > 90 && amzius < 130){
      console.log('Esi pensininkas');
    }
    else if(amzius < 90){
        console.log('Esi darbingo amziaus zmogus');
    }
    else{
      console.log('kaip tu dar gyvas?');
    }
  }
    else if(amzius < 7){
    console.log('Esi iki mokyyklinio amziaus');
  }
  else{
    console.log('Esi mokyklinukas');
  }
}
 // task 5 6 7
{
  let teises = true;
  let auto = true;
  let blaivas = false;
  if(teises === true ){
    console.log('Turi teises')
    if(auto == true && blaivas === true){
      console.log('Turi automobili');
    }
    else if(auto === false){
        console.log('Neturi automobilio niekur nevaziuosi ');
    }
    else{
      console.log('Eik isiblaivyk');
    }
  }
  else{
    console.log('Neturi teisiu');
  }
}

//       AND and OR
/*
  Naudojant && tirkiniama ar abejose pusese yra tiesa, Jei bent vienoje  yra melas - grazina mela, Jeigu kaireje pusėje yra melas dešinės pusės net netrikina.
  Naudojant || tikrinama ar bent vienoje pusėje yra tiesa. Jei bent vienoje pusėje yra tiesa - grąžina tiesa, Jeigu kairėje pusėje yra tiesa - dešinės pusės net netikrina.
*/
if(5=='5' && typeof('5') == typeof(5)){
  console.log('lygu');
} else{
  console.log('nelygu');
}
if(true || false){
  console.log('tiesa');
} else{
  console.log('melas');
}

//                         Sąlygu trumpiniai truthy and falsy

/*
truthy - true  | not 0 number | 'string'        | []array  | {}object | () => {} funkcija
falsy -  false | 0            | '' empty string | undifined | null     | NaN
*/
if(''){
  console.log('truthy');
} else{
  console.log('falsy');
}

//      Switch

/*

*/
//let switchKintamasiss=  prompt('Kuria spalva megsti?')
let switchKintamasis = 'ruda';

switch(switchKintamasis){
  case 'geltona':
  case 'raudona':
    console.log('Tu megstu ryskias spalva');
    break;
  case 'melyna':
  case 'ruda':
    console.log('Tamsios spalvos');
    break;
}
/*
let miestas=  prompt('Is kurio miesto esate?')
switch(miestas){
  case'Kaunas':
    console.log('Kaunas yra Lietuvos sirdis, jei vilnieciai neupyks');
    break;
  case'Vilnius':
    console.log('Vilnius yra Lietuvos sostine , Kaunas shhs');
    break;
  case'Klaipeda':
    console.log('Klaipeda vienintelis Lietuvos miestas su normaliu uostu.');
    break;
  default:
    window.alert('Tokio miesto nera');
    break;
}
*/

let miestas=  prompt(' Sveiki is kurio miesto esate?')
  if(miestas == 'Alytus' ){
    console.log('Sveikas Alytiski');
  }
  else if(miestas == 'Kaunas'){
      console.log('Sveikas Kaunieti');
  }
  else if(miestas == 'Vilnius'){
    console.log('Sveikas Vilnieti');
}
  else{
    console.log('Sveikas Lietuvi');
  }

  let menesis=  prompt('Koks dabar mėnesis?')
switch(menesis){
  case'Gruodis':
  case'Sausis':
  case'Vasaris':
    console.log('Dabar yra žiema.');
    break;
  case'Kovas':
  case'Balandis':
  case'Gegužė':
    console.log('Dabar yra pavasaris');
    break;
  case'Birželis':
  case'Liepa':
  case'Rugpjūtis':
    console.log('Dabar yra vasara.');
    break;
    case'Rugsėjis':
    case'Spalis':
    case'Lapkritis':
      console.log('Dabar yra Ruduo.');
      break;
}

