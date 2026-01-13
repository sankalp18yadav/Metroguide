const nearby = require ('mongoose')

const n = new nearby.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    location:{
        type:String
    }
    

})
const nl = new nearby.model("nearbylocations",n);
module.exports=nl;