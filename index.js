document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("display");
    let currentInput = "";

    function appendToInput(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    }

    function calculate() {
        // TODO: calculating funtcion (eval)
    }

    function clearDisplay() {
        // TODO: func to clear display (just overwrite variable)

    }

    document.getElementById("one").addEventListener("click", () => appendToInput('1'));
    document.getElementById("two").addEventListener("click", () => appendToInput('2'));
    document.getElementById("three").addEventListener("click", () => appendToInput('3'));
    document.getElementById("four").addEventListener("click", () => appendToInput('4'));
    document.getElementById("five").addEventListener("click", () => appendToInput('5'));
    document.getElementById("six").addEventListener("click", () => appendToInput('6'));
    document.getElementById("seven").addEventListener("click", () => appendToInput('7'));
    document.getElementById("eight").addEventListener("click", () => appendToInput('8'));
    document.getElementById("nine").addEventListener("click", () => appendToInput('9'));
    document.getElementById("zero").addEventListener("click", () => appendToInput('0'));
    document.getElementById("plus").addEventListener("click", () => appendToInput('+'));
    document.getElementById("minus").addEventListener("click", () => appendToInput('-'));
    document.getElementById("multi").addEventListener("click", () => appendToInput('*'));
    document.getElementById("divi").addEventListener("click", () => appendToInput('/'));
    document.getElementById("equal").addEventListener("click", calculate);
    document.getElementById("clear").addEventListener("click", clearDisplay);
});