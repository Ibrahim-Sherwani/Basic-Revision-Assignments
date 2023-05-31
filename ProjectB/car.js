"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(seats, engine, doors, multimedia, suspension, electricalSystem) {
        if (seats === void 0) { seats = "Standard seats"; }
        if (engine === void 0) { engine = "Standard engine"; }
        if (doors === void 0) { doors = "Standard doors"; }
        if (multimedia === void 0) { multimedia = "Standard multimedia"; }
        if (suspension === void 0) { suspension = "Standard suspension"; }
        if (electricalSystem === void 0) { electricalSystem = "Standard electrical system"; }
        this.seats = seats;
        this.engine = engine;
        this.doors = doors;
        this.multimedia = multimedia;
        this.suspension = suspension;
        this.electricalSystem = electricalSystem;
    }
    Car.prototype.getDetails = function () {
        console.log("\nSeats: " + this.seats + "\n        Engine: " + this.engine + "\n        Doors: " + this.doors + "\n        Multimedia: " + this.multimedia + "\n        Suspension: " + this.suspension + " \n        Electrical System: " + this.electricalSystem + "\n");
    };
    return Car;
}());
exports.Car = Car;
