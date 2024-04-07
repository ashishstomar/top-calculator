const displayTxt = document.querySelector('.displayTxt')
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
        case '*' :
            multiply(num1,num2);
            break;
        case '/' :
            divide(num1,num2);
            break;
        case '!':
            factorial(num1);
            break;            
    }
}


let inputNum = [];
let numButtons = document.querySelectorAll('.num');
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        inputNum.push(numButton.textContent);
        displayTxt.textContent = inputNum.join('');
    })
})


let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
       let operatorButtonValue = operatorButton.textContent
       if(operatorButtonValue === 'x'){
       console.log(operatorButtonValue);
        operate(inputNum.join(''),'x', 1)
       }
    })
})

let allClearBtn = document.querySelector("#allClear");
allClearBtn.addEventListener('click', () => {
    inputNum = [];
    displayTxt.textContent = '0'
})


let deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
    inputNum.pop()
    displayTxt.textContent = inputNum.join('');
    
    if(inputNum.length === 0 ) {
        displayTxt.textContent = '0'
    }
})

