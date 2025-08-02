const display = document.getElementById("display");

//clear display
function clearDisplay(){
    display.value = "";
}

// aapend value

function appendValue(value){
    display.value += value;
}

// for  calculate 
function  calculate(){
    try {
        const result = eval(display).value
        display.value = result
        
    } catch (error) {
        alert("Enter valid expression")
    }
}