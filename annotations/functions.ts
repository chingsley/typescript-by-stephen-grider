const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};


const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);

};

const throwError2 = (message: string): void => {
  if (!message) {

    throw new Error(message);
  }

};

const throwError23 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todaysWeather = { date: new Date(), weather: 'sunny' };
const logWeather = (forcast: { date: Date, weather: string; }): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
};
logWeather(todaysWeather);
const logWeather2 = ({ date, weather }: { date: Date, weather: string; }): void => {
  console.log(date);
  console.log(weather);
};
