const AuthorModel= require("../models/authorModel")
const BookModel= require("../models/bookModel")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})
}

const createPublisher= async function (req, res) {
    let publisher = req.body
    let authorPublisher = await PublisherModel.create(author)
    res.send({data: authorPublisher})
}


const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.getAuthorsData= getAuthorsData