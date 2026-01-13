const model = require('../models/stations')
const server = require ('express')
const app= server()



//  app ke under listen h ,get h , post h, put h, update h, delete h, etc...



app.post('/addstations', apicall); // /addstations is an endpoint of an api
async function apicall(req, res){  // apicall is controller of the api, jisse api se ky krwane hai wo manage kr ske jaise(request from client, response from server and saver wagera)
    const data= req.body;          // req.body me request ko bhjta h or isko hm data const me save kra rhe


    try {                               // try or catch dekhta h ki jb successfully kaam  hoga to ky hoga and nhi hoga to ky hoga
        const station= new model(data);  
        await station.save();           // station ko save kra rhe
        res.json("saved successfully")
    } catch (error) {
     res.json(error)   
    }

}
module.exports=app;