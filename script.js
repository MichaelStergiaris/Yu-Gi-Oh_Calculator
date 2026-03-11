let LP1 = 8000;
let LP2 = 8000;

let currentInput = "";

const p1Display = document.getElementById("LifePoints1");
const p2Display = document.getElementById("LifePoints2");

function addNum(num) {
    currentInput += num;
    console.log("The number you typed is: " + currentInput);
}

function applyLP(player, operation){
    if(currentInput === "") return;

    let inputNum = Number(currentInput);

    if(player === 1){
        if (operation === '+') {
            LP1 += inputNum;
        } else if (operation === '-') {
            LP1 -= inputNum;
            if(LP1 < 0){
                LP1 = 0;
            }
        }

        p1Display.innerText = LP1;

        if(LP1 === 0){
            setTimeout(() => alert("Duelist 1 Lost"), 50);
        }

    }else if (player === 2){
        if (operation === '+'){
            LP2 += inputNum;
        }else if (operation === '-'){
            LP2 -= inputNum;
            if(LP2 < 0){
                LP2 = 0;
            }
        }

        p2Display.innerText = LP2;

        if(LP2 === 0){
            setTimeout(() => alert("Duelist 2 Lost"), 50);
        }

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
