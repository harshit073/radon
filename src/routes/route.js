const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Auth= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", Auth.tokenValidate, userController.getUserData)

router.put("/users/:userId", Auth.tokenValidate, Auth.toAuthorise, userController.updateUser)

router.post("/users/:userId/posts", Auth.tokenValidate, Auth.toAuthorise, userController.postMessage)

router.delete("/usersdelete/:userId",  userController.isDeleted )


module.exports = router;