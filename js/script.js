// Global variables
const guessedLettersList = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia"; //practice word
const guessedLetters = [];


// Function to add placeholders for each letter
// - each letter needs to be replaced by a circle
// - all letters of the word into an empty array
// - loop through each letter and .push with a cricle
// - join circles together to display in word-in-progress empty paragraph
const placeholder = function (word) {
    // empty array holding letters in word
    const placeholderLetters = []; 
    // loop through every letter of word    
    for (const letter of word) { 
        // log out letters      
        console.log(letter);           
        // because the paragraph is empty, use push (instead of replace)
        placeholderLetters.push("●");  
    }
    // join placeholder letter circles (word in proress) in empty paragraph
    wordInProgress.innerText = placeholderLetters.join("");
};  

// call the placeholder function
placeholder(word);

// Event listener for the button
guessLetterButton.addEventListener("click", function (e) {
    // prevent default behavior of clicking a button, form submitting, and reloading page
    e.preventDefault();
    // empty text of the message element
    message.innerText = "";
    // capture value of the user's input
    const guess = letterInput.value;
    // call validateInput function to ensure a single letter
    const goodGuess = validateInput(guess);
    console.log(goodGuess); 
    // call makeGuess function
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

//Function to validate user's input
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // is input empty?
        message.innerText = "Please enter a letter.";
        console.log("Please enter a letter.");
    } else if (input.length > 1) {
        // was more than one letter submitted?
        message.innerText = "Please only enter a single letter.";
        console.log("Please only enter a single letter.");
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
        console.log("Please enter a letter from A to Z.");
    } else {
        // correct - single letter submitted
        console.log("Woop!");
        return input;
    }
};

//Function to capture input
const makeGuess = function (guess) {
    //transform submitted letters to uppercase so they all match
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        //was letter already guessed?
        message.innerText = "You already guessed that letter. Try again.";
    } else {
        //correct guess pushed to guessedLetters array
        guessedLetters.push(guess);
        console.log("guessed letters:");
        console.log(guessedLetters);
    }
};