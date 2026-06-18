// Welcome Screen

const beginBtn = document.getElementById("begin-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const appScreen = document.getElementById("app-screen");

beginBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
});

// Timer

let time = 25 * 60;
let interval;
let running = false;

const timerDisplay = document.getElementById("timer");

function updateTimer() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

updateTimer();

document.getElementById("start-btn").addEventListener("click", () => {

    if(running) return;

    running = true;

    interval = setInterval(() => {

        if(time > 0){
            time--;
            updateTimer();
        }
        else{
            clearInterval(interval);
            running = false;
            alert("Pomodoro Session Complete!");
        }

    },1000);
});

document.getElementById("pause-btn").addEventListener("click", () => {

    clearInterval(interval);
    running = false;
});

document.getElementById("reset-btn").addEventListener("click", () => {

    clearInterval(interval);
    running = false;

    time = 25 * 60;
    updateTimer();
});

// To-Do List

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

loadTasks();

addTaskBtn.addEventListener("click", addTask);

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === "") return;

    createTask(taskText);

    saveTask(taskText);

    taskInput.value = "";
}

function createTask(taskText){

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {

        removeTask(taskText);

        li.remove();
    });

    taskList.appendChild(li);
}

function saveTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => createTask(task));
}

function removeTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(t => t !== task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
