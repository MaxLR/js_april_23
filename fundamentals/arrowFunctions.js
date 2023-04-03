let gamesList = ["Metal Gear Solid", "The Last of Us", "Elden Ring", "Counter Strike 2", "Sons of the Forest", "League of Legends", "Stardew Valley"];

const randomGame = function() {
    let randIdx = Math.floor(Math.random() * gamesList.length);
    console.log(gamesList[randIdx]);
}

const randomGameArrow = () => {
    let randIdx = Math.floor(Math.random() * gamesList.length);
    console.log(gamesList[randIdx]);
}

const welcomeMsg = (name) => {
    return "Welcome to our project, oh prestigious visitor: " + name;
}

const welcomeMsgImplicit = name => "Welcome to our project, with an implicit return, oh wise developer: " + name;

// randomGame();
// randomGame();
// randomGame();

// randomGameArrow();
// randomGameArrow();
// randomGameArrow();

console.log(welcomeMsgImplicit("Yang"));
console.log(welcomeMsgImplicit("David"));
console.log(welcomeMsgImplicit("Stephen"));
