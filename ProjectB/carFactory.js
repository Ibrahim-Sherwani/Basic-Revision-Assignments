"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var CarFactory = /** @class */ (function () {
    function CarFactory() {
        this.cars = [];
    }
    CarFactory.getInstance = function () {
        if (!CarFactory.instance) {
            CarFactory.instance = new CarFactory();
        }
        return CarFactory.instance;
    };
    CarFactory.prototype.createCar = function (seats, engine, doors, multimedia, suspension, electricalSystem) {
        var car = new car_1.Car(seats, engine, doors, multimedia, suspension, electricalSystem);
        this.cars.push(car);
        return car;
    };
    CarFactory.prototype.getCars = function () {
        return this.cars;
    };
    CarFactory.prototype.getCarsCount = function () {
        return this.cars.length;
    };
    return CarFactory;
}());
exports.CarFactory = CarFactory;
