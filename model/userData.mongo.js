const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    date:{
        type:Date,
        require:true,
    },
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    }

});

module.exports = mongoose.model('userData',userDataSchema);