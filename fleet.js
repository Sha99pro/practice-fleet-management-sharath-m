class vehicle{
    constructor(type , make , model , year , mileage = 0){
            this.type = type;
            this.make = make;
            this.model = model;
            this.year = year;
            this.mileage = mileage;
    }
    drive(distance){
        this.mileage += distance;
    }
    getDetails(){
        return ` Vehicle Details\n ---------------------\n Type : ${this.type} \n Make : ${this.make} \n Model : ${this.model} \n Year : ${this.year} \n Mileage : ${this.mileage} \n`;
    }
}

//create vehicles
let car = new vehicle("Car" , "BMW" , "BMW iX" , 2026);
let truck = new vehicle("Truck" , "Ford" , "F-150" , 2019);
let bike = new vehicle("Motorcycle" , "Royal Enfield" , "Bullet 650" , 2026);

//simulate trips
car.drive(150);
truck.drive(300);
bike.drive(95);

console.log(car.getDetails());
console.log(truck.getDetails());
console.log(bike.getDetails());


