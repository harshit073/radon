const formatter = function() {
    const str = " FunctionUp      "
    const str1 = "FUNCTIONUP"
    console.log(' functionup      without spaces '+str.trim())
    console.log("functioup to upper case "+ str.toUpperCase())
    console.log('FUNCTIONUP to lower case '+ str1.toLowerCase())
}

module.exports.formatter = formatter