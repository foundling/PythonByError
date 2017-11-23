function AppStore(APP_KEY) {
    this.APP_KEY = APP_KEY;
    this.store = (window.localStorage || localStorage);
    this.initStorage();
}

AppStore.prototype.initStorage = function () {

    if (!this.store) 
       return console.warn('No local storage! Cannot save your progress :[ ...');

    if(this.store.getItem(this.APP_KEY))
        return;

    this.set('progress', 0);

};

AppStore.prototype.get = function(property) {
    const tempData = JSON.parse(this.store.getItem(this.APP_KEY)) || {};
    return property == null ? tempData : tempData[property];
}

AppStore.prototype.set = function(property, value) {
    const tempData = JSON.parse(this.store.getItem(property)) || {};
    tempData[property] = value;
    this.store.setItem(this.APP_KEY, JSON.stringify(tempData));
}

AppStore.prototype.deleteApp = function() {
    this.store.removeItem(this.APP_KEY);
}
