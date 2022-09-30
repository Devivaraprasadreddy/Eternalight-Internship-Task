const mongoose = require('mongoose');
const forgetSchema = new mongoose.Schema({
    nPassword:{
        type:String,
    },
    cPassword:{
        type:String,
    },
});
module.exports= mongoose.model('forgetdata',forgetSchema);

