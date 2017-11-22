const exercisesContainer = document.getElementById('exercises');
const inputs = document.querySelectorAll('.answer-input');
const validateButtons = document.querySelectorAll('.validate-answer');
const answers = document.querySelectorAll('.answers');

// NOTE: add notification box here to give user feedback when they they answer
if (exercisesContainer) {
    exerciseComponents = zip(inputs, validateButtons, answers);

    exercisesContainer.addEventListener('click', function(e) {

        const el = e.target;
        let input;
        let answer;
        let isValid;

        if (el.className.includes('validate-answer')) {
            input = exerciseComponents[el.id][0].value;     
            answer = getAnswer(exerciseComponents[el.id][2]);
            isValid = validateAnswer(input, answer);
            if(isValid) {
                markCorrect(el);
            } else {
                markIncorrect(el)
            }

        }

    });
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

function validateAnswer(input, answer) {
    return answer.includes(singleToDouble(input));
}

function dispatchEvent(e) {
    console.log(e.target.classList);
    //if ( isAnswerBox(e.target) )
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
