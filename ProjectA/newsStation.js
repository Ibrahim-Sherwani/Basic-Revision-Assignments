"use strict";
exports.__esModule = true;
var NewsStation = /** @class */ (function () {
    function NewsStation() {
        this.observers = [];
        this.articles = [];
    }
    NewsStation.prototype.addObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index === -1) {
            console.log('A User has Subscribed');
            this.observers.push(observer);
        }
        else {
            console.log('User is already Subscribed');
        }
    };
    NewsStation.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
            console.log('\n A subscriber has unSubscribed \n');
        }
    };
    NewsStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update();
        }
    };
    NewsStation.prototype.getArticles = function () {
        return this.articles;
    };
    NewsStation.prototype.addArticle = function (article) {
        this.articles.push(article);
        this.notifyObservers();
    };
    return NewsStation;
}());
exports.NewsStation = NewsStation;
