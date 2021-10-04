var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // // CONTRUCTOR DEFINITION: METHOD 1
    // color: string;
    // constructor(color: string) {
    //   this.color = color;
    // }
    // // CONTRUCTOR DEFINITION: METHOD 2
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk(); // will raise an error  b/c 'honk()' is protectec
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log('vroom');
    };
    Car.prototype.startDriving = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
var car = new Car('blue');
car.startDriving();
console.log(car.color);
// car.drive(); // will rasie an error b/c 'drive' is private
// car.honk(); // will rasie an error b/c 'honk' is protected
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Truck.prototype.drive = function () {
        console.log('vroom');
    };
    Truck.prototype.startDriving = function () {
        this.drive();
        this.honk();
    };
    return Truck;
}(Vehicle));
var truck = new Truck(4, 'yellow');
truck.startDriving();
console.log(truck.color);
