// JSON

/* 
  JSON - Java Script Object Notation
    JSON raktiniai žodžiai yra kabutėse
    JSON ignoruoja/nesaugo metodų(funckijų)

*/

const object = {
  raktas : 'reiksme',
  tiesa : false,
  skaicius : 545,
  masyvas : ['labas','ate'],
  objektas : {h1:'ha', du:2},
  funcija(zodis){
    return `pasakei ${zodis}`
  }
}
const objectAsJSON = JSON.stringify(object);

// Fetch

/* syntax
  fetch('url');
  then(res => res.text()  || response.json()
*/

/*
  Fetch skirtas pasiimti duomenis iš norodyto failo ar url.
*/

// data.txt
fetch("./data/data.txt")
.then(response => response.text())
.then(data =>  {
  //console.log(data)
  let dataAsArray = data.split('\n');
 // console.log(dataAsArray);
  //  dataAsArray = dataAsArray.map(item => item.split(' '));
  dataAsArray.forEach(line => {
    document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>`;
  });

})

// data.json

fetch("./data/data.json")
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    Object.keys(data).forEach(key => {
      document.querySelector('#json').innerHTML += `<p>${data[key]}</p>`;
    });
  });

fetch("./data/movies.json")
  .then(response => response.json())
  .then(data => {
    data.movies.forEach(movie =>
      document.querySelector('#filmai').innerHTML += 
      `<div class = "movie">
      <h1>${movie.name}</h1>
      <img src="${movie.poster}"
      <p>${movie.lenght}</p>
      <p>Actors: ${movie.actors.join(', ')}</p>
      </div>
      `
)});

// random user



  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(data => {
      userData = data.results[0]
      document.querySelector('#zmones').innerHTML += 
      `
        <div class="card">
            <div>
              <h1>${userData.name.first} ${userData.name.last}</h1>
              <img src="${userData.picture.large}"/>
            </div>
            <div class="details">
            <p>Age:${userData.dob.age}</p>
            <p>Email: ${userData.email}</p>
            <p>Location: ${userData.location.street.name}-${userData.location.street.number} ${userData.location.city} <p>
        </div>
        </div>`;
    });