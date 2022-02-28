let startQuiz = document.querySelector('#start_quiz')
let submitAnswer = document.querySelector('#submit_answer')
let participantAnswer = document.querySelector('#participantAnswer')
let correctCounter = document.querySelector('#correct_counter')
let incorrectCounter = document.querySelector('#incorrect_counter')
let randomNum = 0
let goodCounter = 0
let badCounter = 0

// Function to create new <p> text
function makeNewGuess() {
    let newQuestion = document.createElement("p")
    newQuestion.innerHTML = "Guess the random number: "
    let allQuestions = document.querySelector('#guess_number')
    allQuestions.appendChild(newQuestion)
}

// Creating random number, called on event listener
function makeNewNumber() {
    return Math.ceil(Math.random() * 10)
}

// Increasing correct guesses
function increaseCounter() {
    goodCounter++
    let newCounter = document.createElement("h1")
    newCounter.innerHTML = goodCounter
    correctCounter.appendChild(newCounter)
    correctCounter.style.backgroundColor = 'lightgreen'
}

// Increasing incorrect guesses
function increaseBadCounter() {
    badCounter++
    let newIncorrectCounter = document.createElement("h1")
    newIncorrectCounter.innerHTML = badCounter
    incorrectCounter.appendChild(newIncorrectCounter)
    incorrectCounter.style.backgroundColor = 'red'
}

//Capturing user input to start the quiz
startQuiz.addEventListener('click', (e) => {
    e.preventDefault
    startQuiz.remove();

    makeNewGuess()
    randomNum = makeNewNumber()
    console.log(randomNum)

    submitAnswer.addEventListener('click', (e) => {
        e.preventDefault
        console.log(randomNum)

        if (participantAnswer.value == randomNum) {
            console.log("This works, and the guess is correct")
            randomNum = makeNewNumber()
            makeNewGuess()
            increaseCounter()
            // console.log(participantAnswer.value)
            console.log(randomNum)
        } else {
            console.log("This works, and the guess is incorrect")
            randomNum = makeNewNumber()
            makeNewGuess()
            increaseBadCounter()
            // console.log(participantAnswer.value)
            console.log(randomNum)
        }

    })

})

