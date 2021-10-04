class Vehicle {
  // // CONTRUCTOR DEFINITION: METHOD 1
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  // // CONTRUCTOR DEFINITION: METHOD 2
  constructor(public color: string) { }

  protected honk(): void {
    console.log('beep');
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk(); // will raise an error  b/c 'honk()' is protectec



class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('blue');
car.startDriving();
console.log(car.color);
// car.drive(); // will rasie an error b/c 'drive' is private
// car.honk(); // will rasie an error b/c 'honk' is protected


class Truck extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}
const truck = new Truck(4, 'yellow');
truck.startDriving();
console.log(truck.color);

