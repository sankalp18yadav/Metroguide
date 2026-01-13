
const stations = require('../models/stations')
const server = require ('express')  //  express ke under hi listen, GET , POST, PUT hota h isliye isko require krte h
const app= server()


app.get('/getiingstations',control);
async function control(req,res){
    try {
        const stationdata= await stations.find() // saara data hmlog stations ka dhund rhe h
        res.json(stationdata)

    } catch (error) {
        res.json(error)
    }
    
}
module.exports=app;