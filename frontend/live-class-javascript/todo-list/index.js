/******************* 
 * PART 1: SELECT ELEMENTS
*/
// select all html tags
const appContainer = document.getElementById('app-container');
const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('add-btn');
const addBtn2 = document.getElementById('add-btn2');
const tasksArea = document.getElementById('tasks-area');
const taskList = document.getElementById('task-list');
const msg = document.getElementById('msg');
const cancelBtn = document.getElementById('cancel-btn');
const modal = document.getElementById('modal');
const editInputField = document.getElementsByClassName('edit-input')[0];
const clear = document.getElementById('clear');

// load any pre-existing items in localStorage. If there aren’t any, you create an empty array
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const renderTask = (taskText) => {
  const li = document.createElement('Li');
  
  li.innerHTML = `
  <span class="task-text">${taskText}</span>
  <div id="icons">
  <i class="fa fa-check complete-btn"></i>
  <i class="fa fa-pencil edit-btn"></i>
  <i class="fa fa-trash-o delete-btn"></i>
  </div>
  `;
  taskList.appendChild(li);
  
  /***************
   * PART 3: MARK AS COMPLETED
  ***************/
 const completedBtn = li.querySelector('.complete-btn');
 completedBtn.addEventListener('click', () => {
   li.classList.toggle('completed');
  })
  
  /***************
   * PART 3: EDIT A TASK
  ***************/
 const editBtn = li.querySelector('.edit-btn');
 editBtn.addEventListener('click', () => {
   modal.style.display = 'block';
   appContainer.style.opacity = 0.2;

   tasksBeingEdited = li.querySelector('.task-text');
  editInputField.value = tasksBeingEdited.textContent;
})
  
/*************
 * PART 4: DELETE TASK
**************/
 const deleteBtn = li.querySelector('.delete-btn');
 deleteBtn.addEventListener('click', () => {
   const index = itemsArray.indexOf(taskText);

   if (index > -1) {
     itemsArray.splice(index, 1);
  }

  localStorage.setItem('items', JSON.stringify(itemsArray));
  li.remove();
});
};
/******************
 
 * PART 2: ADD TASK FUNCTION
*/


let tasksBeingEdited = null;
// declare a function to add task
const addTask = () => {
  let taskText = inputField.value.trim();
  // Show msg
  // validation
  if(taskText === '') return  msg.style.display = 'block';
  
  // create task item
  // Show Input field on default
  tasksArea.style.display = 'block';
  itemsArray.push(taskText);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  // clear input field after each task is added
  inputField.value = '';
  renderTask(taskText);
}

// localStorage.clear();

addBtn2.addEventListener('click', () => {
  if (!tasksBeingEdited) return;

  const oldText = tasksBeingEdited.textContent;
  const newText = editInputField.value.trim();

  tasksBeingEdited.textContent = newText;
  
  const index = itemsArray.indexOf(oldText);
  if (index > -1) {
    itemsArray[index] = newText;
  }
  
  localStorage.setItem('items', JSON.stringify(itemsArray));

  editInputField.value = '';
  modal.style.display = 'none';
  appContainer.style.opacity = 1;
  
  tasksBeingEdited = null;
})

/*****************
 * PART 5: EVENT LISTENERS
*****************/
addBtn.addEventListener('click', addTask);

itemsArray.forEach(renderTask);
// Hide Input field on default
if(itemsArray.length === 0) {
  tasksArea.style.display = 'none';
} else {
  tasksArea.style.display = 'block';
}
// Hide msg
msg.style.display = 'none';

cancelBtn.addEventListener('click', () => {
   // Hide modal
    appContainer.style.opacity = 1
    modal.style.display = 'none';
    tasksBeingEdited = null;
})

clear.addEventListener('click', () => {
  localStorage.clear();
  document.querySelectorAll('li').forEach((li) => li.innerHTML = '');
  tasksArea.style.display = 'none';
  taskList.innerHTML = '';
  itemsArray = [];
  inputField.value = '';
})
