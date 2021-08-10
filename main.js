function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    let operatorOne = operator;

    switch(operatorOne){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
const screenArr = [];
let num1;
let operator = '';
let count = 0
let value;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        value = e.target.value;

        if(value == '*' || value == '/' || value == '+' || value == '-'){
            if(count % 2 == 0){
                num2 = screenArr.join('') || 0; 

                console.log(operate(num1, num2, operator));
            }
            operator = value;
            num1 = screenArr.join('') || 0;
            screen.textContent = screenArr.length = 0;
            console.log(num1);
        }else{
            if(value == 'clear'){
                screenArr.length = 0;
                screen.textContent = screenArr;
            }else{
                screenArr.push(e.target.value);
                screen.textContent = screenArr.join('');
            }
        }
    })
})