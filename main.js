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
let num2;
let operator = '';
let count = 0;
let value;
let result;
let dot = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        value = e.target.value;


        if(value == '+' || value == '-' || value == '*' || value == '/'){
            dot = 0;
            if(count > 0){
                
                num2 = screenArr.join('');
                screenArr.length = 0;

                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                result = operate(num1, num2, operator);

                if(result){
                    screen.textContent = result;
                
                    num1 = result;
                    operator = value;
                }else{
                    screen.textContent = 'ERROR, try again';
                    num1 = 0;
                    num2 = 0;
                }
            }else{
                num1 = result || screenArr.join('') || 0;
                screenArr.length = 0;
                operator = value;
                screenArr.length = 0;
                count++;
            }
        }else if(value == 'delete'){
            console.log(true);
        }else if(value == 'clear'){
            screenArr.length = 0;
            screen.textContent = 0;
            num1 = 0;
            num2 = 0;
            operator = '';
            result = 0;
            count = 0;
            dot = 0;
        }else if(value == '='){
            num2 = screenArr.join('') || 0;
            
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            result = operate(num1, num2, operator);

            if(result){
                num1 = result;
                screen.textContent = result;
                count = 0;
                dot = 0;
            }else{
                screen.textContent = 'ERROR, try again';
            }
        }else if(value == '.'){
            dot++;
            if(dot == 1 && screenArr.length == 0){
                screenArr.push(0, value);
                screen.textContent = screenArr.join('');
            }else if(dot == 1){
                screenArr.push(value);
                screen.textContent = screenArr.join('');
            }
        }else{
            screenArr.push(value);
            screen.textContent = screenArr.join('');
        }
    })
})