console.log  ('hello');



//hilsen funksjonen
function greeting (){
     console.log ("car driving");

     const firstName = "*splat*";
     const greet = "Truck-kunnn";

     console.log(`${greet}, ${firstName}!`)
}


//greeting();


//DOMM (Document Object Model manipulation)

//lagringsplass = lagringsinnhold
const isekaiButton = document.querySelector("#isekaiButton");
console.log(isekaiButton);


isekaiButton.addEventListener("click", greeting)