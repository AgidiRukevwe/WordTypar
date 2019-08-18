

// importing the words array
import list from './list2.js';

//Available levels Object
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
}

let currentLevel = levels.medium;


//Dom elements
let time = currentLevel +1;
let score = 0;
let isPlaying;
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#currentWord");
const seconds = document.querySelector("#sec");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const message = document.querySelector("#message");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const body = document.querySelector("body");


const init = ()=>{
    //Load word from array
    showWord(list);
//start matching word input
wordInput.addEventListener('input', statMatch);
wordInput.focus;  


seconds.innerHTML = currentLevel;

    //call countdown everysec
    setInterval(countdown, 1000)

    //check game status
    setInterval(checkStatus, 50);

    setTimeout(preload, 2000);
}

window.addEventListener('load', init);


const statMatch = ()=>{
    if(matchWords()){
        isPlaying =true;
        time = currentLevel +1;
        showWord(list);
        wordInput.value = '';
        score++
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}

// match currentWord to word input
const matchWords = ()=>{
    if(wordInput.value===currentWord.innerHTML){

        //this is the array of congratulatory message
        const congratulations = ['nice', 'wow!', 'Damn', 'Keep going', 'almost there', 'sweet'];
        let congrat = Math.floor(Math.random() * congratulations.length);
        message.innerHTML = congratulations[congrat];
        return true
    }else{

        //this is the array of error message
        const correction = ["check again", "something is not right", 'there is something missing', 'You have an error']
        message.innerHTML = correction[Math.floor(Math.random() * correction.length)];
        return false;
    }
}

//show new word
const showWord = ()=>{
    const randInd = Math.floor(Math.random() * list.length);

    //output random words
    currentWord.innerHTML = list[randInd];

}

//countdown timer
const countdown = ()=>{
    // make sure time does not run out
    if (time>0) {
    //decrease
    time--
    }else if (time===0) {
      isPlaying = false;  
    }

    //show time
    timeDisplay.innerHTML = time;
    seconds.innerHTML =time;

}
// check game status
const checkStatus = ()=>{
    if(!isPlaying && time ===0){
        
        message.innerHTML = "Game Over";
        message.style.color = 'red';
        body.style.backgroundColor = 'red';
        score = -1;
    }else if(score > 10 && score < 20){
        body.style.backgroundColor = 'skyblue';
    } else if(score >= 20){
        body.style.backgroundColor = '#BB56A0';
    }
    else if(score > 0 && time ==0){
        body.style.backgroundColor = 'red';
        message.innerHTML = 'You did a great job'
    }
    else{
        message.style.color = 'white';
        body.style.backgroundColor = 'lavender';
    }
}

const preload = ()=>{
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloaderFade');
        // document.querySelector('#author').style.transitionDelay = '5000ms';
}

//Handling the Level buttons clicked
const easyClick=()=>{
    currentLevel = levels.easy;
}
const mediumClick=()=>{
    currentLevel = levels.medium;
}
const hardClick=()=>{
    currentLevel = levels.hard;
    console.log('Hard Clicked')
}
easy.addEventListener('click', easyClick)

medium.addEventListener('click', mediumClick)

hard.addEventListener('click', hardClick)

///This dom elements are for the dom manipulation
const burger = document.querySelector('#burgerClosed');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const levelButton = document.querySelector('#level')
const levelClass = document.querySelector('.levels')

//opening and closing the nav bar
burger.addEventListener('click', ()=>{
    if(nav.className == 'closed'){
        nav.className = 'open';
        burger.className = 'burgerOpen';
        ul.classList.add('secUl');

    }else{
        nav.className = 'closed';
        burger.className = 'burger'
        ul.classList.remove('secUl')

    }
})

//this is to open and close the nav bar
 levelButton.addEventListener('click', ()=>{
     if(levelClass.className == 'levels'){
         levelClass.className = 'levelOpen';
     }else{
        levelClass.className = 'levels';
     }
 })

 //this is the preloader section
// window.addEventListener('load', setTimeout(()=>{
//     const preloader = document.querySelector('.preloader');
//     preloader.classList.add('preloaderFade')
// }, 5000))