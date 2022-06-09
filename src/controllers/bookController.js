const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")



const createAuthor= async function (req, res) {
    let data1= req.body
    let authorId = data1.author_id
    if(!authorId) return res.send({msg: 'Author is mandatory in the field'})
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

// const getAuthorName= async function (req, res) {
//     const bookData= await BookModel.find({price:{$gte:50,$lte:100}}).select("author_id")
//     const id= bookData.map(inp=>inp.author_id)
//    let temp=[]
//    for(let i=0; i<id.length; i++)
//    {
//        const x=id[i]
//        const author=await AuthorModel.find({author_id:x}).select("author_name")
//        temp.push(author)
     
//    }
//    const authorName=temp
//    res.send({msg:authorName})
// }

const getAuthorName= async function (req, res) {
    const bookData= await BookModel.find({price:{$gte:50,$lte:100}}).select("author_id")
    const id= bookData.map(inp=>inp.author_id)

   for(let i=0; i<id.length; i++)
   {
       const x=id[i]
       const author=await AuthorModel.find({author_id:x}).select("author_name")
       res.send({msg:author}) 
   }
}


const getbooksByAuthorId= async function(req, res) {
    const dataId = req.params.author_id
    const authorID = await AuthorModel.findOne({author_id: dataId})
    const bookName= await BookModel.find({author_id: authorID.author_id}).select("name")
    res.send({msg: bookName})
}

const getListOfAuthors= async function(req, res) {
    const ratings = await BookModel.find({ratings: {$gt: 4}})// get id
    const listAuthors = await AuthorModel.find({age: {$gt: 50}})
    let authorN  = []
    for(let i =0;i<ratings.length; i++) {
        for(let j =0;j<listAuthors.length;j++) {
            if(ratings[i].author_id == listAuthors[j].author_id) {
                authorN.push(listAuthors[j].author_name)
                authorN.push(listAuthors[j].age)
            }

        }
        
    }
    res.send({msg: authorN})
}

module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBookByCheetanBhagat= getBookByCheetanBhagat
module.exports.getAuthorPrice= getAuthorPrice
module.exports.getAuthorName= getAuthorName
module.exports.getbooksByAuthorId= getbooksByAuthorId
module.exports.getListOfAuthors= getListOfAuthors