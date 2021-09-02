import React,{useState,useEffect,useRef} from 'react'
import { toast } from 'react-toastify'
import { register } from '../actions/authRegister'
let imgUrl = 'images/dental.jpg'

const Register = () => {

    const [ime,setIme]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const  textInput = useRef()


    useEffect(()=>{
        textInput.current.focus()
    },[])


    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        try {
            let data = await register({

                ime,
                email,
                password
            })
            

            console.table(`Register data:${data}`)
            toast.success('Uspesno ste registrovali novog doktora')
            
        } catch (error) {
            console.log('GRESKA',error)

            if(error.response.status ===400) toast.error(error.response.data)
            
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
        
        <h2>REGISTRACIJA NOVOG DOKTORA</h2>

        </div>
        
        <div style={{backgroundColor:"#a8cbf7"}}>

        <h2 className='text-center alert alert-info'>Forma Registracije</h2>
        <div className='container'>


<form onSubmit={handleSubmit} className=''>
                <div className='form-group'>
                    <label className='form-label'>Name</label>
                    <input
                    ref={textInput}
                     type='text' 
                     className='form-control' 
                     placeholder='Unesite ime' 
                     value={ime} 
                     onChange={(e)=>setIme(e.target.value)}
                      />

                </div>

                <div className='form-group'>
                    <label className='form-label'>Email</label>
                    <input
                     type='text' 
                     className='form-control' 
                     placeholder='Unesite email' 
                     value={email} 
                     onChange={(e)=>setEmail(e.target.value)}
                      />

                </div>

                <div className='form-group'>
                    <label className='form-label'>Password</label>
                    <input
                     type='password'
                     className='form-control' 
                     placeholder='Unesite password' 
                     value={password} 
                     onChange={(e)=>setPassword(e.target.value)}
                      />

                </div>
                <button disabled={!ime || !email || !password}  type="submit" className='btn btn-info form-control mt-5 mb-5'>REGISTRUJ SE</button>

            </form>
            </div>
        </div>
        </>
    )
}

export default Register
