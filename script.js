
let currentNumber =[]
let history=[]
let display = document.querySelector('.display')
let displayHistory = document.querySelector('.displayHistory')
const operators = ['.', 'X', '-', '+', '/'];
let resultCalculated = false; 

for(let i=0;i<=9;i++){
    let number=document.querySelector(`.number${i}`)
    number.addEventListener('click',()=>{
        if(currentNumber.length<20 && !resultCalculated  ){
        currentNumber.push(i)
        display.textContent=currentNumber.join('')}});
}

let plus = document.querySelector('.plus')
plus.addEventListener('click',()=>{prepareOperation('+')})
    
let minus= document.querySelector('.minus')
minus.addEventListener('click',()=>{
    prepareOperation('-');
    if(currentNumber.length==0){
        currentNumber.push('-')
        display.textContent=currentNumber.join('')
    }
   })


let multiplier = document.querySelector('.multiplier')
multiplier.addEventListener('click',()=>{prepareOperation('X')}
)

let divisor = document.querySelector('.divisor')
divisor.addEventListener('click',()=>{prepareOperation('/')})

function prepareOperation(sign){
    if (!operators.includes( currentNumber[currentNumber.length - 1])) {
    if(currentNumber.length!=0||history.length!=0){
        history.length=0;
        history.push(currentNumber.join(''))
        currentNumber.length=0
        currentNumber.push(`${sign}`)
    }}
    displayHistory.textContent = history.join('')
    display.textContent= currentNumber.join('')}

let dot = document.querySelector('.dot')
dot.addEventListener('click', () => {
    if (!operators.includes( currentNumber[currentNumber.length - 1])) {
      currentNumber.push('.');
      display.textContent = currentNumber.join('');
    }
  })
let equals = document.querySelector('.equals')
equals.addEventListener('click',()=>{operate(history,currentNumber)})

let backSpace = document.querySelector('.back')
backSpace.addEventListener('click',()=>{
  if (operators.includes( history[1])) {
    history.length=0
    displayHistory.textContent=history}
    currentNumber.pop();
    display.textContent=currentNumber.join('')
    resultCalculated = false;})

let clear = document.querySelector('.AC')
clear.addEventListener('click',()=>{
    history.length=0;
    currentNumber.length=0;
    display.textContent=currentNumber.join('');
    displayHistory.textContent=history.join('');
    resultCalculated = false;
})
 
document.addEventListener('keydown', event => {
  const key = event.key;
  switch (key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      const number = document.querySelector(`.number${key}`);
      if (number) {
        number.click();
      }
      break;
    case '.':
      const dot = document.querySelector('.dot');
      if (dot) {
        dot.click();
      }
      break;
    case '+':
      const plus = document.querySelector('.plus');
      if (plus) {
        plus.click();
      }
      break;
    case '-':
      const minus = document.querySelector('.minus');
      if (minus) {
        minus.click();
      }
      break;
    case '*':
    case 'x':
      const multiplier = document.querySelector('.multiplier');
      if (multiplier) {
        multiplier.click();
      }
      break;
    case '/':
      const divisor = document.querySelector('.divisor');
      if (divisor) {
        divisor.click();
      }
      break;
    case '=':
    case 'Enter':
      const equals = document.querySelector('.equals');
      if (equals) {
        equals.click();
      }
      break;
    case 'Backspace':
      const backSpace = document.querySelector('.back');
      if (backSpace) {
        backSpace.click();
      }
      break;
    case 'Escape':
      const clear = document.querySelector('.AC');
      if (clear) {
        clear.click();
      }
      break;
    default:
      break;
  }
});

function operate(history, currentNumber) {
  resultCalculated= true;
  if (currentNumber[0] == "/" && currentNumber[1] == 0) {
    history.length = 0;
    currentNumber.length = 0;
    displayHistory.textContent = history;
    display.textContent = "Error!";
  } else {
    let firstNumber = history[0] * 1;

    if (currentNumber[0] == "+") {
      let secondNumber = currentNumber.slice(1).join("") * 1;
      history.push("+");
      history.push(`${secondNumber}`);
      currentNumber.length = 0;
      let result = firstNumber + secondNumber;
      if(result.length>=20){
        currentNumber.push(result.toFixed(20).toString().slice(0, 20));}
        else{
          currentNumber.push(result)
        }
      history.push("=");
    }

    if (currentNumber[0] == "-") {
      let secondNumber = currentNumber.slice(1).join("") * 1;
      history.push(`${currentNumber.join("")}`);
      currentNumber.length = 0;
      let result = firstNumber - secondNumber;
      if(result.length>=20){
        currentNumber.push(result.toFixed(20).toString().slice(0, 20));}
        else{
          currentNumber.push(result)
        }
      history.push("=");
    }

    if (currentNumber[0] == "X") {
      aftersign = currentNumber.splice(0, 1)[0];
      let secondNumber = currentNumber.join("") * 1;
      history.push(`${aftersign}`);
      history.push(`${secondNumber}`);
      currentNumber.length = 0;
      let result = firstNumber * secondNumber;
      if(result.length>=20){
      currentNumber.push(result.toFixed(20).toString().slice(0, 20));}
      else{
        currentNumber.push(result)
      }
      history.push("=");
    }

    if (currentNumber[0] == "/") {
      aftersign = currentNumber.splice(0, 1)[0];
      let secondNumber = currentNumber.join("") * 1;
      history.push(`${aftersign}`);
      history.push(`${secondNumber}`);
      currentNumber.length = 0;
      let result = firstNumber / secondNumber;
      if(result.length>=20){
        currentNumber.push(result.toFixed(20).toString().slice(0, 20));}
        else{
          currentNumber.push(result)
        }
      history.push("=");
    }

    displayHistory.textContent = history.join("");
    display.textContent = currentNumber.join("");
  }
}
