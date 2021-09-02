import Doktor from '../models/auth'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{

    try {
        console.log(req.body);

        const {ime,email,password} = req.body;

        if(!ime) return res.status(400).send('Ime je obavezno');
        if(!password || password.length < 6) return res.status(400).send('Password je obavezan');

        let doktorExist = await Doktor.findOne({email}).exec();

        if(doktorExist) return res.status(400).send('Email je zauzet');

        //register

        const doktor = new Doktor(req.body);

       await doktor.save()

       console.log('Uspesno ste registrovali doktora',doktor)
       res.json({ok:true})
        
    } catch (error) {
        console.log('Desila se greska',error)
       return res.status(400).send("Desila se greska. Pokusajte ponovo", error)
        
    }
   
}


export const login = async (req,res)=>{

    const {email,password}= req.body
    //console.log(req.body)

    const doktor = await Doktor.findOne({email}).exec();

    if(!doktor) return res.status(400).send('Doktor sa ovom email adresom ne postoji!');

    doktor.comparePassword(password,(err,match)=>{
        if(!match || err){
            return res.status(400).send('Pogresan password!')
        }

        //GENERATE TOKEN

        let token = jwt.sign({_id:doktor._id},process.env.JWT_TOKEN,{
            expiresIn:'7d'
        })
        res.json({token,doktor:{
            _id:doktor._id,
            ime:doktor.ime,
            email:doktor.email,
            createdAt:doktor.createdAt,
            updateAt:doktor.updateAt,
        }})
    })

    try {
        
    } catch (error) {
        console.log("LOGIN ERROR",error)
        return res.status(400).send("Prijavljivanje nije uspelo")
        
    }



}

