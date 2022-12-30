// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" atributus.
console.groupCollapsed('tasks');
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
// 1.1) Sukurkite papildomą atributą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
carArray.forEach(car =>console.log(car.helloCar));
// 1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').
carArray.forEach(car =>console.log('Mašinos amžius yra ' + car.age() + ' m.'));

// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" atributus.
class Rectangle{
  constructor(width,height,){
    this.width = width,
    this.height = height
    this.randomColor = Math.floor(Math.random()*16777215).toString(16);
}
  area(){
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
// 2.1) Sukurkite papildomą atributą "color" ir priskirkite jam randomly parinktą spalvą.
console.log(rectangleAray)
// 2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
rectangleAray.forEach(plotas =>console.log('Stačiakampio plotas = ' + plotas.area()));
// 2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.
rectangleAray.forEach(perimetras =>console.log('Stačiakampio perimetras = ' + perimetras.perimetras()));
// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" atributus.
class Point{
  constructor(x, y){
    this.x = x,
    this.y = y
    this.coordinates = [x, y]
  }
  distance(){
    return Math.hypot(pointAray[0].x-pointAray[1].x, pointAray[0].y-pointAray[1].y);
  }
}
const pointAray = [ 
  new Point(3, 8),
  new Point(4, 1),
];
// 3.1) Sukurkite papildomą atributą "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
pointAray.forEach(point => console.log('Coordinates = ' + point.coordinates ));
// 3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

console.log('Distance = ' + pointAray[0].distance(pointAray[1]));
// 4) Sukurkite klasę vardu "3D_Rectangle" ir duokite jai "width", "height" ir "depth" atributus.
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
function front_back3(str)
 {
  if (str.length>=3)
   {
   str_len = 3;
 
  back = str.substring(str.length-3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));
console.groupEnd();