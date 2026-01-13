const connection=require('mongoose')
const conn=new connection.Schema({
    sourcestation:{
        type:String
    },
    destinationstation:{
        type:String
    },
    distance:{
        type:Number
    },
    linecolor:{
        type:String
    }
})
const lio= new connection.model('connection', conn);
module.exports=lio;