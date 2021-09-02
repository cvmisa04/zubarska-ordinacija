import React,{useState} from 'react'
import { toast } from 'react-toastify'
import CreateForm from './forms/CreateForm'
import {createTerm} from '../actions/termini'
let imgUrl = 'images/dental.jpg'

const Pocetna = ({history}) => {


  const [ime,setIme]=useState('')
  const [prezime,setPrezime]=useState('')
  const [jmbg,setJmbg]=useState('')
  const [email,setEmail]=useState('')
  const [values,setValues]=useState({
    datum:'',
    vreme:''
  })

 


//const {ime,prezime,jmbg,email,datum,vreme} = values

// const handleChange = (e)=>{


//   setValues({...values, [e.target.name]:[e.target.value]})
// }

const handleSubmit = async (e)=>{

e.preventDefault()

console.log({ime,prezime,jmbg,email,values})

try {
  let res = await createTerm({ime,prezime,jmbg,email,values})
  console.log('Uspesno ste zakazali termin',res)
  toast.success('Uspesno ste zakazali termin.')
  history.push('/termin')
  
} catch (error) {
  console.log('Desila se greska',error)
 if(error.response.status === 400) toast.error(error.response.data)
}

}

    return (
        <>


<div className='p-5 text-center container-fluid' style={{ 
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat  : 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        
        <h2>ZAKAZIVANJE TERMINA</h2>

        </div>

     <div className='container-fluid'>
     <h2 className='text-center alert alert-info'>Forma Zakazivanja</h2>
     <p className='text-muted text-center'><small>NAPOMENA: Sva polja je obavezno popuniti, kako bi uspesno zakazali termin!</small></p>
            <CreateForm 
              ime={ime}
              setIme={setIme}
              prezime={prezime}
              setPrezime={setPrezime}
              jmbg={jmbg}
              setJmbg={setJmbg}
              email={email}
              setEmail={setEmail}
              values={values}
              setValues={setValues}
            
              handleSubmit={handleSubmit}
              //handleChange={handleChange}
            />
             
       
     </div>
            
        </>
    )
        
        
        
       
      
}

export default Pocetna
