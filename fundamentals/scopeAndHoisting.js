console.log(myVar);
var myVar = 9001;
console.log(myVar);



let global = "global";
console.log(global, "from the global scope");

{
    let block = "block";
    console.log(block, "from the block scope");
    console.log(global, "from the block scope");
}

// Error: block is not defined, we receive that message b/c we're not inside of our block scope where the variable exists
// console.log(block, "from the global scope");

function fn1() {
    console.log(global, "from nested fn1");

    let fn1Scope = "Function 1 scope"

    if (true) {
        let x = 7
        var y = 10
    }

    // console log for y will display the data due to hoisting w/ keyword "var"
    console.log("y: ", y);

    // Error: x is not defined due to scope
    // console.log("x: ", x);
}

// fn1();

function fn2(num) {
    console.log(num);
}

// if(true) used to create a block of code
if(true) {
    let x = 5;
    fn2(x);
}

fn2(global)