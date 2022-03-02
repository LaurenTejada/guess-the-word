// Global variables
const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetterInput = document.querySelector(".guess-form");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const spanRemainingGuesses = document.querySelector(".span");
const messagesDisplay = document.querySelector(".message");
const buttonHiddenPlayAgain = document.querySelector(".play-again");
const word = "magnolia"; //practice word

// Function to add placeholders for each letter
// - each letter needs to be replaced by a circle
// - all letters of the word into an empty array
// - loop through each letter and push with a cricle
// - join circles together to display in word in progress empty paragraph
const placeholder = function() {
    //empty array holding letters in word
    const placeholderLetters = []; 

    //loop through every letter of word    
    for (const letter of word) { 
        //log out letters      
        console.log(letter);           
        //because the paragraph is empty, use push (instead of replace)
        placeholderLetters.push("●");  
    }
    // join placeholder letter circles (word in proress) in empty paragraph
    wordInProgress.innerText = placeholderLetters.join("");
};  

// call the placeholder function
placeholder(word);
