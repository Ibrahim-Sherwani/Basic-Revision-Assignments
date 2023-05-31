import { IObservable } from "./iObservable";
import { IObserver } from "./iObserver";
import { Article } from "./article";

export class NewsStation implements IObservable {
    private observers: IObserver[] = [];
    private articles: Article[] = [];

    addObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            console.log('A User has Subscribed')
            this.observers.push(observer);
        }
        else {
            console.log('User is already Subscribed')
        }
    }

    removeObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
            console.log('\n A subscriber has unSubscribed \n')
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    getArticles(): Article[] {
        return this.articles;
    }

    addArticle(article: Article): void {
        this.articles.push(article);
        this.notifyObservers();
    }
}
