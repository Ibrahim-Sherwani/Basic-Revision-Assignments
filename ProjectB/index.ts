import { CarFactory } from "./carFactory";

const carFactory = CarFactory.getInstance();

const car1 = carFactory.createCar(
    "Advanced seats",
    "Advanced engine",
    "2 doors",
    "Advanced multimedia",
    "Advanced suspension",
    "Advanced electrical system"
);

const car2 = carFactory.createCar(
    "Basic seats",
    "Basic engine",
    "4 doors",
    "Basic multimedia",
    "Basic suspension",
    "Basic electrical system"
);

const car3 = carFactory.createCar();

const cars = carFactory.getCars();

console.log(`Number of cars produced: ${carFactory.getCarsCount()} \n`);

for (const car of cars) {
    car.getDetails();
}

