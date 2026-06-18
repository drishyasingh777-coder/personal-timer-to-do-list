// TIMER

let time = 25 * 60;
let timer;
let running = false;

function updateDisplay() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {

    if(running) return;

    running = true;

    timer = setInterval(() => {

        if(time > 0){
            time--;
            updateDisplay();
        }
        else{
            clearInterval(timer);
            running = false;
            alert("Pomodoro Session Complete!");
        }

    },1000);
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    time = 25 * 60;
    updateDisplay();
}

updateDisplay();


// TO DO LIST

function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value.trim() === ""){
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${input.value}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
