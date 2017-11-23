const exercisesContainer = document.getElementById('exercises');
const inputs = document.querySelectorAll('.answer-input');
const validateButtons = document.querySelectorAll('.validate-answer');
const answers = [].map.call(document.querySelectorAll('.answers'), el => el.innerHTML);
const hints = [].map.call(document.querySelectorAll('.hints'), el => el.innerHTML);
const chapterNumber = document.querySelector('.page').dataset.chapterNumber;
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
    let [ input, validateButtons, answersJSON, hintsJSON ] =  exerciseComponents[el.id];  
    let answers = JSON.parse(answersJSON);
    let hints = JSON.parse(hintsJSON);
    let exerciseContainer = input.parentNode; 
    let guess = input.value;     
    let isValid = validateGuess(guess, answers);
    console.log(isValid, answers);
    let guessCount = parseInt(el.dataset.guessCount); 
    let problemNumber = document.querySelector('.exercise').dataset.problemNumber;

    // putting hintModal into dom initially.
    exerciseContainer.appendChild(hintModal);

    if (isValid) {

        markCorrect(el);
        if (!hintModal.classList.contains('hidden')) {
            hideHint()
        }
        setGuessCount(el, 0);
        updateProgress(problemNumber, chapterNumber);

    } else {

        markIncorrect(el);
        el.dataset.guessCount = ++guessCount;

        if (guessCount > 2) {
            // wrong parent. want container of input or answer etc.
            showHint(exerciseContainer, hints);
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

    if (!el.classList.contains('correct')) {
        el.classList.add('correct');
        el.parentNode.querySelector('input.answer-input').classList.add('answer-correct');
    }
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
    return s.replace(/"/g, "'");
}

function singleToDouble(s) {
    return s.replace(/'/g, '"');
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

function showHint(parentEl, hints) {
    // add replace modal inner with message
    // add modal to parent as child
    const text = hints.map(hint => '<li>' + hint + '</li>');
    hintModal.innerHTML = `<ul>${text.join('')}</ul>`;
    parentEl.appendChild(hintModal);
    hintModal.classList.remove('hidden');
}

function updateProgress(problem, chapterNumber) {
    let progress = appStore.get('progress'); 
    progress += 1;
    appStore.set('progress', progress);
}
function hideHint() {
    hintModal.classList.remove('hidden');
    hintModal = hintModal.parentNode.removeChild(hintModal);
}
