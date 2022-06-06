const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBookUser", BookController.createBookUser  )

router.get("/getBookUsersData", BookController.getBookUsersData)

module.exports = router;