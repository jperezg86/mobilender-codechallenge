const mongoose =  require('mongoose');

const CambiosSchema = mongoose.Schema({
   fecha : {type : String, required : true},
   archivo: {type: String, required: true},
   cambios : {type: String, required: true},
}, { collection : "cambios"});

module.exports = mongoose.model('Cambios', CambiosSchema);