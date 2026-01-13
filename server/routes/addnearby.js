const model= require ('../models/nearbylocations');
const server = require ('express')
const app= server()

app.post('/addnearby',apicall);

async function apicall(req,res){
    const data = req.body;

    try {
        const nearbylocation=new model(data);
        await nearbylocation.save();
        res.json("data saved successfully")
    } catch (error) {
        res.json(error)
    }
}
module.exports=app;