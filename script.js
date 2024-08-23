let score = 0;

function startGame() {
    score = 0;
    fetchQuestion();
}

function fetchQuestion() {
    if (questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        displayQuestion(question);
    } else {
        endGame();
    }
}

function displayQuestion(question) {
    // Display the question and options (this assumes you have some HTML structure)
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;

    // Display options
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.onclick = () => checkAnswer(option.textContent, question.answer);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        fetchQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    alert(`Game over! Your final score is ${score}.`);
    score = 0
}

// Start the game when the page loads
startGame();
