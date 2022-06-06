const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find( ).select({})
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList