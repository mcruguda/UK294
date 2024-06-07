class Car {
    brand;
    model;
    yearOfManufacture;
    seats;
    getDescription = function () {
        console.log(`${this.brand}, ${this.model}
Seats: ${this.seats}`)
    };

    constructor(brand, model, yearOfManufacture = null, seats = 5) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.seats = seats;
        }
}

class ElectricCar extends Car{
    batteryRange;
    getDescription = function () {
        console.log(`${this.brand}, ${this.model}
Seats: ${this.seats}
Range: ${this.batteryRange} km`)
    };
    constructor(brand, model, yearOfManufacture = null, seats = 5, batteryRange) {
        super(brand, model, yearOfManufacture, seats);
        this.batteryRange = batteryRange;;
    }
}

let myNormalCar = new Car('Fiat', 'X45', 2019, 4);
let myElectricCar = new ElectricCar('VW', 'Golf', 2017, 5, 250)
myNormalCar.getDescription();
myElectricCar.getDescription();