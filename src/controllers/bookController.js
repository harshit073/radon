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

const getBookByCheetanBhagat= async function (req, res) {
    let data3= await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let listOfBooks= await BookModel.find({author_id: data3[0].author_id})
    res.send({msg: listOfBooks}) 
}

const getAuthorPrice= async function (req, res) {
    let findAndUpdate= await BookModel.findOneAndUpdate({name: "Two states"}, {$set:{price: 100}}, {new: true})
    let authorName = await AuthorModel.find({author_id: findAndUpdate.author_id},).select("author_name")
    let p= findAndUpdate.price
    res.send({msg: authorName, p})
}

const booksCost= async function (req, res) {
    let bookWithCost = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1, _id :0})
    let authorName =  bookWithCost.map(async (a)=> {
        let b = await AuthorModel.findById(a.author_id)
        return b.authorName
    })
    res.send({msg: authorName})
}

module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBookByCheetanBhagat= getBookByCheetanBhagat
module.exports.getAuthorPrice= getAuthorPrice
module.exports.booksCost= booksCost