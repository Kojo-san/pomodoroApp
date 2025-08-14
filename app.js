const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset'); 
const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds'); 

let totalSeconds = 25 * 60; 
let state = true;
let myInterval; 

const appTimer = () => {

    if(state) {
        state = false;
        
        const updateSeconds = () => {

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;

            if(secondsLeft < 10) {
                secondDiv.textContent = '0' + secondsLeft;
            } else {
                secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`

            if(minutesLeft === 0 && secondsLeft === 0) {
            bells.play()
            clearInterval(myInterval);
            }
        }
    myInterval = setInterval(updateSeconds, 1000);
    } else {
    alert('Session has already started.')
    }
}

const pauseTimer = () => {
    clearInterval(myInterval);
    state = true;
}

const resetTimer = () => {
    clearInterval(myInterval);
    totalSeconds = 25 * 60;
    minuteDiv.textContent = '25';
    secondDiv.textContent = '00';
    state = true;
}

startBtn.addEventListener('click', appTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);



