import { Car } from "./car";

export class CarFactory {
    private static instance: CarFactory;
    private cars: Car[] = [];

    private constructor() { }

    public static getInstance(): CarFactory {
        if (!CarFactory.instance) {
            CarFactory.instance = new CarFactory();
        }
        return CarFactory.instance;
    }

    public createCar(
        seats?: string,
        engine?: string,
        doors?: string,
        multimedia?: string,
        suspension?: string,
        electricalSystem?: string
    ): Car {
        const car = new Car(
            seats,
            engine,
            doors,
            multimedia,
            suspension,
            electricalSystem
        );
        this.cars.push(car);
        return car;
    }

    public getCars(): Car[] {
        return this.cars;
    }

    public getCarsCount(): number {
        return this.cars.length;
    }
}
