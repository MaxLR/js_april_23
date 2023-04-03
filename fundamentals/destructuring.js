let videoGame1 = {
  title: "Elden Ring",
  studio: "Fromsoft",
  platforms: ["pc", "playstation", "xbox"],
  price: 59.99,
};

// let title = videoGame1.title;
// let studio = videoGame1.studio;
// let price = videoGame1.price;

let { title, studio, price, somethingThatDoesntExist } = videoGame1;
//using the spread operator is only a shallow copy, nested objects/arrays still point to the same reference
let videoGame2 = { ...videoGame1 };
//this allows us to create a shallow copy of the platforms array
videoGame2.platforms = [...videoGame1.platforms];
videoGame2.platforms.push("gamecube");

videoGame2.title = "Apex Legends";

// console.log(videoGame1.platforms);
// console.log(videoGame2.platforms);

// console.log(title);
// console.log(studio);
// console.log(price);
// we can try to pull keywords out that don't exist on the object, but they'll be undefined
if (somethingThatDoesntExist) {
  console.log(somethingThatDoesntExist);
}

const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

// using the spread operator to create the attributes variable will store everything not *explicitly* named w/ it's own name (e.g. firstName, lastName, username)
const { firstName, lastName, username, ...attributes } = person;

// console.log(attributes);
// console.log(username, " is the username");

let icecreamFlavors = ["rocky road", "mint chococalte chip", "cookies and cream", "lobster", "phish food", "coffee"];

// let flavor1 = icecreamFlavors[0];
// let flavor2 = icecreamFlavors[2];

// adding a comma allows you to reference the next element in the array
let [flavor1, , flavor2, , , flavor3] = icecreamFlavors;

// console.log(flavor1);
// console.log(flavor2);
// console.log(flavor3);

// let temp = icecreamFlavors[0];
// icecreamFlavors[0] = icecreamFlavors[icecreamFlavors.length - 1];
// icecreamFlavors[icecreamFlavors.length - 1] = temp;

//parallel assignment allows you to swap 2 values in an array w/o having to use a temp variable
let lastIdx = icecreamFlavors.length - 1;
[icecreamFlavors[0], icecreamFlavors[lastIdx]] = [icecreamFlavors[lastIdx], icecreamFlavors[0]];

console.log(icecreamFlavors);