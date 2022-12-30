/*Youtube kanalai:
  Mosh - https://www.youtube.com/@programmingwithmosh (gera info)
  TraversyMedia - https://www.youtube.com/@TraversyMedia (gera info)
  Net Ninja - https://www.youtube.com/@NetNinja (geri tutorials)
  WebDev - https://www.youtube.com/@WebDevSimplified (ne tik JS)
  FreeCodeCamp - https://www.youtube.com/@freecodecamp (apie labai daug ką)
  DaveGray - https://www.youtube.com/@DaveGrayTeachesCode ()
  DevDreamer - https://www.youtube.com/@DevDreamer ( trumpi video - nesunku dėmesį išlaikyti)
  CodingTrain - https://www.youtube.com/@TheCodingTrain (sekamos naujienos ir labai faini projektai, minusas - not beginners friendly)
  FireShip - https://www.youtube.com/@Fireship (fun stuff :) )
  CodeBullet - https://www.youtube.com/@CodeBullet (purely for fun)
  KevinPowell - https://www.youtube.com/@KevinPowell (HTML/CSS)
*/


//        OOP Principai
/*
  Inkapsuliacija  - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viešus metodus.
  Abstrakcija     - objekto nepriklausomumas nuo išorinių sudedamųjų dalių.
  Paveldėjimas    - viena klasė gali būti kitos klasės konkretizacija
  Polimorfizmas   - galimybė dirbti su objektu nežinant jo tikslaus tipo ir struktūros
  video: https://youtu.be/pTB0EiLXUC8
*/

class Gyvunas{
  #pavadinimas;
  #kojuKiekis;
  constructor(pavadinimas, kojuKiekis){
    this.#pavadinimas = pavadinimas;
    this.#kojuKiekis = kojuKiekis;
  }

  getPavadinimas(){
    return this.#pavadinimas;
  }
  setPavadinimas(naujasPavadinimas){
    this.#pavadinimas = naujasPavadinimas;
  }

  getKojuKiekis(){
    return this.#kojuKiekis;
  }
  setKojuKiekis(naujasKojuKiekis){
    this.#kojuKiekis = naujasKojuKiekis;
  }

  valgo(){
    return 'Valgo kažką...';
  }
}

class Kate extends Gyvunas{
  constructor(kojuKiekis){
    super('Katė', kojuKiekis);
  }

  #balsoVariantai = ['Miauuu', 'Psshhhttt', 'Murk', 'Rawr'];
  #balsoVariantas(){
    return this.#balsoVariantai[Math.floor(Math.random()*this.#balsoVariantai.length)];
  }

  balsas(){
    return this.#balsoVariantas();
  }
  valgo(){
    return `Valgo kačių maistą, peles`;
  }
}

class Voras extends Gyvunas{
  constructor(kojuKiekis){
    super('Voras', kojuKiekis);
  }

  gasdina(){
    return "Buuuu MUHAHAHA";
  }
  valgo(){
    return `Valgo muses`;
  }
}

let gyvunas = [
  new Gyvunas('Šuo', 4),
  new Kate(4),
  new Voras(8)
];

// 1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
//   1.1) JavaScripte pasirašykite klasę su konstruktoriumi, kuris turės vardą ir pavardę. Metodą - atsirasti lentelėje.
//   1.2) Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization).
//   1.3) Sukurkite objektą naudojant Klasę.
//   1.4) Galiausiai iškvieskite metodą, kad pridėtų į lentelę.
//   Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje esančioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).


class NameSurname{
  #name;
  #surname;
  #fullname
  #outputElement;
  constructor(fullname,outputElement){
    this.#fullname=fullname;
    this.#outputElement=outputElement;
  }
  getToOutput(){

    let fullnameSplit = this.#fullname.split(" ");
    this.#name=fullnameSplit[0][0].toUpperCase()+fullnameSplit[0].toLowerCase().slice(1);
    this.#surname=fullnameSplit[1][0].toUpperCase()+fullnameSplit[1].toLowerCase().slice(1);
    
    // Outputing data to given output element
    this.#outputElement.innerHTML+=
    `
    <tr>
      <td>${this.#name}</td>
      <td>${this.#surname}</td>
    </tr>
    `
  }
}
document.querySelector('#forma form').addEventListener('submit',function(e){
  e.preventDefault();
  new NameSurname(`${e.target.elements[0].value}`
    ,document.querySelector('#forma table tbody')).getToOutput();
});

// 2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
//   2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
//   3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)
class Car{
  #outputElement
  constructor(outputElement){
    this.#outputElement=outputElement;
  }
  getToOutput(props){
    this.#outputElement.innerHTML+=
    `
        <div class=carCard>
        <div>
          <img src="${props.photo}" alt=""> 
        </div>
        <div>
          <p>${props.brand}</p>
          <p>${props.model}</p>
          <p>${props.mileage}</p>
          <p>${props.price}</p>
        </div>`
  }
}
document.querySelector('#car form').addEventListener('submit',function(e){
  e.preventDefault();
  let carClass = new Car(document.querySelector('#car .outPut'));
  carClass.getToOutput({
    brand: document.querySelector("#car .carBrand").value,
    model: document.querySelector("#car .carModel").value,
    mileage: document.querySelector("#car .mileage").value,
    price: document.querySelector("#car .price").value,
    photo: document.querySelector("#car .photo").value
  });

});


// Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
class Heading{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.htmlElement = document.createElement(`h${this.props.dydis}`);
    this.textElement = document.createTextNode(this.props.tekstas);   
    this.htmlElement.append(this.textElement);

    if(this.props.atributai){
      // jeigu atributai yra objektas
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });

      // jeigu atributai yra masyvai masyve
      // this.props.atributai.forEach(atributas => {
      //   this.htmlElement.setAttribute(atributas[0], atributas[1]);
      // });
    }

    return this.htmlElement;
  }
}

let antraste1 = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
  // atributai: [ 
  //   ['class', 'klasesVardas darVienaKlase'],
  //   ['id', 'kazkoksId'],
  //   ['style', 'color:red']
  // ]
});
document.querySelector("body").append(antraste1);
document.querySelector("body").append(new Heading({
  dydis:'5',
  tekstas:'Labas rytas',
  // atributai: [
  //   ['style', 'font-size: 50px']
  // ]
  atributai: {
    style: 'font-size:50px'
  }
}));
document.querySelector("body").append(new Heading({
  dydis:'6',
  tekstas:'mažiukas'
}));


// Susikurti paragrafus
class Paragrafas{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.textElement = document.createElement('p')
    this.textElement.innerText=this.props.tekstas

    if(this.props.atributai){
      Object.keys(this.props.atributai).forEach(raktas => {
        this.textElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }

    return this.textElement;
  }
}

let paragrafas1 = new Paragrafas({
  tekstas: 'tekstas',
  atributai: {
    class: 'vardas',
    id: 'id',
    style: 'color:black'
  }
});
document.querySelector("body").append(paragrafas1);
document.querySelector("body").append(new Paragrafas({
  tekstas:'tekstas 2',
  atributai: {
    style: 'font-size:20px'
  }
}));