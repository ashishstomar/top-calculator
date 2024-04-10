let previousOperand = document.querySelector('.previousOperand')
let currentOperand = document.querySelector('.currentOperand')
let allClearBtn = document.querySelector("#allClear");
let deleteBtn = document.querySelector('#delete');
let numButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll(".operator");
let decimalBtn = document.querySelector('#decimal');
let posNegBtn = document.querySelector('#posNeg');
let equalBtn = document.querySelector('#equal');

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y){
    return x / y;
}

function factorial(num){
    if (num === 0) return 1;
    fact = 1;
    for(let i = num; i >= 1; i--) {
      fact = fact * i;
    }
    return fact;
}    

function operate(num1, operator, num2) {

    switch (operator) {
        case '+' :
           return add(num1,num2);
        case '-' :
           return subtract(num1,num2);
        case 'x' :
           return multiply(num1,num2);
        case '/' :
            return divide(num1,num2);
        case '!':
            return factorial(num1);           
    }
}

function allClear(){
    allClearBtn.addEventListener('click', () => {
    inputNum1 = '';
    previousOperand.textContent = '';
    currentOperand.textContent = '0';
    })
}


function deleteNum() {
    deleteBtn.addEventListener('click', () => {
        inputNum1 = inputNum1.slice(0, -1); 
        currentOperand.textContent = inputNum1;
    if(inputNum1.length === 0 ) {
        currentOperand.textContent = '0'
    }
    })
}

previousOperand.textContent = '';
currentOperand.textContent = '0';


let inputNum1 = '';
let inputNum2 = '';
let operatorButtonValue = '';
let result = '';

const numpad = function() {
    if(currentOperand.textContent != '0') {
        currentOperand.textContent = ''
    }
    numButtons.forEach((numButton) => {
        numButton.addEventListener('click', () => {
            if(currentOperand.textContent === '0') {
                currentOperand.textContent = '';
            }
            inputNum1 += numButton.textContent;
            currentOperand.textContent += numButton.textContent ;
            console.log('inputNum1 ' + inputNum1);
        })
    })
}


//const newArray = numArray.reduce((firstOne, nextOne) => firstOne + nextOne, 0)

//upon clicking any operator perform operation
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if(inputNum2 ==='') {
            inputNum2 = inputNum1;
            inputNum1 = '';
           operatorButtonValue = operatorButton.textContent;
           previousOperand.textContent = inputNum2 + operatorButtonValue;
           currentOperand.textContent = '0';
        }
        else {
            result = operate(Number(inputNum2), operatorButtonValue, Number(inputNum1));
            operatorButtonValue = operatorButton.textContent;
            previousOperand.textContent = result + operatorButtonValue;
            currentOperand.textContent = '0';
            inputNum1 = '';
            inputNum2 = result;
        }
    })
})

equalBtn.addEventListener('click', () => {
    try {
        result = operate(Number(inputNum2), operatorButtonValue, Number(inputNum1));
        currentOperand.textContent = result;
        inputNum1 = '';
        inputNum2 = result;
    }
    catch(error){
        currentOperand.textContent= 'ERROR'
    }
    previousOperand.textContent = '' 
    inputNum1 = '';
    inputNum2 = '';
})

decimalBtn.addEventListener('click', () => {
    inputNum1 += decimalBtn.textContent;
    currentOperand.textContent = inputNum1;


}) 

posNegBtn.addEventListener('click', () => {
    if(inputNum1 === 0) {
        inputNum1 += +'-';
        currentOperand.textContent = inputNum1;
    }
})

allClear();
deleteNum();
numpad()