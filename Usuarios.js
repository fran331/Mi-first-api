const mongoose = require('mongoose');
const usuario = new mongoose.Schema(
{ 
 name:{ 
    type: String
 },
 email:{ 
    type: String
  },
  edad:{
    type: String
   },
   password : {
    type: String
 }

},
{ 
    timestamps: true,
    versionKey: false
}
)

const modeluser = mongoose.model("user", usuario);
module.exports = modeluser;



