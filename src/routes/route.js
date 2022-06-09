const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")



// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/createAuthor", bookController.createAuthor)

router.post("/createPublisher", bookController.createPublisher)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/putUpdateKey", bookController.putUpdateKey)

router.put("/bookByAuthorRating", bookController.bookByAuthorRating)
module.exports = router;