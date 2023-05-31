"use strict";
exports.__esModule = true;
var carFactory_1 = require("./carFactory");
var carFactory = carFactory_1.CarFactory.getInstance();
var car1 = carFactory.createCar("Advanced seats", "Advanced engine", "2 doors", "Advanced multimedia", "Advanced suspension", "Advanced electrical system");
var car2 = carFactory.createCar("Basic seats", "Basic engine", "4 doors", "Basic multimedia", "Basic suspension", "Basic electrical system");
var car3 = carFactory.createCar();
var cars = carFactory.getCars();
console.log("Number of cars produced: " + carFactory.getCarsCount() + " \n");
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    car.getDetails();
}
