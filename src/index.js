const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://harshit073:swrzc9jWniu8PA86@cluster0.f11hm.mongodb.net/AssignmentUserProductOrder-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        // const todayDate = moment().format('MMMM Do YYYY, h:mm:ss a')
        // const route= req.originalUrl // path of request
        // const ip = req.socket.remoteAddress
        // console.log (todayDate +" "+ route+" "+ip);
        console.log("Inside the global middleware")
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
