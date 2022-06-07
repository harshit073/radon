const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}

const getBookInYear = async function(req, res) {
    let dataYear = req.body.year
    //console.log(dataYear)npm i
    let allBooksYears = await BookModel.find({"year":dataYear})
    res.send({msg: allBooksYears})
}

const getParticularBooks = async function(req, res) {
    let dataParticalarBook = req.body
    //console.log(dataParticalarBook)
    let particularBooks = await BookModel.findOne(dataParticalarBook)
    res.send({msg: particularBooks})
}

const getXINRBooks = async function(req, res) {
    let allINRBooks= await BookModel.find(  {"prices.indianPrice": {$in: ["100INR", "200INR", "500INR"]}})
    // .find({prices.indianprice: {$in: ["100INR", "200INR", "500INR"]}})
    res.send({msg: allINRBooks})
}

const getRandomBooks = async function(req, res) {
    
    let random = await BookModel.find({$or: [{"stockAvailable": true},{"totalPages":{$gt: 500}}]})

    res.send({msg: random})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookInYear= getBookInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks