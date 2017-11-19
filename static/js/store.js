if (!window.localStorage)
    console.log('No local storage! Cannot save your progress :[ ...');

const store = window.localStorage;
const APP_KEY = 'python_book';

function initStorage() {
    if (store[APP_KEY])
        return;

    store[APP_KEY] = { progress: 0 };
}

function get(propName) {
    /* return store or store value depending on whether propName is passed in */ 
    const data = store[APP_KEY];
    return propName ? data[propName] : data; 
}

function set(propName, value) {
    const data = get(); 
    data[propName] = value;
}
