// let date = new Date()
// let prntDate = date.getDate()
// console.log("Date = " + prntDate)
const print = function () {
    let date = new Date()
    let week = new Date(date.getFullYear())
    let prntDate = date.getDate()
    let prntMonth = date.getMonth()    
    console.log('Radon: week '+week+'date '+prntDate+ ' month '+ prntMonth + ' topic being taught is Nodejs')

}
    

module.exports.print = print



// const helper = function printDate() {
//     
//     let prntMonth = date.getMonth()
// }