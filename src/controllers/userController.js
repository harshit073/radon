const UserModel= require("../models/UserModel")
const productModel = require("../models/ProductModel")
const orderModel = require("../models/OrderModel")
const { default: mongoose } = require("mongoose")
const ProductModel = require("../models/ProductModel")



const productCreate = async function(req, res) {
    let dataProduct = req.body 
    
    let product = await productModel.create(dataProduct)
    return res.send({msg: product})
}

const userCreate = async function(req, res) {
    let dataUser = req.body
    let value = req.headers.isfreeappuser
    dataUser.isFreeAppUser = value
    let user = await UserModel.create(dataUser)
    res.send({msg: user}) 
}

const orderCreate = async function(req, res) {
    let dataOrder = req.body
   
    let value1 = req.headers.isfreeappuser
    dataOrder.isFreeAppUser = value1

    // if(!mongoose.isValidObjectId(dataOrder.userId)) { res.send("User ID validation Failed")}
    // if(!mongoose.isValidObjectId(dataOrder.productId)) { res.send("Product ID validation Failed")}
    let userId =req.body.userId
    let productId = req.body.productId

    let dataUser = await UserModel.findOne({_id:userId})
    let dataProduct = await ProductModel.findOne({_id: productId})
    if(dataUser != null && dataProduct != null) { // validation
        if(dataUser.isFreeAppUser) {
            dataOrder.amount = 0
            let order = await orderModel.create(dataOrder)
            return res.send({msg: order})
        } else {
            if(dataProduct.price > dataUser.balance) {
                console.log("Minimum Balance is required")
                res.send("Minimum blance need to uprovided")
            } else {
                dataUser.balance = dataUser.balance - dataProduct.price
                let id = dataUser._id.toString()
                let order1 = await orderModel.create(dataOrder)
                await UserModel.findByIdAndUpdate(id, {balance: dataUser.balance})
                return res.send({msg: order1})
            }
           
        }
    }    
}




const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {
    
    let data= req.body
    let tokenDataInHeaders= req.headers.token
    //Get all headers from request
    console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
    console.log(req.headers.batch)
    console.log(req.headers["content-type"])
    console.log(tokenDataInHeaders)
    //Set a header in request
    req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    req.anything = "everything"
    
    
    console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
    res.header('year','2022')
    res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.productCreate= productCreate
module.exports.userCreate = userCreate
module.exports.orderCreate = orderCreate

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode