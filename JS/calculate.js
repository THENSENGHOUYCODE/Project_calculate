 // Calculate program
//  const display = document.getElementById("display");

//  function appendToDisplay(input){
//     display.value += input;

//  }
//  function clearDisplay(){
//    display.value = "";
//  }
//  function calculate(){
//     try {
//         display.value = eval(display.value);
    
//     }
//     catch(error){
//         display.value = "Error";
//     }
//  }
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Validate the expression before evaluating
        const expression = display.value;
        if (/^[0-9+\-*/.]+$/.test(expression)) {
            display.value = eval(expression);
        } else {
            throw new Error("Invalid input");
        }
    } catch (error) {
        display.value = "Error";
    }
}