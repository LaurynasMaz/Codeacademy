import MovieCard from "./MovieCard.js";

let listingsContainer = document.querySelector('#movieCards');

// Clear movieCard 
function clearOutputContainer(){
  // while(listingsContainer.firstChild){listingsContainer.removeChild(listingsContainer.firstChild)};
  listingsContainer.innerHTML = "";
}

// Async fuction to not refersh page after post
let post = async (data) =>{
  await fetch('http://localhost:3000/posts', {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
  })
  clearOutputContainer();
  List();
}
// Async fuction to not refersh page after remove
 export let remove = async (id) =>{
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE"
  })
  clearOutputContainer();
  List();
}

export let update = (id , data) =>{
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
  })
}

function List(){
  fetch(`http://localhost:3000/posts`)
  .then(response => response.json())
  .then(data => {
    if(data){
        data.forEach(element => {
          document.querySelector('#movieCards').append(new MovieCard(element).render());
        }
    )};
  });
}
List();


document.querySelector("#form form").addEventListener("submit", e=>{
  e.preventDefault();
  
  let data = {
    title: e.target.elements.title.value,
    director: e.target.elements.director.value,
    image: e.target.elements.image.value,
    release: e.target.elements.release.value,
    length: e.target.elements.movieLength.value
  }
  
  post(data);
})


