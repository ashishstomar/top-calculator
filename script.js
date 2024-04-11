let previousOperand = document.querySelector('.previousOperand')
let currentOperand = document.querySelector('.currentOperand')
let allClearBtn = document.querySelector("#allClear");
let deleteBtn = document.querySelector('#delete');
let numButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll(".operator");
let factBtn = document.querySelector("#fact");
let decimalBtn = document.querySelector('#decimal');
let posNegBtn = document.querySelector('#posNeg');
let equalBtn = document.querySelector('#equal');

const add = function(x,y) {
    return x + y;
}

const subtract = function(x,y) {
    return x - y;
}

const multiply = function(x,y) {
    return x * y;
}

const divide = function(x,y) {
    return x == '1' && y == '0' ? "LMAODED" :  x / y;
}

const factorial = function(num) {
    try {
        if (num === 0) return 1;
        fact = 1;
        for(let i = num; i >= 1; i--) {
          fact = fact * i;
        }
        return fact;
    }
    catch(error){
        currentOperand.textContent = 'ERROR'
    }
}    

const operate = function(num1, operator, num2) {

    switch (operator) {
        case '+' :
           return add(num1,num2);
        case '-' :
           return subtract(num1,num2);
        case 'x' :
           return multiply(num1,num2);
        case '/' :
            return divide(num1,num2);  
        default:
            currentOperand.textContent = 'ERROR';   
    }
}


factBtn.addEventListener('click', () => {
    currentOperand.textContent = factorial(inputNum1);
})

const allClear = function() {
    allClearBtn.addEventListener('click', () => {
    inputNum1 = '';
    inputNum2 = '';
    previousOperand.textContent = '';
    currentOperand.textContent = '0';
    })
}


const deleteNum = function() {
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


let inputNum1 = '0';
let inputNum2 = '';
let operatorButtonValue = '';
let result = '';

const numPad = function() {
    numButtons.forEach((numButton) => {
        numButton.addEventListener('click', () => {
            if(currentOperand.textContent === '0') {
                currentOperand.textContent = '';
                inputNum1 = '';
            }
            inputNum1 += numButton.textContent;
            currentOperand.textContent = inputNum1 ;
        })
    })
}

//upon clicking any operator perform operation
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if(inputNum2 ==='') {
            inputNum2 = inputNum1;
            inputNum1 = '';
           operatorButtonValue = operatorButton.textContent;
           previousOperand.textContent = ` ${inputNum2} ${operatorButtonValue}`;
           currentOperand.textContent = '0';
        }
        else {
            result = operate(Number(inputNum2), operatorButtonValue, Number(inputNum1));
            operatorButtonValue = operatorButton.textContent;
            previousOperand.textContent = `${result} ${operatorButtonValue}`;
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
        currentOperand.textContent = 'ERROR'
    }
    previousOperand.textContent = '' 
    inputNum1 = '';
    inputNum2 = '';
})

decimalBtn.addEventListener('click', () => {
    if( currentOperand.textContent.includes('.')) {
    return;
    }
    else {
        inputNum1 += '.';
        currentOperand.textContent = inputNum1;
    }
})


posNegBtn.addEventListener('click', () => {
    if(currentOperand.textContent === '0') {
        return;
    }
    else {
        inputNum1 *= '-1';
        currentOperand.textContent = inputNum1;
    }
    console.log(inputNum1);
})

allClear();
deleteNum();
numPad()