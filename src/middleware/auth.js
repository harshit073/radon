const req = require("express/lib/request");
const jwt = require("jsonwebtoken");
const tokenValidate= function ( req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    
    // to validate the user
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

    next()
}


const toAuthorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionup-radon")
    //userId for which the request is made.
    let userInRequest = req.params.userId
     //userId for the logged-in user
    let loggedInUserID = decodedToken.userId
    // comparing both to verfiy the user
    if(userInRequest != loggedInUserID) return res.send({status: false, msg: "User logged is not allowed to modify the requested users data"})
    next();
}

module.exports.tokenValidate = tokenValidate
module.exports.toAuthorise = toAuthorise