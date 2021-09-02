import Termini from '../models/termini'
import ApiFeatures from '../midlewares/ApiFeatures'

export const createTerm =async (req,res)=>{
    let {ime,prezime,jmbg,email,values,createdAt} = req.body
   

   try{

  
    let checkDate = await Termini.findOne({"values": req.body.values}).exec();
    console.log(checkDate)

    if(checkDate) return res.status(400).send('Termin vec postoji! Probajte sa drugim terminom');



        let termin = new Termini(req.body)
        await termin.save();
        
    
   

 return res.json({ok:true})


   }catch(error){

    console.log(error)
    return res.status(400).send("Desila se greska!")

   }
console.log(req.body);



}


export const getTermin = async(req,res)=>{

    const apiFeatures = new ApiFeatures(Termini.find(),req.query)
    .search()
    .filter();



    let termin = await apiFeatures.query;

    termin = await apiFeatures.query

    setTimeout(()=>{
        res.status(200).json(
            termin
        )

        
     
        
        
    },1000)

   
 
       
       
   
    console.log({termin})
    
}


export const remove = async(req,res)=>{

    let termin = await Termini.findById(req.params.id)

    await termin.remove();
    console.log(req.params._id)
    res.send('ok')
    res.json(termin)
}


export const allTermini = async(req,res)=>{
const termini = await Termini.find({}).exec();

res.json(termini)
}