// TIMER

let time = 25 * 60;
let timer;
let running = false;

const timerDisplay = document.getElementById("timer");

function updateTimer() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

updateTimer();

document.getElementById("startBtn").addEventListener("click", function () {

    if (running) return;

    running = true;

    timer = setInterval(function () {

        if (time > 0) {
            time--;
            updateTimer();
        } else {
            clearInterval(timer);
            alert("Time's Up!");
            running = false;
        }

    }, 1000);
});

document.getElementById("pauseBtn").addEventListener("click", function () {

    clearInterval(timer);
    running = false;
});

document.getElementById("resetBtn").addEventListener("click", function () {

    clearInterval(timer);
    running = false;

    time = 25 * 60;

    updateTimer();
});


// TO-DO LIST

document.getElementById("addBtn").addEventListener("click", function () {

    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") return;

    let li = document.createElement("li");

    li.innerHTML =
        taskText +
        '<button class="deleteBtn">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskInput").value = "";
});
