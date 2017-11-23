function AppStore(APP_KEY, data) {
    this.APP_KEY = APP_KEY;
    this.store = (window.localStorage || localStorage);
    this.initStorage();
}

AppStore.prototype.initStorage = function (data) {

    if (!this.store) 
       return console.warn('No local storage! Cannot save your progress :[ ...');

    if(this.store.getItem(this.APP_KEY))
        return;

    this.set(this.APP_KEY, data);

};

AppStore.prototype.get = function() {
    return JSON.parse(this.store.getItem(this.APP_KEY)) || {};
}

AppStore.prototype.set = function(property, value) {
    let tempData = this.get();
    tempData[property] = value;

    this.store.setItem(this.APP_KEY, JSON.stringify(tempData));
}

AppStore.prototype.deleteApp = function() {
    this.store.removeItem(this.APP_KEY);
}

let appStore = new AppStore('python-book', {name: 'hi'});

class AppStore {

    constructor(APP_KEY, data) {
        this._store = window.localStorage || localStorage;
        this.progress = 0;
        this.chapters = {
            0: { problems: [false,false] },
            1: { problems: [false,false] },
            2: { problems: [false,false] },
            3: { problems: [false,false] },
            4: { problems: [false,false] },
        };
        this._store.setItem(APP_KEY, data);
    }

    get progress() {

    }

    set progress() {
    }
}
