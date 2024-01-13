function stageTwo() {
    const num1 = 2;
    const num2 = Math.floor(Math.random() * 11); // Random number between 0 and 10

    document.getElementById('question').innerText = `What is ${num1} x ${num2}?`;
    document.getElementById('answer').value = ''; // Clear the previous answer
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);
    const num1 = 2;
    const num2 = parseInt(document.getElementById('question').innerText.split('x')[1], 10);
    const correctAnswer = num1 * num2;

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerText = 'Correct! Well done.';
    } else {
        document.getElementById('result').innerText = `Incorrect. The correct answer is ${correctAnswer}. Try again!`;
    }

    // Generate a new question after checking the answer
    stageTwo();
}