//calculator
const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "ERROR"
    }
}

function backspace() {
    display.value = display.value.slice(0,-1)
}

function appendToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
    display.scrollLeft = display.scrollWidth; // İmleci en sağa kaydır
}
