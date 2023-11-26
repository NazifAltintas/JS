const keypadEl = document.querySelector(".calculator .keypad");
const operationsEl = document.querySelector(".calculator .operations");
const resultEl = document. querySelector(".calculator .result");
let calculated = false;
let pushed = false
let pointed = false;


keypadEl.addEventListener( "click", (e)=>{
    const buttonVal = e.target.innerText;
 
    if(buttonVal === "="){
        const result = eval (operationsEl.innerText);
        resultEl.innerText = result;
        calculated = true;
       
    }
    else{
        if(calculated){
            if(isNaN(buttonVal)){
                if (pushed) return;
                if (buttonVal===".") {
                    if (pointed)  return;
                    operationsEl.innerText="0." 
                    pointed= true;                   
                } else{operationsEl.innerText = resultEl.innerText + buttonVal;}
                
                pushed = true;
            }
            else{
                operationsEl.innerText=buttonVal;
                pushed = false;
            }
        }
        else{

            if(isNaN(buttonVal)){
                if (pushed) return;
                operationsEl. innerText += buttonVal;
                pushed = true;
            }
            else{
                operationsEl. innerText += buttonVal;
                pushed = false;
            }
           
        }

        calculated = false;
    } 

    
})

