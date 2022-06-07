const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")



const createAuthor= async function (req, res) {
    let data1= req.body
    let savedData1= await AuthorModel.create(data1)
    res.send({msg: savedData1})
}

const createBook= async function (req, res) {
    let data2= req.body
    let savedData2= await BookModel.create(data2)
    res.send({msg: savedData2})
}



module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
