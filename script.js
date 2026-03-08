let LP1 = 8000;
let LP2 = 8000;

let currentInput = "";

const p1Display = document.getElementById("lpPlayer1");
const p2Display = document.getElementById("lpPlayer2");

function addNum(num){
    currentInput += num;
    console.log("The number you wrote is:", currentInput);
}

function applyLP(player, operation){
    if (currentInput === "") return;

    let inputNum = Number(currentInput);
    
    if (player === 1){
        if (operation === '+'){
            LP1 += inputNum;
        }else if (operation === '-'){
            LP1 -= inputNum;
        }
        
        p1Display.innerText = LP1;

    }else if (player === 2){
        if (operation === '+'){
            LP2 += inputNum;
        }else if (operation === '-'){
            LP2 -= inputNum;
        }

        p2Display.innerText = LP2;

    }
    currentInput = "";
}


function halveLP(player){
    if(player === 1){
        LP1 = Math.ceil(LP1 / 2);
        p1Display.innerText = LP1;   
    }else if (player === 2){
        LP2 = Math.ceil(LP2 / 2);
        p2Display.innerText = LP2;
    }

    currentInput = "";
}


function ResetDuel(){
    LP1 = 8000;
    LP2 = 8000;
    currentInput = "";
    p1Display.innerText = LP1;
    p2Display.innerText = LP2;
}
