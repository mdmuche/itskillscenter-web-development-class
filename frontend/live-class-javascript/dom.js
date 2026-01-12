let heading = document.getElementById('heading');

heading.style.backgroundColor = 'red';

const paras = document.querySelectorAll('p');
const para = document.getElementsByClassName('para');
console.log(para.length);
paras.forEach(para => para.style.color = 'blue');

for(let i = 0; i < para.length; i++){
    if(para[i].addEventListener('click', () => {
        para[i].textContent = 'i have been clicked'
    }));
}

paras[0].innerHTML = '<h2>I am the new Heading<h2>'