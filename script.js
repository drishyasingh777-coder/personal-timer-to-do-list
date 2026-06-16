const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const timerScreen = document.getElementById("timerScreen");

const timeDisplay = document.getElementById("timeDisplay");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const beginBtn = document.getElementById("beginBtn");

let minutes = 25;
let seconds = 0;
let timer;

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    timerScreen.classList.remove("hidden");
});

plusBtn.addEventListener("click", () => {
    minutes++;
    updateDisplay();
});

minusBtn.addEventListener("click", () => {
    if(minutes > 1){
        minutes--;
        updateDisplay();
    }
});

beginBtn.addEventListener("click", () => {

    clearInterval(timer);

    timer = setInterval(() => {

        if(seconds === 0){

            if(minutes === 0){
                clearInterval(timer);
                alert("Time's up!");
                return;
            }

            minutes--;
            seconds = 59;
        }
        else{
            seconds--;
        }

        updateDisplay();

    },1000);
});

function updateDisplay(){

    let m = String(minutes).padStart(2,"0");
    let s = String(seconds).padStart(2,"0");

    timeDisplay.textContent = `${m}:${s}`;
}
