import React from 'react'
import { Link } from 'react-router-dom'

const Termin = ({removeHandler=(f)=>f,termin}) => {
    
    return (

        <div className='container-fluid'>
        <table class="table table-success table-striped">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ime</th>
                    <th scope="col">Prezime</th>
                    <th scope="col">JMBG</th>
                    <th scope="col">Email</th>
                    <th scope="col">Datum</th>
                    <th scope="col">Vreme</th>
                    <th scope="col">AKCIJA</th>
                </tr>
            </thead>
            <tbody>
                {termin.map(tr => (

                    <tr key={tr._id}>
                        <th scope="row">1</th>
                        <td>{tr.ime}</td>
                        <td>{tr.prezime}</td>
                        <td>{tr.jmbg}</td>
                        <td>{tr.email}</td>
                        <td>{tr.values.datum}</td>
                        <td>{tr.values.vreme}</td>
                        <td><Link to={`/termin/${tr._id}`} ><button className='btn btn-danger btn-sm' onClick={()=>removeHandler(tr._id)}>OTKAZI TERMIN</button></Link></td>
                       
                    </tr>
                ))}


            </tbody>

        </table>

    </div>
    )
}

export default Termin
