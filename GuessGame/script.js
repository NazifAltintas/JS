const btnStart = document. getElementById( "btnStart");
const txtNumber = document.getElementById("txtNumber");
const pnlGuess = document.getElementById( "pnlGuess");
const lblMessage = document. getElementById( "lblMessage");
const lblTotalShot = document.getElementById("lblTotalShot" );
const btnGuess = document.getElementById("btnGuess" );

let randomNumber = 0;
let minNumber = 1;
let maxNumber = 100;
let totalShot = 7;
let shot=0;
let gstatus = ""; //on, off


btnStart.addEventListener( "click", ()=>{
start();
});
btnGuess.addEventListener( "click", ()=>{
    guess();
});

txtNumber.addEventListener( "keyup", (e) => {
    if (e.key==="Enter") {
        guess();
    }
} )

const start = ()=>{
    randomNumber = getRandomNumber();
    shot= totalShot;
    gstatus = "on";
    lblMessage. innerText =`Guess between ${minNumber} and ${maxNumber}` ;
    lblTotalShot. innerText = shot;
    pnlGuess. classList. remove("d-none");
    txtNumber.focus();
    txtNumber.value="";
    lblMessage.classList.remove("bg-danger");
    lblMessage.classList.remove("bg-success")
   
}

const guess = () =>{
        let message ="";

        if (gstatus==="off") {
            alert("The game over...")
            return;  
        }

        let number = txtNumber. value;
        if(!number | isNaN(number) || number<minNumber || number>maxNumber ){
            lblMessage.innerText = `Enter between ${minNumber} and ${maxNumber}`;
            return;
        }

        shot--;
     
        if(shot<0){
            lblMessage.classList.add("bg-danger");
            message = `Your shots are over, target was ${randomNumber}. You lost!` ;
            gstatus = "off";
        }
        else if(number > randomNumber ){
            message = `Less than ${number}`;
            txtNumber.value="";
            txtNumber. focus();
        }
        else if(number < randomNumber ){
            message =  `Greater than ${number}`;
            txtNumber.value=""
            txtNumber.focus();}
        else{
            lblMessage.classList.add("bg-success");
            message = "Congratulation!";
            gstatus ="off";
        }
       
        lblTotalShot.innerText=shot;
        lblMessage.innerText=message;
        
}

const getRandomNumber = () =>{
return Math. floor(Math. random () * (maxNumber - minNumber + 1) + minNumber);
}