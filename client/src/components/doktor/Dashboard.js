import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Avatar, Badge } from 'antd'
import moment from 'moment'
import { toast } from 'react-toastify'


import { allTermin, removeTermin } from '../../actions/termini'
import AllTerminCard from './card/AllTerminCard'
import './card/card.css'




const { Meta } = Card;
const { Ribbon } = Badge;

const Dashboard = () => {
    let imgUrl = 'images/dental.jpg';
    const {doktor}= useSelector((state)=>state.auth)
    const [termin,setTermin]=useState([])

    useEffect(()=>{
        loadTermini()


    },[])
    const removeHandler=(id)=>{
        if(!window.confirm("Da li ste sigurni ?")) return;
      removeTermin(id).then(res=>{
            toast.success('Uspesno ste otkazali termin.')
            loadTermini()
        })
       }
    

    const loadTermini=async()=>{
        let res = await allTermin();
        console.log(res.data)
        setTermin(res.data)
    }
    return (
        <div>
                  <div className='p-5 text-center container-fluid' style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

                
<div className='d-flex justify-content-around'>
           <Card>
                <Meta
                    avatar={<Avatar>{doktor ? doktor.ime : null}</Avatar>}
                    title={doktor ? doktor.ime : null}
                    description={`Joined ${moment(doktor && doktor.createdAt).fromNow()}`}
                />

            </Card>
            </div>
            </div>
         
         
     

        <div className='container-fluid p-4' style={{backgroundColor:"#a8cbf7"}}>
        <h2 className='text-center alert alert-info'>TERMINI</h2>

        </div>


        <div className='container-fluid'>
        <div className='row justify-content-center' style={{backgroundColor:"#a8cbf7"}}>
            {termin.map((t)=>(
                
             <AllTerminCard key={t._id} t={t} removeHandler={removeHandler}/>
     
            
    ))}
     </div>

        </div>
            
        </div>
    )
}

export default Dashboard
