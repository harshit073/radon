const BookModel= require("../models/userModel")

const createBookUser= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookUsersData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.createBookUser= createBookUser
module.exports.getBookUsersData= getBookUsersData