class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }

    markAsPending() {
        this.completed = false;
    }

    display() {
        return `${this.completed ? '[✔]' : '⏳'} ${this.description}`
    }
}

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        if(index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }

    showAllTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.display()}`);
        })
    }
}

const myList = new ToDoList();

const task1 = new Task('Learn Javascript OOP');
const task2 = new Task('Build a Todo List App');

myList.addTask(task1);
myList.addTask(task2);

console.log('All Tasks:');
myList.showAllTasks();

task1.markAsCompleted();

console.log('\nUpdated Tasks:');
myList.showAllTasks();

const addTaskBtn = document.getElementById('addTaskBtn');
const list = new ToDoList();

function addNewTask() {
    const input = document.getElementById('newTask');
    const task = new Task(input.value);
    list.addTask(task);
    input.value = '';
    renderList();
}

function renderList() {
    const ul = document.getElementById('taskList');
    ul.innerHTML = '';
    list.tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.display();
        ul.appendChild(li);
    })
}

addTaskBtn.addEventListener('click', addNewTask);