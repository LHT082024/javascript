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

isekaiButton.addEventListener("click", greeting);



//world switchbutton.
// HENT
const WorldSwitchButton = document.querySelector("#WorldSwitchButton");

// MODIFISER
function worldSwitch(){
    //HENT
    const body = document.querySelector("body");

    body.classList.toggle("cool");
    
}

// SEND
WorldSwitchButton.addEventListener("click", worldSwitch);


























/*
isekaiButton.addEventListener("click", () => {
    console.log("arrow function");


    const firstName = "*splat*";
    const greet = "Truck-kunnn";

    console.log(`${greet}, ${firstName}!`)
});
*/
