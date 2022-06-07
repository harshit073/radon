const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id: {
        type: Number,
        unique: true,
        required: true     
    },
    author_name: String,
    age: Number,
    address: String
}, { timestamps: true });

module.exports = mongoose.model('authorsDB', authorSchema) 




    // lastName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // }, 
    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,

    

    
    
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]




// String, Number
// Boolean, Object/json, array