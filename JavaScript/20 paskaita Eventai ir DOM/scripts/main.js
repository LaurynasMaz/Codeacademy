// DOM
// let renkames1 = document.querySelectorAll('p');
// console.dir(renkames1);
// console.log(renkames1);

// dir ir log 
// dir - grąžina interaktyvų elemento savybių sąrasa
// log - grąžina elementą

// Eventai

// for(let i = 0; i < renkames1.length; i++){
//   renkames1[i].addEventListener('click',function(event){
//     console.dir(event)
//     console.log('Paspaudei ant ' + i + ' paragrafo')});
// }
//  let renkames2 = document.querySelector('html');
//  renkames2.addEventListener('keydown', function(event){
//   console.dir(event);
//   console.log('paspaudei ' + event.code + ' mygtuką.')
//  });

//  let visiH1 = document.querySelectorAll('h1');
//  for(let i= 0; i < visiH1.length; i++){
//   console.dir(visiH1[i]);
//   visiH1[i].textContent += ' :) ';
//   visiH1[i].style.color += 'red';
//  }
 // task 2 
 let task1 = document.querySelector('#task > h2');
console.dir(task1);
console.log(task1);
let task2 = document.querySelector('#task > h3');
console.dir(task2);
console.log(task2);
let task3 = document.querySelector('#task > h4');
console.dir(task3);
console.log(task3);
let task4 = document.querySelectorAll('h1');
console.dir(task4);
console.log(task4);
let task5 = document.querySelector('#task > h5');
console.dir(task5);
console.log(task5);
let task6 = document.querySelector('#task > h6');
console.dir(task6);
console.log(task6);
let task7 = document.querySelector('#task > p');
console.dir(task7);
console.log(task7);
let task8 = document.querySelector('title');
console.dir(task8);
console.log(task8);
let task9 = document.querySelector('#task > img');
console.dir(task9);
console.log(task9);
let task10 = document.querySelector('#task > span');
console.dir(task10);
console.log(task10);
// task 3

//  task1.addEventListener('mouseover', function(event){
//   console.dir(event);
//   console.log(event.bubbles)
//  });
//  task2.addEventListener('mouseout', function(event){
//   console.dir(event);
//   console.log(event.movementY)
//  });

//  task3.addEventListener('mousewheel', function(event){
//   console.dir(event);
//   console.log(event.isTrusted)
//  });
//  task5.addEventListener('mouseup', function(event){
//   console.dir(event);
//   console.log(event.currentTarget)
//  })

//  task6.addEventListener('mouseout', function(event){
//   console.dir(event);
//   console.log(event.view)
//  });
//  task7.addEventListener('click', function(event){
//   console.dir(event);
//   console.log(event.button)
//  });
// task 4

 for(let i= 0; i < task4.length; i++){
  console.dir(task4[i]);
  task4[i].style.color += 'blue';
  task4[i].style.background += 'red';
  task4[i].style.textAlign += 'center';
}
let paveiksliukasTaskuose = document.querySelector('#tasks > img');
paveiksliukasTaskuose.addEventListener('mouseenter', function(){
  paveiksliukasTaskuose.style.opacity = 0.5;
});
paveiksliukasTaskuose.addEventListener('mouseleave', function(){
  paveiksliukasTaskuose.style.opacity = 1;
});

//        DOM kūrimas iš JS'o
let DOM_is_JS = document.querySelector('#DOM_is_JS');

DOM_is_JS.innerHTML += "<p>Labas</p>";

let paragrafas = document.createElement("p");
console.dir(paragrafas);
let tekstas = document.createTextNode("Text node");
paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas);

//        DOM stilizavimas iŠ JS'o
paragrafas.style.color = '#f00';
// paragrafas.className = 'tekstas';
// paragrafas.setAttribute('class', 'tekstas');
paragrafas.classList.add('tekstas');

