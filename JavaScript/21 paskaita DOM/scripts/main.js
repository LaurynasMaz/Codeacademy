// simple DOM manipulation

// bandymas1

let bandymas1 = document.querySelector('#bandymas1');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// let.text = document.createTextNode('Pavadinimas')
// h1.append(text);
// text = document.createTextNode('Paragrafas su daug teksto')
// p.appent(text);

// div.append(h1);
// div.append(p);
// bandymas1.append(div);

let data = 'Paragrafas su daug teksto..'

bandymas1.innerHTML += 

/* <button class="slepti">Slepti</button>
<button class="rodyti" nonDisplay >Rodyti</button> */
`<button class="sleptiRodyti">Slėpti</button>
<div>
<h1>Pavadinimas</h1>
<p>${data}</p>
</div>
`;


// bandymas 2 

let bandymas2 = document.querySelector('#bandymas2');

let antraste = 'Super duper JS';
let paragrafas = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio fugiat consequuntur, voluptatum cum dolore quo porro repellendus velit tempora!';

bandymas2.innerHTML+=`<button class="sleptiRodyti">Slėpti</button>`;
for(let i = 0; i < 5; i++){
   bandymas2.innerHTML += `
  <div>
  <h1>${antraste}</h1>
  <p>${paragrafas}</p>
  </div>
  `;
}

// bandymas 3 

let bandymas3 = document.querySelector('#bandymas3');

let antrastes = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7',]
let paragrafai = [
  ' Lorem ipsum dolor sit amet 1',
  ' Lorem ipsum dolor sit amet 2',
  ' Lorem ipsum dolor sit amet 3',
  ' Lorem ipsum dolor sit amet 4',
  ' Lorem ipsum dolor sit amet 5',
  ' Lorem ipsum dolor sit amet 6',
  ' Lorem ipsum dolor sit amet 7'
]
bandymas3.innerHTML+=`<button class="sleptiRodyti">Slėpti</button>`;
for(let i = 0; i < antrastes.length; i++){
  bandymas3.innerHTML += `
  <div>
  <h1>${antrastes[i]}</h1>
  <p>${paragrafai[i]}</p>
  </div>
`;
} 

// bandymas 4

let bandymas4 = document.querySelector('#bandymas4');

 let data4 =[
  {
    antraste: "A1",
    paragrafas: "Tekstas1"
  },
  {
    antraste: "A2",
    paragrafas: "Tekstas2"
  },
  {
    antraste: "A3",
    paragrafas: "Tekstas3"
  },
  {
    antraste: "A4",
    paragrafas: "Tekstas4"
  },
  {
    antraste: "A5",
    paragrafas: "Tekstas5"
  }
 ];
 bandymas4.innerHTML+=`<button class="sleptiRodyti">Slėpti</button>`;
 for(let i = 0; i < data4.length; i++){
  bandymas4.innerHTML +=`
  <div>
  <h1>${data4[i].antraste}</h1>
  <p>${data4[i].paragrafas}</p>
  </div>
  `;
} 
// task 1 
let sleptiRodyti = document.querySelectorAll('.sleptiRodyti');



for(let i = 0; i < sleptiRodyti.length; i++){
  sleptiRodyti[i].addEventListener('click', function () {
    let itemsToHideOrShow = sleptiRodyti[i].parentElement.querySelectorAll('section > div');
    if(sleptiRodyti[i].innerText === "Slėpti"){
      sleptiRodyti[i].innerText = "Rodyti";
      for(let j = 0; j < itemsToHideOrShow.length; j++){
        itemsToHideOrShow[j].classList.toggle('nonDisplay');
      }
      // bandymas1.children[1].classList.toggle('nonDisplay');
    } else if(sleptiRodyti[i].innerText === "Rodyti"){
      sleptiRodyti[i].innerText = "Slėpti";
      for(let j = 0; j < itemsToHideOrShow.length; j++){
        itemsToHideOrShow[j].classList.toggle('nonDisplay');
      }
      // bandymas1.children[1].classList.toggle('nonDisplay');
    }
    // for(let j = 0; j < itemsToHideOrShow; j++){
    //   itemsToHideOrShow[j].classList.toggle('nonDisplay');
    // }
    // bandymas1.children[1].classList.toggle('nonDisplay');
  });
}


// let sleptiMygtukas = document.querySelector(".Slepti")
// let rodytiMygtukas = document.querySelector(".rodyti")
// sleptiMygtukas.addEventListener('click', function(){
//   sleptiMygtukas.classList.add('nonDisplay');
//   bandymas1.children[2].classList.add('nonDisplay');
//   rodytiMygtukas.classList.remove('nonDisplay');
// });
// rodytiMygtukas.addEventListener('click', function(){
//   sleptiMygtukas.classList.remove('nonDisplay');
//   bandymas1.children[2].classList.remove('nonDisplay');
//   rodytiMygtukas.classList.add('nonDisplay');
// });
// 1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
// 	1.1) JS'u sekcijoje sukurkite antraštę.
// 	1.2) JS'u sekciją papildykite paragrafu su tekstu.
// 	1.3) JS'u sekciją papildykite paveikslėliu.
// 	1.4) JS'u sekciją stilizuokite priskirdami klases.
let task1 = document.querySelector('#task1');
task1.innerHTML += 
`
<div class="task1">
<h1>${data1[0].title}</h1>
<p class="task1p">${data1[0].paragraph}</p>
<img src='${data1[0].image}' class="task1img"></img>
</div>`;
/* 2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	2.2) JS'u sekciją stilizuokite priskirdami klases. */

let task2 = document.querySelector("#task2");

task2.innerHTML += `
  <div class="task2">
  <h1>${data1[1].title}</h1>
    <div class="task2images">
      ${
        data1[1].images.map(function(images){
          return `<img src="${images}" class="task2img">`;
        })
      }
    </div>
  </div>
`;


// 3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
//   3.0) Sutvarkykite data[2] viduje esančius duomenis.
// 	3.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
// 	3.2) JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
// 	3.3) JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
// 	3.4) JS'u sekciją stilizuokite priskirdami klases.
let task3 = document.querySelector("#task3");

task3.innerHTML += `
  <div class="task3">
  <h1>${data1[2].title}</h1>
    <div class="task3images">
      ${
        data1[2].TitleAndImgAndPharagrap.map(function(TitleAndImgAndPharagrap){
          return `<div>
          <h2>${TitleAndImgAndPharagrap.imagesTitle}</h2>`+
          `<img src="${TitleAndImgAndPharagrap.images}" class="task3img">`+
          `<p>${TitleAndImgAndPharagrap.paragraphs}</p>
          </div>`;
        })
      }
    </div>
  </div>
`;

/// fizz buzz
// x%5 x%3 - fizzbuzzx%3 - fizz, x%5  - buzz
function fizzBuzz(nuo, iki){
  for(let i= nuo; i<= iki; i++){
    if(i % 5 === 0 && i % 3 ===0){
      console.log ("FizzBuzz");
    }else if (i % 3 === 0) {
      console.log ("Fizz");
    } else if (i % 5 === 0) {
      console.log ("Buzz")
    }
    else {console.log (i);
    }
  }
}


// Prime
function primeNumbers(upTo){
  let primeNumbers = [];
  if(upTo > 10){
    // find prime numbers up to 10
    for(let i = 2; i < 10; i++){
      let isPrime = true;
      for(let j = 2; j < i-1; j++){
        if(i % j === 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        primeNumbers.push(i);
      }
    }
    for(let i = 10; i < upTo; i++){
      let isPrime = true;
      for(let j = 0; j < primeNumbers.length; j++){
        // if(primeNumbers[j] * 2 < i){
          // isPrime = false;
          //   break;
          if(i % primeNumbers[j] === 0){
            isPrime = false;
            break;
          }
        // }
      }
      if(isPrime){
        primeNumbers.push(i);
      }
    }
  } else {
    for(let i = 2; i <= upTo; i++){
      let isPrime = true;
      for(let j = 2; j < i-1; j++){
        if(i % j === 0){
          isPrime = false;
        }
      }
      if(isPrime){
        primeNumbers.push(i);
      }
    }
  }
  console.log(primeNumbers);
}