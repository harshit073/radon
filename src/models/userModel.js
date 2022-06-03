const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender:  {
        type: String,
        enum: ['male', 'female', 'LGBTQ', 'others' ]
    },
    age: Number,
    isIndian:Boolean,
    parentsInfo: {
        motherName: String,
        fatherName: String,
        siblings: String
    },
    cars: [String]
    // consents: [{body: String, date: Date}],
    // date: {type: Date, default: Date,now}
}, {timestamps: true});




// Strings, Number
// Boolean, Objec/jason
// array

module.exports = mongoose.model('User', UserSchema)

// 'user'- name of the collection of database in mongodb with this naem:User