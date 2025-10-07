// select dom elements

const display = document.querySelector("#display");
const buttons = document.querySelector(".btn");

console.log("Display:",display);
console.log("Buttons:",buttons.length);
console.log('✅ DOM Elements Selected:', { display, buttons: buttons.length });


//initialize state

let current = "";
let previousInput = "";

let operator = "";
let shouldResetDisplay = "false";


console.log("InitialState", {currentState, previousInput, operator});

//attach event listeners

function setupEventListeners(){
    buttons.forEach((button)=>{
        button.addEventListener("click", handleButtonClick);

    });
    console.log("Event listeners attached")
}

function handleButtonClick(event){
    const value = event.target.dataset.value;
    console.log("Button clicked", value);
    handleInput(value);
}
function init (){
    console.log("Initializing Calculator...")

    setupEventListeners();

    updateUI("0");

    console.log("Calc Ready");
    console.log("Initial State");
    logState();

}


init();

