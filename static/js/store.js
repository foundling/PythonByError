function AppStore(APP_KEY) {
    this.APP_KEY = APP_KEY;
    this.store = (window.localStorage || localStorage);
}

AppStore.prototype.initStorage = function () {

    if (!this.store) 
       return console.warn('No local storage! Cannot save your progress :[ ...');

    if(this.store.getItem(this.APP_KEY))
        return;

    this.store[this.appKey] = { progress: 0 };

};

AppStore.prototype.get = function(property) {

    return property == null ? JSON.stringify(this.store[this.APP_KEY]) : JSON.stringify(this.store[this.APP_KEY].getItem(property));
}

AppStore.prototype.set = function(property, value) {
    const tempData = JSON.parse(this.store.getItem(property));
    tempData[property] = value;
    this.store.setItem(this.APP_KEY, JSON.stringify(tempData));
}
