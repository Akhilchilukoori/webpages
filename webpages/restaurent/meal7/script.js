let plus1=document.getElementsByClassName("plus")[0];
let minus1=document.getElementsByClassName("minus")[0];
let num1=document.getElementsByClassName("num")[0];
let plus2=document.getElementsByClassName("plus")[1];
let minus2=document.getElementsByClassName("minus")[1];
let num2=document.getElementsByClassName("num")[1];

let number1=0;
num1.innerText=number1;
function incre(){
    
        number1++;
       num1.innerText=number1;
    
}
function decre(){
    if(number1!=0){
    number1--;
    num1.innerText=number1;}
}
plus1.addEventListener("click",()=>{
    incre();
})
minus1.addEventListener('click',()=>{
    decre();
})

let number2=0;

function increment(){
    
    number2++;
   num2.innerText=number2;

}
function decrement(){
if(number2!=0){
number2--;
num2.innerText=number2;}
}
plus2.addEventListener("click",()=>{
increment();
})
minus2.addEventListener('click',()=>{
decrement();
})