const displayTxt = document.querySelector('.displayTxt')

function add(x,y) {
    displayTxt.textContent = (x + y);
}

function subtract(x,y) {
    displayTxt.textContent = (x - y);
}

function multiply(x,y) {
    displayTxt.textContent = (x * y);
}

function divide(x,y){
    displayTxt.textContent = (x / y);
}

function factorial(num){
    fact = 1;
    for(let i = num; i <= 1; i--) {
      fact = fact * i;
    }
    displayTxt.textContent = fact;
}    

const equal = document.querySelector("#equal");
equal.addEventListener('click', () => {
    switch (operator) {
        case '+' :
            add(num1,num2);
            break;
        case '-' :
            subtract(num1,num2);
            break;
        case '*' :
            multiply(num1,num2);
            break;
        case '/' :
            divide(num1,num2);
            break;
        case '!':
            factorial(num);
            break;            
    }
})


let num1 = 0;
let num2 = 0;
let operator = '';


/*

const btn = document.querySelectorAll(".btn")
btn.forEach((x) => {
    x.addEventListener('click', () => {
        const displayTxt = document.querySelector('.displayTxt')
        displayTxt.textContent = '7'
    })
})
