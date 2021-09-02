import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router";


const TopNavMobile=()=> {
const[state,setState]=useState({menu:false})
const dispatch = useDispatch();
const history = useHistory();
    const {doktor}= useSelector((state)=>state.auth)


 const toggleMenu=()=>{
    setState({ menu: !state.menu })
  }

 
  const logout = ()=>{
    dispatch({
      type:"LOGOUT",
      payload:null
    })

    window.localStorage.removeItem('auth');
    history.push('/login')

  }
  const show = state.menu ? "show" : "" ;

  return (

    <nav className="navbar navbar-expand-lg navbar-light p-4  mobile" style={{backgroundColor: `#232f3e`}}>
     
      <button className="navbar-toggler bg-primary" type="button" onClick={ toggleMenu } style={{position:'absolute',left:'5px',top:'25px'}} >
        <span className="navbar-toggler-icon"></span>
      </button>
     <h2 className='text-center'> <a className="text-primary " href="/">DENTAL</a></h2>
      <div className={`collapse navbar-collapse ${show}`}>
        <div className="navbar-nav">
        <div className="col-md-5 mt-4 mt-md-0 text-center p-2">
        <Link to='/'> <button className=' btn btn-info nav-link btn-lg mt-3 p-2' >Zakazivanje</button></Link>
        <Link to='/termin'> <button className=' btn btn-info nav-link btn-lg mt-3 p-2 ' >Termin</button></Link>
    {doktor ? <Link to='/dashboard' ><button className=' btn btn-info nav-link btn-lg mt-3 p-2 '>DASHBOARD</button></Link>:null } 
     {doktor? <Link to='/register' ><button className=' btn btn-info nav-link btn-lg mt-3 p-2'>DODAJ DOKTORA</button></Link> :null}
    
        </div>
        </div>
      </div>
      <div className=' ' style={{position:'absolute',right:'5px',top:'25px'}}>
          {!doktor ? (
             <Link to='/login'> <button className=' btn btn-primary nav-link'>Login</button></Link>
          ): (
            <>
            <Link> <button onClick={logout} className=' btn btn-primary btn-sm  float-right'>LOGOUT</button></Link>
          
            
            </>
          ) }
       
       
        </div>
    </nav>

  );
 
}

export default TopNavMobile
