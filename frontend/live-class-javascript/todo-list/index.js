// select all html tags
let inputField = document.getElementById('input-field');
let addBtn = document.getElementById('add-btn');
let tasksArea = document.getElementById('tasks-area');
let msg = document.getElementById('msg');

// Hide Input field on default
tasksArea.style.display = 'none';
// Hide msg
msg.style.display = 'none';
// declare a function to add task
const addTask = () => {
    // alert('Buton Clicked ' + inputField.value);
    // Show msg
    if(inputField.value === '') return  msg.style.display = 'block';

    // create an unordered lists for tasks
    let taskList = document.createElement('ul');
    let task = document.createElement('li');
    if(task) {
        // Show Input field on default
        tasksArea.style.display = 'block';
    }
    task.textContent = inputField.value;
        taskList.appendChild(task);
        tasksArea.appendChild(taskList);
        // clear input field after each task is added
        inputField.value = '';
        // Hide msg
        msg.style.display = 'none';
}
addBtn.addEventListener('click', addTask);