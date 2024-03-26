console.log  ('hello');



//hilsen funksjonen
function greeting (){
     console.log ("dette er en greeting");

     const firstName = "Lucia";
     const greet = "Mornings";

     console.log( greet + " " + firstName)
     console.log(`${greet}, ${firstName}!`)
}


greeting();


//DOMM (Document Object Model manipulation)

//lagringsplass = lagringsinnhold
const isekaiButton = document.querySelector("#isekaiButton");
console.log(isekaiButton);
