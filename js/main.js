let boardState = 0;
// if board state equals zero its the beginning of the game and the player should be able to press the play button
// if board state equals one its the end of the game and the player should be able to press the reset button
const h2El = document.querySelector('h2');
const machineEl = document.getElementById('machine');
const buttonEl = document.getElementById('buttons');
const reset = document.getElementById('reset')
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');


let randomNumGen = () => {
    console.log("click")
    boardState = 1;
    renderButton();
    let randomNum1 = Math.floor(Math.random() * 7);
    let randomNum2 = Math.floor(Math.random() * 7);
    let randomNum3 = Math.floor(Math.random() * 7);
    // console.log(emojis[randomNum1])
    renderSlots(randomNum1, randomNum2, randomNum3)
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

// reset.addEventListener('click', resetBtn);

let emojis = ['👻',
"🍒", "❌", "💰", "💎", "❼", "⭐️"]

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
    if(boardState === 0) { // show play button remove reset button
        const buttonChild = document.createElement('button');
        buttonChild.innerHTML = 'PLAY'
        buttonChild.setAttribute('id', 'play')
        buttonEl.appendChild(buttonChild)
    } else { // show reset remove play button
        const buttonChild = document.createElement('button');
        buttonChild.innerHTML = 'RESET'
        buttonChild.setAttribute('id', 'reset')
        buttonEl.appendChild(buttonChild)
    }
}

function init(){
    renderButton();
    renderMessage();
}

init();