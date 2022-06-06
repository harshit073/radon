const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
    type: String,
    recquired: true
    }, 
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {
        type: Number,
        default: 2021
    }, 
    tags: Array,
    authorName: String,     
    totalPages: Number,
    isPublished: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('assignmentBookDB', bookSchema) //users

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
