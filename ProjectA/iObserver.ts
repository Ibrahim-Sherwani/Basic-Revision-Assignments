import { IObservable } from "./iObservable";

export interface IObserver {
    update(): void;
    constructor(observable: IObservable): void;
}
