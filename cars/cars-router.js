const express = require('express');
const db = require('../data/db-config');
const router = express.Router();
// const {carIsValid, carMakeIsValid, carModelIsValid, carVinIsValid, carMileageIsValid }= require('./cars-helpers');

router.get('/', (req, res)=> {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({message: 'failed to retrieve cars'})
    })
})

router.get('/:id', (req, res)=> {
    const {id} = req.params;
    db('cars').where({id}).first()
    .then(car => {
        res.status(200).json(car);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'failed to retrieve car'})
    })
})
router.post('/', validateCar, (req, res) => {
    db('cars').insert(req.body, 'id')
    .then(([id])=> {
        db('cars')
        .where({id})
        .first()
        .then(car => {
            res.status(200).json(car)
        })
    })
    .catch(err => {
        res.json(err)
    })

} )
// router.post('/', async (req, res)=> {
//     const postData = req.body;

//     if(carIsValid(req.body)) {
//       try {
//         const post = await db('cars').insert(postData);
//         res.status(201).json(post);
//       } catch (err) {
//         res.status(500).json({ message: 'Failed to create new post' });
//       }
//     } else {
//       res.status(400).json({ message: 'failing'})
//     }

//   }); 



  


function validateCar(req, res, next){
    if(!req.body){
        res.status(400).json({ message: "missing post data" });
    } else if (!req.body.vin) {
        res.status(400).json({ message: "missing required vin field" });
    } else if (!req.body.make) {
        res.status(400).json({ message: "missing required make field" });
    } else if (!req.body.model) {
        res.status(400).json({ message: "missing required model field" });
    } else if (!req.body.mileage) {
        res.status(400).json({ message: "missing required mileage field" });
    } else {
        next()
}
}
module.exports = router;