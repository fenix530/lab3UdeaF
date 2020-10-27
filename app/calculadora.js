'use strict';

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return("No se puede dividir por Cero")
    }else{
        return a/b;
    }
    
}

module.exports{
    sum,
    minus,
    multiply,
    divide
}