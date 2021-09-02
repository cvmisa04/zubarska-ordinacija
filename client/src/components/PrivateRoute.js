import React,{} from 'react'
import {Route, Redirect} from "react-router-dom"
import { useSelector } from 'react-redux'

const PrivateRoute = ({...rest}) => {
    const {doktor,token} = useSelector((state)=>state.auth)
  
    return doktor ? <Route {...rest} /> : <Redirect to='/login' />
  }
  
  export default PrivateRoute