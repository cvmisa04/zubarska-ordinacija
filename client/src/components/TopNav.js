import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { LOGOUT } from '../constans/auth'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'



const TopNav = () => {

  
  const {doktor}= useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(()=>{
    console.log(doktor)

  },[])

  const logout = ()=>{
    dispatch({
      type:"LOGOUT",
      payload:null
    })

    window.localStorage.removeItem('auth');
toast.info('Uspesno ste se odjavili!')
    history.push('/login')

  }

    return (
       
             <nav className="navbar row">
        <div className="col-md-2">
          <div className="navbar-brand">
            <Link to="/">
              <h2 className='text-info'>DENTAL</h2>
            </Link>

          </div>
        </div>

  
      <>
      
      <div className="col-md-5 mt-4 mt-md-0 text-center p-2 d-flex justify-content-between">
      <Link to='/'> <button className=' btn btn-info nav-link dugme  ' >Zakazivanje</button></Link>
      <Link to='/termin'> <button className=' btn btn-info nav-link dugme  ' >Termin</button></Link>
    {doktor ?  <Link to='/dashboard' ><button className=' btn btn-info nav-link dugme  '>DASHBOARD</button></Link> : null }
    {doktor ? <Link to='/register' ><button className=' btn btn-info nav-link dugme   '>DODAJ DOKTORA</button></Link> : null }
  
      </div>
      </>


    


  

        <div className='col-md-1 '>
          {!doktor ? (
             <Link to='/login'> <button className=' btn btn-primary nav-link'>Login</button></Link>
          ): (
            <>
            <Link> <button onClick={logout} className=' btn btn-primary btn-sm  float-right'>LOGOUT</button></Link>
          
            
            </>
          ) }
       
       
        </div>
       
      </nav>
            
       
    )
}

export default TopNav
