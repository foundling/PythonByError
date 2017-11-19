const isAnswerBox = (el) => el.classList.contains('answer-box');

function getAnswer() {
}

function showAnswers() {
}

function validateAnswer() {
}

function dispatchEvent(e) {
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

document.addEventListener('click', dispatchEvent);
