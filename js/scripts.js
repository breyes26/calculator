const ROUND = 3;

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

operate("1","*","3");