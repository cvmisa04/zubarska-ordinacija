import mongoose from 'mongoose';
import bcrypt from 'bcrypt'


const {Schema}= mongoose;

const authSchema = new Schema({

    ime:{
        type:String,
        trim:true,
        required:"Ime je obavezno"
        

    },
    email:{
        type:String,
        trim:true,
        required:"Email je Obavezan",
        
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64
    }
},{timestamps:true})

authSchema.pre('save',function(next){
    let doktor = this

    if(doktor.isModified('password')){
        return bcrypt.hash(doktor.password,12,function(err,hash){
            if(err){
                console.log("BCRYPT HASH ERROR",err)
                return next(err)
            }
            doktor.password = hash;
            return next()
        })

    }else{
        return next()
    }
})

authSchema.methods.comparePassword = function(password,next){
    bcrypt.compare(password,this.password,function(err,match){
        if(err){
            console.log("Compare password error",err)
            return next(err,false)
        }
        console.log("MATCH PASSWORD",match)
        return next(null,match)
    })
}


export default mongoose.model("Doktor",authSchema)