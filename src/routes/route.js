const express = require('express');
// const externalModule = require('./logger')
//const externalModule1 = require( '../logger/logger.js')
const externalModule2 = require('../util/helper.js')
//const externalModule3 = require('../validator/formatter.js')

const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userControllers.js")
// router.get('/test-me', function (req, res) {
//     // console.log('The constant in logger route has a value '+externalModule.endpoint)
//     // console.log('The current batch is '+externalModule.batch)
//     // externalModule.log()
//     res.send('My first ever api!')
//     externalModule1.url()
//     externalModule2.print()
//     externalModule3.formatter()
// });

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2 // consective calues sum
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
 

  //integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2 // consective value sum
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  })
 
  //1.	Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response
  router.get('/movies', function (req, res) {
    const movies=['Superman', 'Spider Man', 'Rang de basanti', 'The shining', 'Lord of the rings','Batman begins']
    res.send(movies)
});
// 1.	Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
router.get('/movies/:indexNumber', function (req, res) {
    const movies=['Superman', 'Spider Man','Rang de basanti', 'The shining', 'Lord of the rings','Batman begins']
    console.log(req.params)
    //console.log(JSON.stringify(req.params))
    let len = movies.length
    let item = movies[req.params.indexNumber - 1]
    if(req.params.indexNumber < len){
        res.send(item)
    }else{
        res.send('Error: There is no movie.')
    }
    
    //console.log(req.params.indexNumber)
});


//1.	Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name
router.get('/films', function (req, res) {
    const film = [{
           id: 1,
           name: "The Shining"
          },
          {
           id: 2,
           name: "Incendies"
          },
          {
            id: 3,
            name: "Rang de Basanti"
          },
          {
           id: 4,
           name: "Finding Nemo"
          },
          {
           id: 5,
            name: "Superman"
          },
          {
            id: 6,
            name: "Spider Man"
          },
          {
            id: 7,
           name: "Thor: Ragnarock"
          },];
       
       res.send(film)
});

//1.	Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 

router.get('/film/:filmId', function (req, res) {
    const films = [{
        id: 1,
        name: "The Shining"
       },
       {
        id: 2,
        name: "Incendies"
       },
       {
         id: 3,
         name: "Rang de Basanti"
       },
       {
        id: 4,
        name: "Finding Nemo"
       },
       {
        id: 5,
         name: "Superman"
       },
       {
         id: 6,
         name: "Spider Man"
       },
       {
         id: 7,
        name: "Thor: Ragnarock"
       }];
   // console.log(films[0])
    //    JSON.stringify(req.params)
       let len = films.length
       len++
       const item = films[req.params.filmId - 1]
       if(req.params.filmId < len){
          res.send(item)
       }else{
        res.send('No movie exists with this id.')
      }
      //res.send("adfdfa")
});


// const { default: mongoose } = require('mongoose');mongoose.connect("mongodb+srv://Aishwarya123:sg8eJZVpV9e3eEP3@cluster0.gf2pu4l.mongodb.net/aishu", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )


// router.get('/test-me', function(req, res){
//     res.send('My first API')
// })

// router.post("/createUser", UserController.createUser) //handler

// router.get("/getUsersData", UserController.getUsersData)
  module.exports = router;




// adding this comment n