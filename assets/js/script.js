document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                runGame();
            }
        });
    }

    runGame();

});

let buttonValue = 0;
let correctCount = 0;
let incorrectCount = 0;

const allValues = document.querySelectorAll('.stage-button')
allValues.forEach(ab => {
    ab.addEventListener('click', (event) => {
        buttonValue = event.target.value   
     })
})

function runGame() {
    const num1 = buttonValue;
    const num2 = Math.floor(Math.random() * 11); // Random number between 0 and 10

    document.getElementById('question').innerText = `What is ${num1} x ${num2}?`;
    document.getElementById('answer').value = ''; // Clear the previous answer
    updateScore();
}


function checkAnswer() {
            const userAnswer = parseInt(document.getElementById('answer').value, 10);
            const num1 = buttonValue;
            const num2 = parseInt(document.getElementById('question').innerText.split('x')[1], 10);
            const correctAnswer = num1 * num2;

            if( document.getElementById('answer').value === '' ){
                alert('Answer can not be empty!');
            } else if (userAnswer === correctAnswer) {
                document.getElementById('result').innerText = 'Correct! Well done.';
                correctCount++;
            } else {
                document.getElementById('result').innerText = `Incorrect. The correct answer is ${correctAnswer}. Try again!`;
                incorrectCount++;
            }

            runGame()
        };

function updateScore() {
    document.getElementById('score').innerText = `${correctCount} (Correct) / ${incorrectCount} (Incorrect)`;
}

function resetScore() {
    correctCount = 0;
    incorrectCount = 0;
    updateScore();
}