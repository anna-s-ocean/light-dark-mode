//logs are great for debugging
/*console.log("hello world");
console.log("adios");

//variables
const name = "Anna Ocean";
console.log(name);

let age = 117;
console.log(age); 
age = age + 2;
console.log(age);

//loops
let i = 1; 
while (i <=10 ){
  console.log(i);
  i++  //i = i + 1;
}


    

//creating a function to lauch a rocket
const rocket = () => {
  let m = 10; 
  while (m >=0 ){
    console.log(m);
    m = m - 1;
   }
  console.log("Blast off!");
}

//calling the function 
rocket();

const nRocket = (n) => {
  let i = n; 
  while (i >=0){
    console.log(i);
  }
  console.log("Blast Off!");
}

//calling the function 
nRocket(35);
*/

//select the dark mode button
const darkButton = document.querySelector("#dark");
const main = document.querySelector("#body");
const h1 = document.querySelector("#h1");

//define lightsOut function that activates dark mode 
const lightsOut = () => {

  let element = document.body;
  element.classList.toggle("dark");



  //change background to black 
  main.style.background = "#000000";
 
  //change h1 text chartreuse
  main.style.color = "#DFFF00";
  h1.innerText = "This is Dark Mode  🔦"
  //change text of button
  darkButton.innerText = "Light Mode";
  
}
darkButton.addEventListener("click", lightsOut);
//darkButton.addEventListener()