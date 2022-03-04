// Global variables to select elements
const guessedLettersList = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

// practice word
const word = "magnolia";
// empty array to hold guessed letters
const guessedLetters = []; 

// Function to add placeholders for each letter
// - each letter needs to be replaced by a circle
// - all letters of the word into an empty array
// - loop through each letter and .push with a circle
// - join circles together to display in word-in-progress empty paragraph
// word is the parameter (placeholder for a value) being passed to the function
const placeholder = function (word) {
    // empty array holding letters in word
    const placeholderLetters = []; 
    // loop through every letter of selected word  
    // "letter" here is used to store the current element processed by the array   
    for (const letter of word) { 
        // log out each letter of selected word      
        console.log(letter);           
        // because the paragraph starts empty, use push (instead of replace) to 
        // replace the placeholder letters with the circle
        placeholderLetters.push("●");  
    }
    // join placeholder letter circles (word in proress) in empty paragraph
    wordInProgress.innerText = placeholderLetters.join("");
};  

// call the placeholder function for it to run
placeholder(word);

// Event listener for the guess button
// add click event to the button
// "e" is passed as a parameter, which will hold the event object to represent "event"
guessLetterButton.addEventListener("click", function (e) {
    // prevent default behavior of clicking a button, form submitting, and reloading page
    e.preventDefault();
    // empty text of the message element with an empty string
    message.innerText = "";
    // capture value of the user's input
    // letterInput is the global variable used to capture the document element (.letter)
    const guess = letterInput.value;
    // call validateInput function as the variable with the "guess" value
    // single letter is submitted
    const goodGuess = validateInput(guess);
    console.log(goodGuess); 
    // call makeGuess function to check whether it was a good guess
    if (goodGuess) {
        makeGuess(guess);
    }
    // empty letter input form
    letterInput.value = "";
});

// Function to validate user's input
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

// Function to capture input
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

// Function to show guessed letters
const showGuessedLetters = function () {
    // empty the unordered list where guessed letters will display
    guessedLettersList.innerHTML = "";
    const li = document.createElement("li");
    // display letters to guessed letters list
    li.innerText = letter;
    guessedLettersList.append(li);
};