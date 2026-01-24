const addTaskBtn = document.getElementById('add-task-btn');
const addTaskInput = document.getElementById('add-task-input');
const tasksArea = document.getElementById('tasks-area');
const footerPara = document.getElementById('footer-para');


addTaskBtn.addEventListener('click', () => {
  let taskText = addTaskInput.value.trim();
  if (!taskText) return;
  // console.log(taskText);
  const li = document.createElement('li');
  
  li.className = 'center-list center-lt'
  
  // <div class="center-list center-lt">
  li.innerHTML = `
  <div class="left">
  <button class='icon-check'>
  <i class="fa fa-check" aria-hidden="true"></i>
  </button>
  <span class="lt">${taskText}</span>
  </div>
  <div id='del-icon' class="right">
  <i class="fa fa-trash-o" aria-hidden="true"></i>
  </div>
  `;
  
  {/* </div> */}
  tasksArea.prepend(li);
    
    const deleteIcon = document.getElementById('del-icon');
    li.addEventListener('mouseover', () => {
      deleteIcon.style.display = 'block';
    })
    
    
    li.addEventListener('mouseout', () => {
      deleteIcon.style.display = 'none';
    })

    // delete task
    const iconToDelete = li.querySelector('.fa-trash-o');
    console.log(iconToDelete);
    iconToDelete.addEventListener('click', () => {
      console.log('deleted');
      li.remove();
    })

    // update date
   const footerPara = document.getElementById('footer-para');

   let lastUpdatedTime = new Date(); // initial page load time

 function updateFooterTime() {
  footerPara.textContent = timeAgo(lastUpdatedTime);
 }

 updateFooterTime();
 setInterval(updateFooterTime, 60000); // every minute

  function timeAgo(pastDate) {
  const now = new Date();
  const diffMs = now - pastDate; // difference in milliseconds

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);
  const months  = Math.floor(days / 30);
  const years   = Math.floor(days / 365);

  if (seconds < 60) return `Last updated ${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  if (minutes < 60) return `Last updated ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24)   return `Last updated ${hours} hour${hours !== 1 ? 's' : ''} ago`;
  if (days < 30)    return `Last updated ${days} day${days !== 1 ? 's' : ''} ago`;
  if (months < 12)  return `Last updated ${months} month${months !== 1 ? 's' : ''} ago`;

  return `Last updated ${years} year${years !== 1 ? 's' : ''} ago`;
}

  // Reset footer timer
  lastUpdatedTime = new Date();
  updateFooterTime();
  // check a task
  const checkIconContainer = document.querySelector('.icon-check');
  // console.log(checkIconContainer)
  const check = document.querySelector('.fa-check');
  // const taskTextLt = document.getElementById('lt');
  // console.log(check)
  tasksArea.addEventListener('click', (e) => {
    const iconBtn = e.target.closest('.icon-check');
    if (!iconBtn) return;
    
   const taskTextLt = li.querySelector('.lt');
  const liClosest = iconBtn.closest('li')
   iconBtn.classList.toggle('active');
    liClosest.classList.toggle('completed');
  })

    addTaskInput.value = '';
  })
