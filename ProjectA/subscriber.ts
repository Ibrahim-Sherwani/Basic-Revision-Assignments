import { IObserver } from "./iObserver";
import { IObservable } from "./iObservable";
import { Article } from "./article";

export class Subscriber implements IObserver {
    private observable: IObservable;
    private subscribed: Boolean;

    constructor(observable: IObservable) {
        this.observable = observable;
        this.observable.addObserver(this);
        this.subscribed = true
    }
    ["constructor"](observable: IObservable): void {
        throw new Error("Method not implemented.");
    }

    update(): void {
        if (this.subscribed) {
            const articles = this.observable.getArticles();
            console.log("\nReceived an update:");
            for (const article of articles) {
                console.log(`Title: ${article.title}, Text: ${article.text}`);
            }
            console.log('\n');
        }
        else {
            console.log('User not Subscribed to any News Channel')
        }
    }

    getArticles(): void {
        if (this.subscribed) {
            const articles = this.observable.getArticles();
            console.log("\n Available Articles:");
            for (const article of articles) {
                console.log(`Title: ${article.title}, Text: ${article.text}`);
            }
            console.log('\n');
        }
        else {
            console.log('User not Subscribed to any News Channel')
        }
    }

    unSubscribe(): void {
        if (this.subscribed) {
            this.observable.removeObserver(this);
            this.subscribed = false
        } else {
            console.log('User not Subscribed')
        }
    }

    subscribe(observable: IObservable): void {
        if (this.subscribed) {
            console.log('Only one subscription allowed at a time.')
        }
        else {
            this.observable = observable;
            this.observable.addObserver(this);
        }
    }
}
