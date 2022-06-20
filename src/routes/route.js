const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// find vaccination slot by district ID
router.get("/cowin/findByDistrict", CowinController.getDistrictsByID)
// find the london weater
router.get("/londonweather", CowinController.getLondonWeather)
// find the london temperature
router.get("/londontemperature",CowinController.getLondonTemperature)
// sorte cotoes as per temp
router.get("/sortCity", CowinController.sortCitiesTemp)
// meme creation
router.post("/creatememe", CowinController.memeCreation)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;