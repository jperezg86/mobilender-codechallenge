const mongoose =  require('mongoose');

const softwareSchema = mongoose.Schema({
   index : {type : Number, required : true},
   name: {type: String, required: true},
   category : {type: String, required: true}
}, { collection : "softwares"});

module.exports = mongoose.model('Software', softwareSchema);