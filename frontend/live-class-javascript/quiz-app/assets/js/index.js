const container = document.getElementById('container');
const nextBtn = document.getElementById('next-btn');
const scoreBtn = document.getElementById('score');

const questions = [
    {
        question: 'What is the highest Mountain?',
        options: [
            'Everest', 'Kilimanjaro', 'ararat', 'kbi'
        ],
        correctAnswer: 0
    },

    {
        question: 'what is the chemical symbol for gold',
        options: [
            'Ig', 'Au', 'Na', 'Cl'
        ],
        correctAnswer: 1
    },

    {
        question: 'when did buhari die',
        options: [
            '2005', '2024', '1992', '2025'
        ],
        correctAnswer: 3
    },

    {
        question: 'who said wow you are 21 and you look so healthy and strong',
        options: [
            'egungun', 'broda mike', 'geh geh', 'speed darlington'
        ],
        correctAnswer: 0
    },

    {
        question: 'where is eket located',
        options: [
            'rivers', 'akwa ibom', 'bayelsa', 'cross river'
        ],
        correctAnswer: 1
    },
]

// map through the questions array to display to UI
let currentIndex = 0;
let score = 0;
const displayQuiz = () => {
    container.innerHTML = `
        <div>
                <div class="questions">
    
                <span>Questions ${currentIndex + 1}.</span>
                <h3>${questions[currentIndex].question}?</h3>
                <div class="options">
                    <ol>
                        ${questions[currentIndex].options
                            .map((option, index) => {
                              return `<li class="option" id=${option} key=${index} ><input type="radio" name="option" id="option_${index + 1}" value=${index}> ${option}</li>`
                             })
                            .join('')
                        }
                    </ol>
                </div>
            </div>
            </div>
    `
}


displayQuiz()

// const btn = document.querySelector('button');
nextBtn.addEventListener('click', () => {
     const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
      alert('Please select an answer');
      // nextBtn.disabled = true;
      return;
    }

    const userAnswer = Number(selected.value);
    // console.log(userAnswer)
    if(userAnswer === questions[currentIndex].correctAnswer) {
       score++;
       console.log(score);
    }
    
    if(currentIndex < questions.length - 1) {
        currentIndex++;
        displayQuiz();
        return;
    }
    
    nextBtn.disabled = true;
    nextBtn.style.cursor = 'not-allowed';
    nextBtn.textContent = 'Finished';
    container.innerHTML = `<h2>Quiz Completed 🎉</h2>`
    scoreBtn.style.display = 'block';
    scoreBtn.textContent += score;
})