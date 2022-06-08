const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { float } = require('webidl-conversions');

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: Number,
        require: true
        
    },
    price: Number,
    ratings: Number
   
}, { timestamps: true });


module.exports = mongoose.model('BooksDB', bookSchema) 





     
    // bookName: {
    // type: String,
    // recquired: true
    // }, 
    // prices: {
        
    //     indianPrice: String,
    //     europePrice: String,
    // },
    // year: {
    //     type: Number,
    //     default: 2021
    // }, 
    // tags: String,
    // authorName: String,     
    // totalPages: Number,
    // stockAvailable: Boolean,



//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
