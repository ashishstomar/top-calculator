let displayTxt = document.querySelector('.displayTxt')
let allClearBtn = document.querySelector("#allClear");
let deleteBtn = document.querySelector('#delete');
let numButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll(".operator");
let decimalBtn = document.querySelector('#decimal');
let equalBtn = document.querySelector('#equal');

displayTxt.textContent = '0'

function add(x,y) {
    displayTxt.textContent = (x + y);
    console.log(x+y)
}

function subtract(x,y) {
    displayTxt.textContent = (x - y);
    console.log(x-y)
}

function multiply(x,y) {
    displayTxt.textContent = (x * y);
    console.log(x*y)
}

function divide(x,y){
    displayTxt.textContent = (x / y);
    console.log(x/y)
}

function factorial(num){
    if (num === 0) return 1;
    fact = 1;
    for(let i = num; i >= 1; i--) {
      fact = fact * i;
    }
    displayTxt.textContent = fact;
    console.log(fact)
}    

function operate(num1, operator, num2) {

    switch (operator) {
        case '+' :
            add(num1,num2);
            break;
        case '-' :
            subtract(num1,num2);
            break;
        case 'x' :
            multiply(num1,num2);
            break;
        case '/' :
            divide(num1,num2);
            break;
        case 'X!':
            factorial(num1);
            break;            
    }
}

function allClear(){
    allClearBtn.addEventListener('click', () => {
    inputNum = [];
    displayTxt.textContent = '0'
})
}


function deleteNum() {
    deleteBtn.addEventListener('click', () => {
        inputNum.pop()
        displayTxt.textContent = inputNum.join('');
    if(inputNum.length === 0 ) {
        displayTxt.textContent = '0'
    }
})
}


let inputNum = [];
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        inputNum.push(numButton.textContent);
        displayTxt.textContent = inputNum.join('');
    })
})


let inputNum2 = [];
let operatorButtonValue = '';

//upon clicking any operator perform operation
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        inputNum2 = inputNum;
        inputNum = [];
        // console.log('inputNum2: '+parseInt(inputNum2.join('')));
        // console.log('inputNum: '+inputNum.join(''));
       operatorButtonValue = operatorButton.textContent;
       console.log('Operator: '+operatorButtonValue);
       })
})

decimalBtn.addEventListener('click', () => {
    console.log(decimalBtn);
    inputNum.push('.');
}) 

equalBtn.addEventListener('click', () => {
    operate(parseInt(inputNum2.join('')),operatorButtonValue, parseInt(inputNum.join('')));
    inputNum = [];
})

allClear();
deleteNum();
