// Klasės

/*
Klasės yra objektų kurimo šablonas
Klasė privalo būti aprašyta prieš kreipiantis į ją.
Klasių pavadinimai rašomi iš didžiujų raidžių
Klasės konstruktoriuje this. yra privalomas
*/

/*
syntax
class pavadinimas{
 constructor(a, b,){
  this.a = a;
  this.b = b;
 }
 methots...
}
*/

// kuriame objektų masyvą be klasių
let asmenysbeKlasiu = [
  {
    vardas: "Laurynas",
    mazius: 27,
    turiVaiku:false
  },
  {
    vardas: "Petras",
    mazius: 50,
    turiVaiku: true
  }
];
{
// kuriame bjektų masyvą su kalsėmis
 class Asmuo{
  constructor(a, b, c){
    this.vardas = a.split(" ")[0];
    this.pavarde = a.split(" ")[1];
    this.amazius = b;
    this.turiVaiku = c;
  }
  pasivekinaSu(vardas){
    return this.vardas + " pasisveikina su " + vardas
  }
 };

let asmenysSuKlesemis = [
  new Asmuo("Laurynas Mazeika",27,false),
  new Asmuo("Rokas Banaitis",26,false)
];

 console.log(asmenysSuKlesemis);
 console.log(asmenysSuKlesemis[0].pasivekinaSu('Jonas'));
}

class Ledai {
  constructor(pavadinimas, skonis,kaina){
    this.pavadinimas = pavadinimas;
    this.skonis = skonis;
    this.kaina = kaina;
  }
 kainosKeitimas(keitimasProcentais){ /// neigiamas % procentas kaina mazinama 
  return this.kaina + this.kaina * keitimasProcentais/100;
  }
}

const leduMasyvas = [
  new Ledai ("Dadu","karamelinis", 1.2),
  new Ledai ("Tirpuko", "avieninis", 0.49),
  new Ledai ("Nykštukas", "vanilinis",1.5)
];

console.log(leduMasyvas)

console.groupCollapsed("Ledu pavadinimai")
leduMasyvas.forEach(ledas=>console.log(ledas.pavadinimas));
console.groupEnd();

console.groupCollapsed("Ledu skoniai")
leduMasyvas.forEach(ledas=>console.log(ledas.skonis));
console.groupEnd();

console.groupCollapsed("Ledu Kainos")
leduMasyvas.forEach(ledas=>console.log( ledas.kaina.toFixed(2)," Eur"));
console.groupEnd();

console.groupCollapsed("Ledu Kainos su 37% nuolaida")
leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-37).toFixed(2)," Eur"));
console.groupEnd();

console.groupCollapsed("Padidinom ledu kainos duomenys")
leduMasyvas.forEach(ledas=> {
  ledas.kaina += 0.1
  console.log(ledas.kaina)
});
console.groupEnd();
//var dob = new Date("06/24/2008");
//calculate month difference from current date in time.
//var month_diff = Date.now() - dob.getTime();
//convert the calculated difference in date format.
//var age_dt = new Date(month_diff);
//extract year from date.
//var year = age_dt.getUTCFullYear()

// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus.
  class Car{
    constructor(name,year){
      this.name = name,
      this.year = year
      this.helloCar = `Labas, čia mano mašina ${name} ir ji buvo pagaminta ${year} metais`
    }
  age(){
       return  new Date().getFullYear() - this.year
    }
  } 
   const carArray = [
    new Car ("Toyta Corrola", 2006),
    new Car ("BMW 330", 2004),
    new Car ("Audi A4",1997)
  ];
//   1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").

  carArray.forEach(car =>console.log(car.helloCar));
  //console.log(carArray[0].helloCar);

//   1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').
    carArray.forEach(car =>console.log('Mašinos amžius yra ' + car.age() + ' m.'));
    //console.log(carArray[0].age());

// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
  class Rectangle{
    constructor(width,height,){
      this.width = width,
      this.height = height
      this.randomColor = Math.floor(Math.random()*16777215).toString(16);
  }
    plotas(){
      return this.width * this.height
      }
  perimetras(){
      return (this.width + this.height)*2
    }  
  }

  const rectangleAray = [ 
    new Rectangle(3, 8),
    new Rectangle(4, 1),
    new Rectangle(10, 14)

  ];
//   2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
  console.log(rectangleAray)
//   2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
  rectangleAray.forEach(plotas =>console.log('Stačiakampio plotas = ' + plotas.plotas()));
  //console.log(rectangleArray[0].plotas());

//   2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.
  rectangleAray.forEach(perimetras =>console.log('Stačiakampio perimetras = ' + perimetras.perimetras()));
   //console.log(rectangleArray[0].perimetras());

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
class Point{
  constructor(x, y){
    this.x = x,
    this.y = y
  }
  coordinates(){
    return [this.x, this.y];
  }
  distance(){
    return Math.hypot(PointAray[0].x-PointAray[1].x, PointAray[0].y-PointAray[1].y);
  }
}
const PointAray = [ 
  new Point(3, 8),
  new Point(4, 1),
];
//   3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
  PointAray.forEach(coordinates =>console.log('Kordinates = ' + coordinates.coordinates()));
  //console.log(PointAray[0].coordinates());

//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).
  PointAray.forEach(distance =>console.log('Atstumas = ' + distance.distance()));
  console.log('Atstumas = '+ PointAray[0].distance(PointAray[1]));
// 4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.
class Rectangle_3D{
  constructor(width,height,depth){
    this.width = width,
    this.height = height
    this.depth = depth;
}
  volume(){
    return this.width * this.height * this.depth
    }
  surfaceArea(){
    return 2 * (this.depth * this.height + this.height * this.width + this.depth * this.width);
   }
  perimeter(){
      return 2 * (this.width + this.height) + 2 * (this.depth + this.height) + 2 * (this.width + this.depth);
   }
}
const rectangle_3dAray = [ 
  new Rectangle_3D(2, 2, 2),
  new Rectangle_3D(3, 4, 5),
  new Rectangle_3D(8, 3, 7)

];
//   4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
    rectangle_3dAray.forEach(volume =>console.log('3D stačiakampio tūris = ' + volume.volume()));
    //console.log(rectangle_3dArray[0].volume())

//   4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
  rectangle_3dAray.forEach(surfaceArea =>console.log('3D stačiakampio paviršiaus plotas = ' + surfaceArea.surfaceArea()));
  //console.log(rectangle_3dArray[0].surfaceArea())

//   4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą
  rectangle_3dAray.forEach(perimeter =>console.log('3D stačiakampio perimetras = ' + perimeter.perimeter()));
  //console.log(rectangle_3dArray[0].volume())
