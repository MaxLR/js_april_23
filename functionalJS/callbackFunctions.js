//Callback functions are functions that we write, in order to be run at a later point

setTimeout(() => {
    console.log("Hello");
}, 1000);

console.log("This is after my set timeout function");


const shoutHello = () => console.log("HELLOO!!!!!!!");

//no parenthesis after the function name, otherwise it will be immediately invoked
setTimeout(shoutHello, 500);