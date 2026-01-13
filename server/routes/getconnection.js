const getti=require ('../models/connections')
const server = require('express')
const app=server()


app.get('/getconnection',apicall);
async function apicall(req,res){
    try {
        const connectiondata=await getti.find();
        res.json(connectiondata);
    } catch (error) {
        res.json(error);
    }
}



module.exports=app;