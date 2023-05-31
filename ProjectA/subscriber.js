"use strict";
exports.__esModule = true;
var Subscriber = /** @class */ (function () {
    function Subscriber(observable) {
        this.observable = observable;
        this.observable.addObserver(this);
        this.subscribed = true;
    }
    Subscriber.prototype["constructor"] = function (observable) {
        throw new Error("Method not implemented.");
    };
    Subscriber.prototype.update = function () {
        if (this.subscribed) {
            var articles = this.observable.getArticles();
            console.log("\nReceived an update:");
            for (var _i = 0, articles_1 = articles; _i < articles_1.length; _i++) {
                var article = articles_1[_i];
                console.log("Title: " + article.title + ", Text: " + article.text);
            }
            console.log('\n');
        }
        else {
            console.log('User not Subscribed to any News Channel');
        }
    };
    Subscriber.prototype.getArticles = function () {
        if (this.subscribed) {
            var articles = this.observable.getArticles();
            console.log("\n Available Articles:");
            for (var _i = 0, articles_2 = articles; _i < articles_2.length; _i++) {
                var article = articles_2[_i];
                console.log("Title: " + article.title + ", Text: " + article.text);
            }
            console.log('\n');
        }
        else {
            console.log('User not Subscribed to any News Channel');
        }
    };
    Subscriber.prototype.unSubscribe = function () {
        if (this.subscribed) {
            this.observable.removeObserver(this);
            this.subscribed = false;
        }
        else {
            console.log('User not Subscribed');
        }
    };
    Subscriber.prototype.subscribe = function (observable) {
        if (this.subscribed) {
            console.log('Only one subscription allowed at a time.');
        }
        else {
            this.observable = observable;
            this.observable.addObserver(this);
        }
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
