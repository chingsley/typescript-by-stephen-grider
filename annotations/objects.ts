{
  // // js land
  // const profile = {
  //   name: 'alex',
  //   age: 20,
  //   coords: { lat: 0, lng: 10 },
  //   setName: function (name) {
  //     this.name = name;
  //   },
  //   setAge(age) {
  //     this.age = age;
  //   },
  // };
}

const profile = {
  username: 'alex',
  age: 20,
  coords: { lat: 0, lng: 10 },
  setUsername: function (username: string): void {
    this.username = username;
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// object destructuring
const { age, username }: { age: number; username: string; } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number; }; } = profile;