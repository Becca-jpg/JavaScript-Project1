window.addEventListener('load', init)

//Globals

//Levels 
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//Change Level 
const currentLevel = levels.medium;


let time = currentLevel;
let score = 0;
let isPlaying;

//Dom Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'river',
    'lucky',
    'runaway',
    'pizza',
    'pieces',
    'backpack',
    'javascript',
    'development',
    'lightning',
    'sticky',
    'dragon',
    'kingdom',
    'website',
    'establishment',
    'cautious',
    'clumsy',
    'number',
    'sparkling',
    'encouraging',
    'afford',
    'separate',
    'current',
    'inexpensive',
    'picture',
    'carriage',
    'steadfast',
    'mundane',
    'interrupt',
    'borrow',
    'automatic',
    'material',
    'sidewalk',
    'reaction',
    'marvelous',
    'glistening',
    'telephone',
    'stop',
    'thoughtful',
    'laugh',
    'texture',
    'funny',
    'fence',
    'powerful',
    'peck',
    'license',
    'scratch',
    'trade',
    'smell',
    'van',
    'fly',
    'examine',
    'acceptable',
    'communicate',
    'walk',
    'crowd',
    'snail',
    'puzzling',
    'wilderness',
    'frighten',
    'tomatoes',
    'disappear',
    'afterthought'
];

//Initialize Game 
function init() {
    //Seconds 
    seconds.innerHTML = currentLevel;
    // Load Word from Array 
    showWord(words);
    //Start Input Event 
    wordInput.addEventListener('input', startMatch);
    //Countdown
    setInterval(countdown, 1000);
    //Check Status 
    setInterval(checkStatus, 50);
}

//Start Match 
function startMatch() {
   if (matchWords()) {
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
   }

   if (score === -1) {
       scoreDisplay.innerHTML = 0;
   } else {
        scoreDisplay.innerHTML = score;
   }
}

//Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
   } else {
       message.innerHTML = '';
       return false;
   }
}

//Pick & Show Random Word 
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

//Countdown Timer 
function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    } 

    timeDisplay.innerHTML = time;
}

//Check Status 
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}