import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const {Schema} = mongoose


const terminiSchema = new Schema({

    ime:{
        type:String,
        required:"Ime je obavezno"
    },
    prezime:{
        type:String,
        required:"Prezime je obavezno",

    },
  
    jmbg:{
        type:String,
        required:'Jmbg je obavezan',
        maxLength:13
    },
    email:{
        type:String,
        required:true,
        
    },
   values:{
       
   

    datum:{
        type:String,
        required:true
    },
   vreme:{
    type:String,
    required:true,
    
    }
   
   } 
   

},
{timestamps:true,}
);
terminiSchema.plugin(uniqueValidator);
export default mongoose.model("Termini",terminiSchema)
