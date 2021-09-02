import React,{useState,useEffect,useRef} from 'react'
import {Link,NavLink} from 'react-router-dom'
import { login } from '../actions/authLogin'
import { useDispatch, useSelector} from 'react-redux'
import {toast } from 'react-toastify';
import{LOGIN_IN} from '../constans/auth'
let imgUrl = 'images/dental.jpg'

const Login = ({history}) => {

  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')

  const {doktor}= useSelector((state)=>({...state}))
  const dispatch = useDispatch();
  const textInput = useRef()

  useEffect(()=>{
    textInput.current.focus()
  },[])
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(email,password)

   try {
     let res = await login({email,password})
     
     if(res.data){
       console.log(res.data)
       window.localStorage.setItem('auth',JSON.stringify(res.data))

       dispatch({
         type:"LOGIN_IN",
         payload:res.data
       })

       toast.success('USPESNO STE SE PRIJAVILI!')
       window.location.href=('/dashboard')
     }
     
   } catch (error) {
     console.log("DESILA SE GRESKA",error);
     if(error.response.status === 400) toast.error(error.response.data)
     
   }
  }


    return (
        <div>


<section className='vh-100 mb-0' style={{backgroundColor:"#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-120">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <h2 className="mb-5">Logovanje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-0">
              <input ref={textInput} onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="typeEmailX" className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="typePasswordX" className="form-control form-control-lg" />
              <label  className="form-label" for="typePasswordX">Password</label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label className="form-check-label" for="form1Example3"> Zapamti password </label>
            </div>
            
         <button className="btn btn-primary btn-lg btn-block" type="submit">Loguj se</button>
            </form>
            
            <hr className="my-4" />


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
  
    )
}

export default Login
