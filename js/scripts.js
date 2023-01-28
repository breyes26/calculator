const ROUND = 3;
const ALL_BUTTONS = document.querySelectorAll("button");
const HISTORY = document.querySelector("#history");
const CURRENT = document.querySelector('#current');
const DIGITS = document.querySelectorAll('button.digit');

let numOne = "";
let numTwo = "";
let operand = "";

DIGITS.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        alert("Hello");
    })
});




ALL_BUTTONS.forEach((button)=>{
    button.addEventListener('mouseover',(e)=>{
        button.style.transform= "scale(1.05)";
    }
    )

    button.addEventListener('mouseout',(e)=>{
        button.style.removeProperty("transform");
    }
    )
});

function isNum(num){
    return !isNaN(num);
}

function roundNPlace(num,place){
    if(place <=0){
        return num
    }
    let shift = 1;
    for(let i = 0;i<place;i++){
        shift *= 10;
    }
    return Math.round(num*shift)/shift
}

function add(a,b){
    return roundNPlace(a+b,ROUND);
}

function subtract(a,b){
    return roundNPlace(a-b,ROUND);
}

function multiply(a,b){
    return roundNPlace(a*b,ROUND);
}

function divide(a,b){
    return roundNPlace(a/b,ROUND);
}


function operate(a,op,b){
    if(!isNum(a) || !isNum(b)){
        console.log("Error")
        return
    }
    switch(op){
        case "+":
            console.log(add(a,b));
            break;
        case "-":
            console.log(subtract(a,b));
            break;
        case "/":
            console.log(divide(a,b));
            break;
        case "*":
            console.log(multiply(a,b));
            break; 
        default:
            console.log("Error");
            break;   
    }
}

