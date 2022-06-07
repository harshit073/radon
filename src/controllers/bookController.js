const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find( ).select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}

const getBookInYear = async function(req, res) {
    let dataYear = req.body
    console.log(dataYear)
    let allBooksYears = await BookModel.find(dataYear).count()
    res.send({msg: allBooksYears})
}

const getParticularBooks = async function(req, res) {
    let dataParticalarBook = req.body
    console.log(dataParticalarBook)
    let particularBooks = await BookModel.findOne(dataParticalarBook)
    res.send({msg: particularBooks})
}

// const getXINRBooks = async function(req, res) {
//     let allINRBooks= await BookModel.find( $or{prices.indianPrice: })
//     res.send({msg: allBooks})
// }

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookInYear= getBookInYear
module.exports.getParticularBooks= getParticularBooks