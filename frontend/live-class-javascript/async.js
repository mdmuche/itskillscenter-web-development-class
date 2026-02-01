// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback();
//   }, 2000);
// }

// const showData = () => {
//   console.log("Now showing data");
// };

// fetchData(showData);
// getUser(userId, function (user) {
//   getPosts(user.id, function (posts) {
//     getComments(posts[0], function (comments) {
//       console.log(comments);
//     });
//   });
// });
// const promise = new Promise((res, rej) => {
//   // async operation
//   if (success) res(result);
//   if (failed) res(error);
// });

// const fetchData = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const success = false;
//       if(success){
//         res({isSuccessful: true, message: 'Data loaded'});
//       } else {
//         rej({isSuccessful: false, message: 'Error loading date'})
//       }
//     }, 2000)
//   })
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if(success) {
//         resolve('Data resolved');
//       } else {
//         reject('Error data not resolved');
//       }   
//     }, 2000);
//   })
// }

// const showData = async () => {
//   console.log('fetching...');
//   const data = await fetchData();
//   console.log(data);
// }

// showData();

const apiUrl = 'https://jsonplaceholder.typicode.com/';
const cards = document.getElementById('cards');
const showBtn = document.getElementById('show-btn')
const hideBtn = document.getElementById('hide-btn')
const pageButton = document.querySelectorAll('#pages button')
// console.log(pageButton.textContent === '1');
// const btnArr = [1, 2, 3, 4, 5];

// // console.log(pageButton);

// pageButton.forEach((btn, i)  => {
//   document.querySelector('#pages button').addEventListener('click', () => {
//   const page = pageButton.textContent
//       console.log(page);
//     })
// })

let link = document.getElementsByClassName('link');
let li = document.querySelectorAll('li');
let prevBtn = document.getElementById('btn1')
let nextBtn = document.getElementById('btn2')

let currentValue = 1;

// const activeLink = () => {
//   for(const l of link) {
//     l.classList.remove();
//   }
// }

// Array.from(li).forEach((l) => {
//   console.log('clicked', l.textContent);
// })


// const fetchPosts = () => {
  //   fetch(apiUrl + 'comments')
//     .then(res => res.json())
//     .then(data => data.slice(0, 25).map((d) => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML += 
//         `
//         <h1>${d.name.slice(0, 10)}</h1>
//         <h3>${d.email}</h3>
//         <p>${d.body.slice(0, 50)}...</p>
//         `
//         cards.appendChild(card);
//         console.log(cards);
//     }))
//     .catch(err => console.error(err.message))
//     .finally(console.log('fetching data'));
// }

// fetchPosts()

// let firstParam = 0;
// let secondParam = 10;
// console.log(firstParam , secondParam);
// firstParam = secondParam;
// secondParam = secondParam + 10;
// console.log(firstParam , secondParam);
// firstParam = secondParam;
// secondParam = secondParam + 10;
// console.log(firstParam , secondParam);



let step = 6;
let page = 1;
let start = 0;
const fetchBlog = (end) => {
  cards.style.display = 'flex';
  // clears old blogs
  cards.innerHTML = '';
  fetch(apiUrl + 'posts')
  .then(res => res.json())
  .then(data => {
    
    // for(let start = 0; start < 50; start += step) {
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
      // console.log(cards);
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
const pageEnd = (page) => {
  start = (page - 1) * step;
  let end = start + step;
   return end;
}

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

//? .then .catch
// const fetchPhotos = () => {
//   fetch(apiUrl + 'photos')
//   .then(res => res.json())
//   .then(data => data.slice(0, 5).map((d) => {
//     console.log(d.url);
//     return document.write(`<h1>${d.name}</h1>
//       <h3>${d.title}</h3>
//       <img class="img-con" src=${d.thumbnailUrl} alt=${d.title}>`
//     )
//   }))
//   .catch(err => console.error(err.message))
//   .finally(console.log('fetching data'));
// }

//? async await
const fetchPhotos = async () => {
  try {
   const response = await fetch(apiUrl + 'photos')
   const data =  await response.json();
    data.slice(0, 5).map((d) => {
      console.log(d.thumbnailUrl);
      return document.write(`<h1>${d.name}</h1>
        <h3>${d.title}</h3>
        <img class="img-con" src=${d.thumbnailUrl} alt=${d.title}>`
      )
    })
    
  } catch (err) {
    console.error(err.message)
  } finally{
    console.log('fetching data')
  };
}

// fetchPhotos();

// const forPost = [
//   {
//     id: 1,
//     userId: '1233eee',
//     body: 'hello, I am resuming my new work at itskillscenter',
//     images: ['img1.jpg', 'img2.jpg'],
//     comments: [
//       {
//         id: 1,
//         userId: '2345eeee',
//         comment: 'Goodluck. clock it!',
//         replies: [
//           {
//             id: 1, userId: '1233eee', reply: 'thanks alot my wife'
//           },
//           {
//             id: 2, userId: '6788eee', reply: 'baba don start work oh'
//           },
//         ]
//       },
//       {
//         id: 2,
//         userId: '8788eeee',
//         comment: 'senior man based on base!',
//         replies: [
//           {
//             id: 1, userId: '1233eee', reply: 'thanks alot bro'
//           },
//           {
//             id: 2, userId: '3456eee', reply: 'die it rugged you'
//           },
//         ]
//       },
//       {
//         id: 1,
//         userId: '9845eeee',
//         comment: 'show me way nah babanla',
//         replies: [
//           {
//             id: 1, userId: '1233eee', reply: 'omo nah God run am oh!'
//           },
//           {
//             id: 2, userId: '1298eee', reply: 'you wey dae ball'
//           },
//         ]
//       }
//     ]
//   }
// ]