// task 5
let calculator = document.querySelector("#calc");

console.dir(calculator);
calculator.children[0].addEventListener('submit', function(e){
  e.preventDefault();
  console.dir(e);
  let skaicius1 = parseInt(document.querySelector('#skaicius1').value);
  let skaicius2 = parseInt(document.querySelector('#skaicius2').value);
  let operator = document.querySelector('#veiksmas').value;
  let output = document.querySelector("#output");
  console.log(skaicius1, skaicius2, operator)
  if(skaicius1 && skaicius2){
    if(operator === "sum"){output.innerHTML=skaicius1+skaicius2};
    if(operator === "sub"){output.innerHTML=skaicius1-skaicius2};
    if(operator === "multi"){output.innerHTML=skaicius1*skaicius2};
    if(operator === "div"){output.innerHTML=skaicius1/skaicius2};
    if(operator === "pow"){output.innerHTML=skaicius1**skaicius2};
    if(operator === "root"){output.innerHTML=skaicius1**(1/skaicius2)};
    if(operator === "%"){output.innerHTML=skaicius1%skaicius2};
  }
  
  
});