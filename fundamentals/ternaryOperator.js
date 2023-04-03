const myFunct = (myVar) => {
    if (myVar === true) {
        console.log("Yep, is true");
    } else {
        console.log("Nope, false");
    }
}

const myTern = (myVar) => {
    myVar === true ? console.log("Yep, is true") : console.log("Nope, false");
}

// myFunct(true);
// myFunct(false);

// myTern(true);
// myTern(false);


const book1 = { title: "Crime and Punishment", pages: 1000, rating: 4.7 }
const book2 = { title: "A Dream of Spring", pages: 385, rating: 4.2 }
const book3 = { title: "Ender's Game", pages: 220, rating: 5.0 }
const book4 = { title: "The Great Gatsby", pages: 418, rating: 3.7 }
const book5 = { title: "Orlando", pages: 1800, rating: 1.2 }
const book6 = { title: "Some Junk Book", pages: 48, rating: .7 }

const evaluateBook = book => {
    // book.pages < 100 ?
    //     //if our book is < 100 pgs
    //     console.log("Find a better book") :
    //     (console.log("That's a good start, how's the rating?"),
    //     book.rating > 4.5 ?
    //         //book is > 100 pages, and rated > 4.5
    //         console.log("Wow! It's rated well too!") :
    //         //book is > 100 pages, and rated < 4.5
    //         console.log("Aww, bad rating :'(")
    //     )

    //once functions start having nested ternaries, if/else statements tend to read more cleanly
    if(book.pages < 100) {
        console.log("Find a better book");
    } else {
        console.log("That's a good start, how's the rating?") 
        if(book.rating > 4.5) {
            console.log("Wow! It's rated well too!");
        } else {
            console.log("Aww, bad rating :'(");
        }
    }
}

evaluateBook(book1);
evaluateBook(book2);
evaluateBook(book3);
evaluateBook(book6);