const { default: mongoose } = require("mongoose")
const { find } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    // The authorId is present in the request body. If absent send an error message that this detail is required
    if(!book.author_id) { return res.send({msg: " author_id  detail is required"})}
    
    // If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
    if(!mongoose.isValidObjectId(book.author_id)){
        return res.send({msg: "author is not present."})
    }

    // The publisherId is present in the request body. If absent send an error message that this detail is required
    if(!book.publisher_id) {return res.send({msg: " publisher_id  detail is required"})}

    // If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
    let publisher = await publisherModel.findById(book.publisher_id)
    if(!publisher){return res.send({msg: "publisher is not present"})}
    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
// let idA =  await authorModel.find().select("_id")
// let idP =  await publisherModel.find().select("_id")
// if(book.author_id === idA, book.author_id === idP) {
// }else {
//     res.send({msg: "Author and publisher is required"})
// }  


// Write a POST api that creates an author from the details in request body
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

// Write a POST api that creates a publisher from the details in the request body
const createPublisher= async function (req, res) {
    let publisher = req.body
    let authorPublisher = await publisherModel.create(publisher)
    res.send({data: authorPublisher})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})
}

const putUpdateKey= async function (req, res) {
    let publisherId = await publisherModel.find({name: "Penguin"}).select("_id")
    let updateKey = await bookModel.updateMany({_id: publisherId._id}, {$set:{isHarsCover: true}})
    res.send({msg: updateKey})
}

const bookByAuthorRating = async function(req, res) {
    let authorRating = await authorModel.find({rating: {$gt:3.5}})
    let updatePrice = await bookModel.updateMany({_id: authorRating._id}, {$inc: {price: 10}})
    res.send({msg: updatePrice})
}


module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.putUpdateKey= putUpdateKey
module.exports.bookByAuthorRating= bookByAuthorRating
