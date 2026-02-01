let link = document.getElementsByClassName('link');
let li = document.querySelectorAll('li');
let prevBtn = document.getElementById('btn1')
let nextBtn = document.getElementById('btn2')
const cards = document.getElementById('cards');
const showBtn = document.getElementById('show-btn')
const hideBtn = document.getElementById('hide-btn')
const pageButton = document.querySelectorAll('#pages button')

const apiUrl = 'https://jsonplaceholder.typicode.com/';
let currentValue = 1;

let step = 6;
let page = 1;
let start = 0;
// fetch blog display
const fetchBlog = (end) => {
  cards.style.display = 'flex';

  // clears old blogs
  cards.innerHTML = '';
  fetch(apiUrl + 'posts')
  .then(res => res.json())
  .then(data => {
    
    data.slice(start, end).forEach((d) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = 
      `
      <h2>${d.title.slice(0, 10)}</h2>
      <p>${d.body.slice(0, 50)}...</p>
      <a href="#">Read More</a>
      `
      cards.appendChild(card);
    })
  })
  .catch(err => console.error(err.message))
  .finally(console.log('fetching data'));
}

// show the first page of blogs
showBtn.addEventListener('click', () => {
  fetchBlog(pageEnd(1));
})

// show next page of blogs
// 1. get the page end of blogs array
const pageEnd = (page) => {
  start = (page - 1) * step;
  let end = start + step;
   return end;
}

// step 2. display by rerendering
for(let i = 0; i < li.length; i++){
  li[i].addEventListener('click', (e) => {
    // remove active class
    for(let j = 0; j < li.length; j++){
      li[j].classList.remove('active')
      
      // add active class
      e.target.classList.add('active');
      currentValue = e.target.value;
    }
    const page = Number(e.target.value)

    // render blog with specific page number
    fetchBlog(pageEnd(page));
  })
}

// hide blogs
hideBtn.addEventListener('click', () => {
  cards.style.display = 'none';
})
  
// show previous blogs
  prevBtn.addEventListener('click', (e) => {
    if(currentValue > 1) {
      for(const l of link) {
        l.classList.remove('active');
      }
      currentValue--;
      link[currentValue - 1].classList.add('active');

      fetchBlog(pageEnd(currentValue));
    }
  })
  
  // show next blogs
  nextBtn.addEventListener('click', (e) => {
    if(currentValue < 6) {
      for(const l of link) {
        l.classList.remove('active');
      }
      currentValue++;
     link[currentValue - 1].classList.add('active');

     fetchBlog(pageEnd(currentValue));
}
})