// // Crud
// /*
//   C = create - POST metodas
//   R - read - GET metodas
//   U - uptade - PUT metodas
//   D = delete - DELETE metodas
// */

// /* Fetch Syntax
//   fetch(link, {
//     method : POST,
//     headers :
//   })




// */
// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method : "GET"
// }) // get yra defoult jo rasyti atskirai nereikia
//   .then(res => res.json())
//   .then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/photos/2500')
//   .then(res => res.json())
//   .then(data => console.log(data))      

//   fetch('https://jsonplaceholder.typicode.com/posts/46') // be /number gauni visus
//   .then(res => res.json())
//   .then(data => console.log(data))

//   fetch('https://jsonplaceholder.typicode.com/posts/46/comments') // uz /number gali kreiptis dar papildomai
//   .then(res => res.json())
//   .then(data => console.log(data))

//   fetch('https://jsonplaceholder.typicode.com/posts/46/comments?postId=1') // uz /number gali kreiptis dar papildomai ir ja tikslini
//   .then(res => res.json())
//   .then(data => console.log(data))

//   let getiname = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(res => res.json())
//       .then(data => console.log(data));
//   }
  
//   let postinam = () => {
//     let newData = {
//       body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
//       title: "Batukas",
//       userId: 5
//     }
  
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(newData)
//     })
//       .then(res => res.json())
//       .then(data => console.log(data));
//   }
  
//   let triname = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/54', {
//       method: "DELETE"
//     })
//     .then(res => res.json()) // DELETE nieko negrąžina
//     .then(data => console.log(data)) // DELETE nieko negrąžina
//   }
  
//   let updateSuPUT = () => { // PUT ištrina buvusią ir įklijuoja naują info tame elemente, į kurį kreipiesi
//     let newData = {
//       body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
//     }
//     fetch('https://jsonplaceholder.typicode.com/posts/1',{
//       method: "PUT",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(newData)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data));
//   }
  
//   let updateSuPATCH = () => { // PATCH pakeičia arba papildo tik tą informaciją, kuri buvo perduota, tame elemente, į kurį kreipiesi
//     let newData = {
//       bodyNr2: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
//     }
//     fetch('https://jsonplaceholder.typicode.com/posts/1',{
//       method: "PATCH",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(newData)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data));
//   }

//   Naudojant https://robust-safe-crafter.glitch.me/ API
// Sukurti puslapį, kuriame būtų atvaizduojami visi butai.
//   fetch(nuoroda).then()
// Taip pat, turi būti galimybė pridėti naują butą.
//   fetch(nuoroda, {method:"POST", headers:{}, body:naujasButasJSONpavdialu}).then()
//   Naujo buto info paimama iš pateiktos formos.
document.querySelector('#task1 input[type="submit"]').addEventListener('click', e => post(e))


let post = () => {
  let newData = {
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Bretagne_Finistere_BauernhausaufCrozon_19064.jpg",
    city: "Alytus",
    price: 125555,
    description: "Geras namas"
  }

  fetch('https://robust-safe-crafter.glitch.me', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

function getList(){
  fetch(`https://robust-safe-crafter.glitch.me`)
  .then(response => response.json())
  .then(data => {
      if(data){
          data.forEach(card => {
              document.querySelector('#task1 .cardlist').innerHTML +=
                  `
                  <div class="card">
                  <img src="${card.image}" alt="">
                  <p>City : ${card.city}</p>
                  <p>Price : ${card.price} Eur</p>
                  <p>Description : ${card.description}</p>
                  
                </div>
                  `;
          });
      } 
  })
}

getList()

