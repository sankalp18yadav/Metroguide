const model= require ('../models/nearbylocations');
const server = require ('express')
const app= server()

app.get('/getnearby',apicall)
async function apicall(req, res){
    try {
        const near = await model.find();
        res.json(near)
    } catch (error) {
        res.json(error)
    }
}
module.exports=app