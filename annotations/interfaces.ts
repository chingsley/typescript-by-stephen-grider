interface VehicleInterface {
  name: string;
  year: number;
  broken: boolean;
  dateManufactured: Date;
  summary(): string;
}




const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  dateManufactured: new Date('1982-09-03'),
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}`;
  }
};

// METHOD WITHOUTH INTERFACE
const printVehicle1 = (vehicle: { name: string; year: number; broken: boolean; }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};

printVehicle1(oldCivic);

const printVehicle = (vehicle: VehicleInterface): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);


// To be of type Reportable, the object must have the 'summary()' method
interface Reportable {
  summary(): string;
}
// reportableItem is now any object that has the 'summary()' method
const printSummary = (reportableItem: Reportable): void => {
  console.log(reportableItem.summary());
};

// the oldCivic method has a 'summary()' method
printSummary(oldCivic);

// the drink object below also implements a 'summary()' function, therefore can pe passed
// as an argument to printSummary:
const brownDrink = { color: 'brown', sugar: 40, summary() { return `A ${this.color} drink.`; } };
printSummary(brownDrink);



