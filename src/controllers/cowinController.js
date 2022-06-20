let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
const getDistrictsByID = async function (req, res) {
    try {
        let idDistrict = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${idDistrict} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${idDistrict}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)


const getLondonWeather = async function (req, res) {
    try {
        let place = req.query.q
        let id = req.query.appid
        console.log(`query params are: ${place} ${id}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
}

//then change the above to get the temperature only( of London)

const getLondonTemperature = async function (req, res) {
    try {
        let place = req.query.q
        let id = req.query.appid
        console.log(`query params are: ${place} ${id}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
}


//Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperatureresult should look something like this
// [
// {city:"London", temp: 280},
// {city:"Moscow", temp: 290},
// {city:"Bangalore", temp: 301.2},
// .......
// ]

const sortCitiesTemp = async function (req, res) {
    try {
       let citiesToSort = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
       let cityArray = []
       for (let i= 0; i<citiesToSort.length; i++) {
           let obj1 = {city: citiesToSort[i]} // object of cities
           // get weater of city
           let weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${citiesToSort[i]}&appid=0e45816260f8504d69993454a244fe54`)
           obj1.temp = weather.data.main.temp // temperature as a object
           cityArray.push(obj1)
       }
       // sorting array
       let sorrtedArray = cityArray.sort(function (a,b) {return a.temp - b.temp})
       console.log(sorrtedArray)
       res.status(200).send({status: true, data: sorrtedArray})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
}


//Axios POST request assignment
// 3Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
// template_id <meme_id>
// text0 <text you want as a caption>
// text1 <optional>
// username chewie12345
// password meme@123
// 4. Return a response with a body like this
// "data": {
//         "url": "https://i.imgflip.com/5mvxax.jpg",
//         "page_url": "https://imgflip.com/i/5mvxax"
//     }

const memeCreation = async function (req, res) {
    try {
        let id = req.query.template_id
        let t1 = req.query.text0
        let t2 = req.query.text1
        //console.log(`query params are: ${place} ${id}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${t1}&text1=${t2}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        //console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsByID = getDistrictsByID
module.exports.getLondonWeather= getLondonWeather
module.exports.getLondonTemperature = getLondonTemperature
module.exports.sortCitiesTemp = sortCitiesTemp
module.exports.memeCreation = memeCreation