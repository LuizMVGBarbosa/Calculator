
let currentNumber =[]
let history=[]
let display = document.querySelector('.display')
let displayHistory = document.querySelector('.displayHistory')

let zero = document.querySelector('.zero')
zero.addEventListener('click',()=>{
    currentNumber.push(0);
    display.textContent= currentNumber.join('')})

let one = document.querySelector('.one')
one.addEventListener('click',()=>{
    currentNumber.push(1);
    display.textContent= currentNumber.join('')})

let two = document.querySelector('.two')
two.addEventListener('click',()=>{
    currentNumber.push(2);
    display.textContent= currentNumber.join('')})

let three = document.querySelector('.three')
three.addEventListener('click',()=>{
    currentNumber.push(3);
    display.textContent= currentNumber.join('')})

let four =document.querySelector('.four')
four.addEventListener('click',()=>{
    currentNumber.push(4);
    display.textContent= currentNumber.join('')})

let five =document.querySelector('.five')
five.addEventListener('click',()=>{
    currentNumber.push(5);
    display.textContent= currentNumber.join('')})

let six = document.querySelector('.six')
six.addEventListener('click',()=>{
    currentNumber.push(6);
    display.textContent= currentNumber.join('')})
let seven = document.querySelector('.seven')
seven.addEventListener('click',()=>{
    currentNumber.push(7);
    display.textContent= currentNumber.join('')})

let eight = document.querySelector('.eight')
eight.addEventListener('click',()=>{
    currentNumber.push(8);
    display.textContent= currentNumber.join('')})

let nine = document.querySelector('.nine')
nine.addEventListener('click',()=>{
    currentNumber.push(9);
    display.textContent= currentNumber.join('')})

let plus = document.querySelector('.plus')
plus.addEventListener('click',()=>{
     if(currentNumber.length!=0){
    history.push(currentNumber.join(''))
    currentNumber.length=0
    currentNumber.push('+');}
    displayHistory.textContent = history.join('')
    display.textContent= currentNumber.join('')})
let minus= document.querySelector('.minus')
minus.addEventListener('click',()=>{
    currentNumber.push('-');
    display.textContent= currentNumber.join('')})

let multiplier = document.querySelector('.multiplier')
multiplier.addEventListener('click',()=>{
    if(currentNumber.length!=0){
        history.push(currentNumber.join(''))
        currentNumber.length=0
        currentNumber.push('X');}
    displayHistory.textContent = history.join('')
    display.textContent= currentNumber.join('')})
let divisor = document.querySelector('.divisor')
divisor.addEventListener('click',()=>{
    if(currentNumber.length!=0){
        history.push(currentNumber.join(''))
        currentNumber.length=0
        currentNumber.push('/');}
    displayHistory.textContent = history.join('')
    display.textContent= currentNumber.join('')})

let dot = document.querySelector('.dot')
dot.addEventListener('click',()=>{
    if(currentNumber!=0){
    currentNumber.push('.')
    display.textContent= currentNumber.join('')}
})
let equals = document.querySelector('.equals')
equals.addEventListener('click',()=>{operate(history,currentNumber)})
 
let calcNumber=0;
function operate(history,currentNumber){
   let firstNumber= history[calcNumber]*1
    
   if(currentNumber[0]=='+'){
    let secondNumber= currentNumber.join('')*1 
    history.push('+')
    history.push(`${secondNumber}`)
    currentNumber.length=0
    currentNumber.push(`${firstNumber+secondNumber}`)
   displayHistory.textContent= history.join('')
   display.textContent=currentNumber}

   if(currentNumber[0]=='-'){
    let secondNumber= currentNumber.join('')*1 
    history.push(`${secondNumber}`)
    currentNumber.length=0
    currentNumber.push(`${firstNumber-secondNumber}`)
   displayHistory.textContent= history.join('')
   display.textContent=currentNumber}

   if(currentNumber[0]=='X'){
    aftersign = currentNumber.splice(0,1)[0];
    let secondNumber= currentNumber.join('')*1 
    history.push(`${aftersign}`)
    history.push(`${secondNumber}`)
    currentNumber.length=0
    currentNumber.push(`${(firstNumber*secondNumber)}`)
   displayHistory.textContent= history.join('')
   display.textContent=currentNumber}

   if(currentNumber[0]=='/'){
    aftersign = currentNumber.splice(0,1)[0];
    let secondNumber= currentNumber.join('')*1 
    history.push(`${aftersign}`)
    history.push(`${secondNumber}`)
    currentNumber.length=0
    currentNumber.push(`${firstNumber/secondNumber}`)
   displayHistory.textContent= history.join('')
   display.textContent=currentNumber}
  calcNumber+=3;

}



