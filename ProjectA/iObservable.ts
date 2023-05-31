import { IObserver } from "./iObserver";
import { Article } from "./article";

export interface IObservable {
    addObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
    getArticles(): Article[];
}
