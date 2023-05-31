export class Car {
    private seats: string;
    private engine: string;
    private doors: string;
    private multimedia: string;
    private suspension: string;
    private electricalSystem: string;

    constructor(
        seats: string = "Standard seats",
        engine: string = "Standard engine",
        doors: string = "Standard doors",
        multimedia: string = "Standard multimedia",
        suspension: string = "Standard suspension",
        electricalSystem: string = "Standard electrical system"
    ) {
        this.seats = seats;
        this.engine = engine;
        this.doors = doors;
        this.multimedia = multimedia;
        this.suspension = suspension;
        this.electricalSystem = electricalSystem;
    }

    public getDetails() {
        console.log(`\nSeats: ${this.seats}
        Engine: ${this.engine}
        Doors: ${this.doors}
        Multimedia: ${this.multimedia}
        Suspension: ${this.suspension} 
        Electrical System: ${this.electricalSystem}\n`)
    }
}
