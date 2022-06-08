const express = require('express');
const router = express.Router();// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")



router.post("/createAuthor", BookController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/getBookByCheetanBhagat", BookController.getBookByCheetanBhagat)

router.get("/getAuthorPrice", BookController.getAuthorPrice)

router.get("/getAuthorName", BookController.getAuthorName)






// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/bookList", BookController.bookList)

// router.post("/getBookInYear", BookController.getBookInYear)

// router.post("/getParticularBooks", BookController.getParticularBooks)

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;