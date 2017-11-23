const exercisesContainer = document.getElementById('exercises');
const inputs = document.querySelectorAll('.answer-input');
const validateButtons = document.querySelectorAll('.validate-answer');
const answers = [].map.call(document.querySelectorAll('.answers'), el => el.innerHTML);
const hints = document.querySelectorAll('.hints');
let hintModal = document.querySelector('#hint-modal');

let exerciseComponents;

if (exercisesContainer) {
    exerciseComponents = zip(inputs, validateButtons, answers, hints);
    hintModal.addEventListener('click', function(e) {
        hideHint(hintModal.parentNode);
    });
    validateButtons.forEach(function(button) {
        button.addEventListener('click', validationHandler);
    });
}

function validationHandler(e) {

    const el = e.target;
    let [ input, validateButtons, answersJSON, hints ] =  exerciseComponents[el.id];  
    let answers = JSON.parse(answersJSON);
    let exerciseContainer = input.parentNode; 
    let guess = input.value;     
    let isValid = validateGuess(guess, answers);
    let guessCount = parseInt(el.dataset.guessCount); 

    console.log(guess, answers);
    if (isValid) {

        markCorrect(el);
        hideHint()
        setGuessCount(el, 0);

    } else {

        markIncorrect(el);
        el.dataset.guessCount = ++guessCount;

        if (guessCount > 2) {
            // wrong parent. want container of input or answer etc.
            showHint(exerciseContainer, 'blah blah blah');
        }

    }

}

function markIncorrect(el) {

    if (el.classList.contains('correct'))
        el.classList.remove('correct');

    if (!el.classList.contains('incorrect'))
        el.classList.add('incorrect');

}

function markCorrect(el) {
    if (el.classList.contains('incorrect'))
        el.classList.remove('incorrect');

    if (!el.classList.contains('correct'))
        el.classList.add('correct');
}

function updateProgress() {
    // wrap this all in IIFE, pass in store, update store 
}

function notifyUser() {
}

function getGuess(input) {
    return input.value;
}

function getAnswer(el) {
    // returns an array of answers as strings
    return JSON.parse(el.innerHTML).map(guess => guess.trim('\n'));
}

function showAnswers() {
}

function singleToDouble(s) {
    // make this more general.  won't cut it for anything with multiple quotes.
    return s.replace("'",'"').replace("'",'"');
}

function validateGuess(guess, answers) {
    return answers.includes(singleToDouble(guess));
}

function zip(...args) {

    // zip builds [[input, validateButton, answers] X num questions]

    if (!args.every(a => a.length))
       throw new Error('Each argument to zip should be a sequence');

    const shortest = args.reduce(function(o, item) {
        return o.length < item.length ? o : item;
    }, args[0]);

    const zipped = [].map.call(shortest, function(value, index) {
        return args.map(arg => arg[index]);
    });

    return zipped;
}

function setGuessCount(el, n) {
    el.dataset.guessCount = n;
} 

function showHint(parentEl, message) {
    // add replace modal inner with message
    // add modal to parent as child
    hintModal.innerHTML = message;
    parentEl.appendChild(hintModal);
    hintModal.classList.remove('hidden');
}

function hideHint() {
    hintModal.classList.remove('hidden');
    hintModal = hintModal.parentNode.removeChild(hintModal);
}
