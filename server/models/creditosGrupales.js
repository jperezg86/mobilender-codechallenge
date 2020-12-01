const mongoose =  require('mongoose');

const CreditosSchema = mongoose.Schema({
   file : {type : String, required : true},
   expedition: {type: String, required: true},
   info_quality : {type: String, required: true},
   status : {type: String, required: true},
   end_date : {type: String, required: true},
   user: {type: String, required: true}
}, { collection : "creditos-grupales"});

module.exports = mongoose.model('CreditosGrupales', CreditosSchema);