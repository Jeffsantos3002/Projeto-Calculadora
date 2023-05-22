'use strict';

const display = document.querySelector('#values');
const result =  document.querySelector("#result");


function insert(num){
    display.value += num;
}

function clearInput(){
    display.value = null;
}

function removeLast(){
    display.value = display.value.slice(0,-1);
}

function calcular(){

    try{
        if(display.value){
            const regex = /\^/;
            const match = display.value.match(regex);
            if (match){
                const newresult = display.value.replace(match, "**");
                result.value = display.value + "\n =" + eval(newresult);
                display.value = null;
                
                
            }else{
                result.value = display.value + "\n =" + eval(display.value);
                display.value = null;
                
            }
        }else{
            alert("Entrada vazia")
        }        
    }catch(e){
        alert("Digite os valores corretamente");
    }
 
}

const inputField = display;
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault;
        calcular();
    }
});