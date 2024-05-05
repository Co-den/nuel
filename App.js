/* eslint-disable no-unused-vars */
const fs = require('fs');
const express = require('express');
const app = express();


//middleware is a function that can modify 
//the incoming data
app.use(express.json());


//(2)Reading file containing data
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//GET((3)getting our data)
app.get('/api/V1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

app.get('/api/V1/tours/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    //getting individual tours with id from our json file
    const tour = tours.find(el => el.id === id);

    // VALIDATION of user input
    //if (id > tours.length) {
    if (!tour) {
        return res.status(404).json({
            status: "failed",
            message: `No tour with the ID of ${id}`
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

//POST
app.post('/api/V1/tours', (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({
        id: newId
    }, req.body);
    //PUSH
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours), (err) => {
            if (err) {
                console.log('unsuccessful');
            }
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }
            });
        });

});

//(1) CREATE A SERVER:
const port = 3000;

//LISTEN TO SERVER:
app.listen(port, () => {
    console.log(`App is runing on ${port}...`);
});