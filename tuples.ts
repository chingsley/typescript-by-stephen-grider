const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// create tuple: method 1
const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 10; // this will raise an error b/c pepsi[0] is expected to be a string (not a number)


// create tuple: method 2
type Drink = [string, boolean, number];
const pepsi2 = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];


