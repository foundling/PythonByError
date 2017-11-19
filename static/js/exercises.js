const isAnswerBox = (el) => el.classList.contains('answer-box');
const inputBoxes = document.querySelectorAll('.answer-input');
const answerButtons = document.querySelectorAll('i.verify-answer');
const answers = document.querySelectorAll('span.answers');

const answerElements = zip(inputBoxes, answerButtons, answers);


function getAnswer() {
}

function showAnswers() {
}

function validateAnswer() {
}

function dispatchEvent(e) {
    console.log(e.target);
    //if ( isAnswerBox(e.target) )
}

function zip(...args) {

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

document.getElementById('exercises').addEventListener('click', dispatchEvent);
