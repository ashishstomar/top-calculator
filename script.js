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
const body = document.querySelector('body')


const lightIcon = document.querySelector("#light-icon");
const darkIcon = document.querySelector("#dark-icon");

// Set dark-mode class on body if darkMode is true and pick icon
if (darkTheme) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("display", "none");
} else {
  lightIcon.setAttribute("display", "none");
}

// Toggle dark mode on button click
function darkModeToggle() {
    darkTheme = !darkTheme;
    document.body.classList.toggle("dark-mode");
    
    // Toggle light and dark icons
    if (darkTheme) {
        body.style.background = 'linear-gradient(135deg, #ffd3a5, #fd6585)';
        lightIcon.setAttribute("display", "block");
        darkIcon.setAttribute("display", "none");
      
    } else {
        body.style.background = 'linear-gradient(135deg, #6c6c6c, #1f1f1f)';
        lightIcon.setAttribute("display", "none");
        darkIcon.setAttribute("display", "block");
    }
  }


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
        if (num === 0){
            return 1;
        }
        else if (num === '') {
            return 0;
        }
        else if (num > 170) {
            inputNum1 = '';
            return "BAJILLION";
        } 
        fact = 1;
        for(let i = num; i >= 1; i--) {
          fact = fact * i;
        }
        inputNum1 = fact;
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
            return currentOperand.textContent = 'ERROR';   
    }
}


factBtn.addEventListener('click', () => {
    currentOperand.textContent = factorial(inputNum1);
})

const allClear = function() {
    inputNum1 = '';
    inputNum2 = '';
    previousOperand.textContent = '';
    currentOperand.textContent = '0';
}


const deleteNum = function() {
    inputNum1 = inputNum1.slice(0, -1); 
        currentOperand.textContent = inputNum1;
    if(inputNum1.length === 0 ) {
        currentOperand.textContent = '0'
    }
}

const numPad = function(numButton) {

    if (inputNum1.length > 10) {
        return;
    }
    if(currentOperand.textContent === '0') {
        currentOperand.textContent = '';
        inputNum1 = '';
    }
    if(inputSource === 'click') {
        inputNum1 += numButton.textContent;
    }
    else {
        inputNum1 += numButton;
    }
    currentOperand.textContent = inputNum1;
}

previousOperand.textContent = '';
currentOperand.textContent = '0';


let inputNum1 = '0';
let inputNum2 = '';
let operatorButtonValue = '';
let result = '';
let inputSource = '';

deleteBtn.addEventListener('click', () => deleteNum());
allClearBtn.addEventListener('click', () => allClear());

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        inputSource = 'click';
        numPad(numButton)
    });    
})    



//keyboard Input
document.addEventListener('keydown', (e) => {
    key = e.key;
  if (key === 'Backspace') {
        deleteNum();
        console.log('Backspace works');
    }
    else if (key === 'Delete') {
        allClear();
        console.log("Delete works");
    } 
    else if (key <= 9 ) {
        inputSource = 'keydown';
        numPad(key);
    }        
}) 




///////////////////////////////////////////


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
        else{
            if(inputNum1 === '') {
                operatorButtonValue = operatorButton.textContent;
                previousOperand.textContent = `${inputNum2} ${operatorButtonValue}`;
            }
            else {
                result = operate(Number(inputNum2), operatorButtonValue, Number(inputNum1));
                operatorButtonValue = operatorButton.textContent;
                previousOperand.textContent = `${result} ${operatorButtonValue}`;
                currentOperand.textContent = '0';
                inputNum1 = '';
                inputNum2 = result;
            }
        }
    })
})

equalBtn.addEventListener('click', () => {
    try {
        result = operate(Number(inputNum2), operatorButtonValue, Number(inputNum1));
        inputNum1 = '';
        inputNum2 = result;
        currentOperand.textContent = inputNum2;
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