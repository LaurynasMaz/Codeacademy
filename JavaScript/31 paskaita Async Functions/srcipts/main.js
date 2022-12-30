//                  Async

/*  
  1) async ir await
  2) try catch finally
  3) Promise (resolve, reject)
  4) then catch finally
*/

//  Async Function
/*
  Rašant kodą sinchroniškai kartais prireikia luktelti atsakymų iš prieštai buvusių funkcijų.
  Tam, kad sulauktume atsakymo, reikia uždelsti kodą. Tai galima padaryti su setTimeout();
  Persistengiant su setTimeout'ais ar kitais callback'ais. Sukuriame vadinamąjį "callback Hell". Ko pasekoje nukenčia kodo skaitomumas.
  Tam, kad galėtume rašyti kodą asinchroniškai ir išvengtume "callback Hell" - prieš funkciją/as naudojame prierašą "async", šitaip paversdami funkcijas asinchroniškomis.
  Norėdami nurodyti, kad reikia uždelsti / kažko palaukti - naudojame prierašą await. Await'as gali būti naudojamas tiktais asinchroninių funkcijų viduje.
*/
/*syntax
  async function name(){
    await someOtherF();
    await someMethod();
  }
  let name = async () => {
    await someOtherF();
    await someMethod();
  }
*/

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1(number) {
  try {
    const x = await resolveAfter2Seconds(number*5);
    console.log(x);
  } catch {
    console.log('Neteisinga funkcija');
  } finally {
    console.log('Baigėsi kodas');
  }

  console.log('hallo');
}

//  try... catch... finally...
/*syntax
  try{code}catch{errorInCode}finally{doWhatever}
*/
/*
  try, catch ir finally naudojami kai norima kontroliuoti kodo error handle'inimą
  try bando vykdyti kodą;
  Jeigu try bloke įvyksta error, tuomet vykdomas catch blokas. Galiausiai vykdomas finally blokas.
  Net jeigu try viduje gausime error, kurį pagaus catch'as. Kodas einantis toliau visviena bus vykdomas.
*/

//  Promise
/*syntax
  Promise((resolve, reject)) => {
    if(good){
      resolve('answer');
    } else { // bad
      reject('error');
    }
  }
*/

const delay = (time) => {
  return new Promise((resolve, reject) => {
    if(typeof(time) !== 'number'){
      reject(new Error('function delay parameter has to be a number'));
      // reject( () => 'function delay parameter has to be a number');
    } else {
      setTimeout(() => resolve('grazinta data'), time);
    }
  });
}

// let promisas = async () => {
//   console.log("-----");
//   await delay(2000);
//   console.log('some data');
// }

// then (then...) catch finally
let promisas = () => {
  console.log("-----");
  delay(2000)
  // console.log(x);
  .then((data0) => {
    console.log(data0);
    return data0+'more data';
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('funkcija baigesi');
  })
}
/*
  Rašant asinchroninį kodą, naudojami Promises.
  Kviečiant Promise'ą, už jo rašomi(chain'inami): .then() .catch() .finally(), kurie vykdomi eilės tvarka sulaukdami duomenų vieni iš kitų (kalbant apie then'us).
*/
let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};
// paparstas
// 1st Function


// let order = (fruit_name, call_production) =>{

//   setTimeout(function(){

//     console.log(`${stocks.Fruits[fruit_name]} was selected`)

// // Order placed. Call production to start
//    call_production();
//   },2000)
// };

// // 2nd Function

// let production = () =>{

//   setTimeout(()=>{
//     console.log("production has started")
//     setTimeout(()=>{
//       console.log("The fruit has been chopped")
//       setTimeout(()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//         setTimeout(()=>{
//           console.log("start the machine")
//           setTimeout(()=>{
//             console.log(`Ice cream placed on ${stocks.holder[1]}`)
//             setTimeout(()=>{
//               console.log(`${stocks.toppings[0]} as toppings`)
//               setTimeout(()=>{
//                 console.log("serve Ice cream")
//               },2000)
//             },3000)
//           },2000)
//         },1000)
//       },1000)
//     },2000)
//   },0000)

// };

// // Trigger 👇
// order(0, production);

// promises
/*
let is_shop_open = true;

let order = (time, work) => {

  return new Promise( (resolve, reject) => {

    if(is_shop_open){

      setTimeout(()=>{

       // work is 👇 getting done here
        resolve(work())

// Setting 👇 time here for 1 work
       }, time)

    }

    else{
      reject( console.log("Our shop is closed") )
    }

  })
}
// step 1
order(2000,()=>console.log(`${stocks.Fruits[1]} was selected`))

// step 2
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[2]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[1]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})
.catch(()=>{
  console.log("Customer left")
})
.finally(()=>{
  console.log("end of day")
})
*/

// async/await

let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}
async function kitchen(){
  try{
await time(2000)
console.log(`${stocks.Fruits[0]} was selected`)

await time(0000)
console.log("production has started")

await time(2000)
console.log("fruit has been chopped")

await time(1000)
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

await time(1000)
console.log("start the machine")

await time(2000)
console.log(`ice cream placed on ${stocks.holder[1]}`)

await time(3000)
console.log(`${stocks.toppings[0]} as toppings`)

await time(2000)
console.log("Serve Ice Cream")
  }

  catch(error){
 console.log("customer left")
  }
}

// Trigger
kitchen();