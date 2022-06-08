const express = require('express');
const router = express.Router();// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")



router.post("/createAuthor", BookController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/getBookByCheetanBhagat", BookController.getBookByCheetanBhagat)

router.get("/getAuthorPrice", BookController.getAuthorPrice)

router.get("/getAuthorName", BookController.getAuthorName)



module.exports = router;