const values = [1, 2, 3, 4, 5];

const evens = values.filter( val => val % 2 === 0 );

console.log(evens);

const allFlavors = ["rocky road", "mint chocolate", "birthday cake", "red bean flavor", "lobster", "vanilla", "chocolate chocolate chip", "matcha green tea"];

const lessThan10 = someString => {
    return someString.length <= 10;
}

const shortNameFlavors = allFlavors.filter(flavor => flavor.length <= 10);

const shortFlavorsNamedCallback = allFlavors.filter(lessThan10);

console.log(shortFlavorsNamedCallback);

const numsMultiplied = values.map(num => num * 3);

const multipliedOdds = values.map(num => num * 3).filter(num => num % 2 === 1);

console.log(numsMultiplied);
console.log(multipliedOdds);