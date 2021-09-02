import React, { useEffect, useState,useRef } from 'react'
import { getTermin, removeTermin } from '../actions/termini'
import { toast } from 'react-toastify'
import Termin from './table/Termin'

export const FuncContext = React.createContext();



const MojTermin = ({ match, history }) => {
    let imgUrl = 'images/dental.jpg'

    

    const keyword = match.params.jmbg
    const [jmbg, setJmbg] = useState("")
  

    const [termin, setTermin] = useState([])
    const textInput = useRef()
    useEffect(() => {

        loadTermin()
      
        console.log(termin)
        textInput.current.focus()

    }, [])

    const loadTermin = async () => {

        let res = await getTermin(keyword);
        setTermin(res.data)

    }


    const searchHandler = async (e) => {

        e.preventDefault();


        if (jmbg.trim()) {
            history.push(`/termin/${jmbg}`)
          
            loadTermin()
            

        } else {
            history.push(`/`)
        }
    }

const removeHandler = (id)=>{
      if(!window.confirm("Da li ste sigurni ?")) return;

      removeTermin(id).then(res=>{
          toast.success('Uspesno ste otkazali termin.')
          loadTermin()
      })

    }

    return (
        <>
       
        <div className='p-5 text-center container-fluid' style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

                <h2>MOJ TERMIN</h2>

            </div>
            <div className='container-fluid'>
                <h2 className='text-center alert alert-info'>Pretrazi svoj termin</h2>



                <form onSubmit={searchHandler}>
                    <div className='form-group m-5' style={{backgroundColor: `#232f3e`}}>
                        <div className='row'>

                            <div className='col-md-10'>
                                <input ref={textInput} type='text' placeholder='UNESI JMBG' className='form-control m-2 text-center' onChange={(e) => setJmbg(e.target.value)} />


                            </div>
                            <div className='col-md-2 text-center'>
                                <button className='btn btn-info m-2'>PRETRAZI</button>

                            </div>
                        </div>

                    </div>

                    




                </form>


            </div>
            <div>
              

              {keyword == undefined ? 

                  <h1 className='text-center alert alert-info'>Nema termina. <br/>Unesite JMBG kako bi pronasli termin.</h1>
              :
                  
                  <Termin termin={termin} removeHandler={removeHandler} /> 
              }
            </div>

    
            

     
                

        

          



        </>

    )
}

export default MojTermin
