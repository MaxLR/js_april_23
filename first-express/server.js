const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
// these lines of code are what allow our server to receive JSON from requests
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is shorthand for request
// res is shorthand for response
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

const apiCallback = (req, res) => {
    res.json({
        message: "Hello World",
        secretNumber: 9001,
        instructorNames: ["Spencer, Max"],
        myUser: {
            name: "Max R",
            job: "Teacher",
            hairColor: "Brown",
            classesTaught: ["Python", "JavaScript", "C#"]
        }
    })
}

//using a named callback function for our /api route
app.get("/api", apiCallback);

app.get("/api/cities", (req, res) => {
    const cities = [
        {
            id: 1,
            name: "Phoenix",
            population: 680000
        },
        {
            id: 2,
            name: "Denver",
            population: 1200000
        },
        {
            id: 5,
            name: "Manilla",
            population: 800000
        },
        {
            id: 6,
            name: "Miami",
            population: 1600000
        }
    ];

    res.json(cities);
})

app.post("/api/cities", (req, res) => {
    console.log(req.body);

    res.json({
        status: "Success",
        city: req.body
    })
})

// the :id variable will come through the params, any data sent in through the body will come 
// in through req.body
app.delete("/api/cities/:id", (req, res) => {
    console.log(req.params);

    res.json({
        status: "Success",
        msg: `Successfully deleted city # ${req.params.id}`
    })
})

app.put("/api/cities/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        status: "Success",
        msg: `Updated city with the id of: ${req.params.id}`
    })
})

//if we have multiple route params, we can't ignore one (unless we've defined another route without it)
app.get("/api/cities/:id/:someOtherVar", (req, res) => {
    res.json({
        id: req.params.id,
        otherVar: req.params.someOtherVar
    })
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );