const mapp=require('mongoose')
const m=new mapp.Schema({
    distancemap:{
        type:[[Number]]
    }
})
const lio= new mapp.model('map', m);
module.exports=lio;

const mongoose = require('mongoose');


