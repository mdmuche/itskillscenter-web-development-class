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
const cancelBtn = document.querySelector('.fa-times');
const modal = document.getElementById('modal');
const editInputField = document.getElementsByClassName('edit-input')[0];
console.log(editInputField.value);

/******************
 * PART 2: ADD TASK FUNCTION
*/
// Hide Input field on default
tasksArea.style.display = 'none';
// Hide msg
msg.style.display = 'none';
// declare a function to add task
const addTask = () => {
  // alert('Buton Clicked ' + inputField.value);
  let taskText = inputField.value.trim();
  
  // Show msg
  // validation
  if(taskText === '') return  msg.style.display = 'block';
  
    // create task item
    const li = document.createElement('Li');
    if(li) {
        // Show Input field on default
        tasksArea.style.display = 'block';
      }
      // task.textContent = taskText;
    li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div id="icons">
    <i class="fa fa-check complete-btn"></i>
    <i class="fa fa-pencil edit-btn"></i>
    <i class="fa fa-trash-o delete-btn"></i>
    </div>
    `;
    // console.log(li.innerHTML)
    // console.log(task);
    taskList.appendChild(li);
    // console.log(taskList.appendChild(task));
    // clear input field after each task is added
        inputField.value = '';
        
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
       // show modal
       modal.style.display = 'block';
       console.log(modal);
       // hide form container
       appContainer.style.opacity = 0.2;
       // appContainer.style.display = 'none';
       // li.classList.toggle('completed');
       // console.log('normal');
       // const inputToEdit = icons.nextSibling();
       let textToEdit = li.querySelector('.task-text');
       // editInputField.setAttribute('placeholder', taskText.textContent);
       editInputField.value = textToEdit.textContent;
       let inputToEdit = textToEdit.textContent;
       addBtn2.addEventListener('click', () => {
         console.log(inputToEdit);
         textToEdit.textContent = editInputField.value;
         // clear input field
         console.log(textToEdit.textContent)
         editInputField.value = '';
         
         // Hide modal
         modal.style.display = 'none';
         // show form container
         // appContainer.style.display = 'block'
         appContainer.style.opacity = 1;
        })
        console.log(inputToEdit)
        // console.log(inputToEdit);
        const cancelModalBtn = modal.querySelector('#cancel-btn');
        // console.log(cancelModalBtn);
        cancelModalBtn.addEventListener('click', () => {
              appContainer.style.display = 'block';
              modal.style.display = 'none';
              appContainer.style.opacity = 1;
              console.log('clicking');
           })
       })
       
       /*************
        * PART 4: DELETE TASK
       **************/
      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
};

/*****************
 * PART 5: EVENT LISTENERS
 *****************/
addBtn.addEventListener('click', addTask);

cancelBtn.addEventListener('click', () => {
    // Hide msg
    msg.style.display = 'none';
})