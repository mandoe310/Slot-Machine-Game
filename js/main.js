let boardState = 0;
const h2El = document.querySelector('h2');
const machineEl = document.getElementById('machine');
const buttonEl = document.getElementById('buttons');
const reset = document.getElementById('reset')
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');


let randomNumGen = () => {
    boardState = 1;
    renderButton();
    let randomNum1 = Math.floor(Math.random() * 7);
    let randomNum2 = Math.floor(Math.random() * 7);
    let randomNum3 = Math.floor(Math.random() * 7);
    renderSlots(randomNum1, randomNum2, randomNum3);
};

buttonEl.addEventListener('click', handleButton);


function handleButton(evt) {
    const buttonPress = evt.target.innerHTML;
    if (buttonPress === 'PLAY') {
        randomNumGen();
    } else {
        resetBtn();
        renderMessage();
    }
}

let resetBtn = () => {
    boardState = 0;
    renderButton();
    first.textContent = '❔'
    second.textContent = '❔'
    third.textContent = '❔'
}

let emojis = ['👻',
"🍒", "❌", "💰", "💎", "❼", "⭐️"];

let renderSlots = (randomNum1, randomNum2, randomNum3) => {
    first.textContent = emojis[randomNum1]
    second.textContent = emojis[randomNum2]
    third.textContent = emojis[randomNum3]
    renderMessage(randomNum1, randomNum2, randomNum3)
}

function renderMessage(randomNum1, randomNum2, randomNum3) {
    if (boardState === 0) {
        h2El.innerText = "Press Play To Begin!"
    } else {
        if (randomNum1 === randomNum2 && randomNum1 === randomNum3) {
            h2El.innerText = "*JACKPOT*"
        } else if(randomNum1 !== randomNum2 && randomNum1 !== randomNum3) {
            h2El.innerText = "Try Again!"
        }
    }
}


function renderButton() {
    if(buttonEl.children[0])buttonEl.removeChild(buttonEl.children[0])
    if(boardState === 0) { 
        const buttonChild = document.createElement('button');
        buttonChild.innerHTML = 'PLAY'
        buttonChild.setAttribute('id', 'play');
        buttonEl.appendChild(buttonChild);
    } else {
        const buttonChild = document.createElement('button');
        buttonChild.innerHTML = 'RESET'
        buttonChild.setAttribute('id', 'reset');
        buttonEl.appendChild(buttonChild);
    }
}

function init(){
    renderButton();
    renderMessage();
}

init();