const mongoose = require('mongoose');
const usuario = new mongoose.Schema(
{ 
 club:{ 
    type: String
 },
 apodo_del_club:{ 
    type: String
  },
  director_tecnico:{
    type: String
   },
   mejor_jugador : {
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



