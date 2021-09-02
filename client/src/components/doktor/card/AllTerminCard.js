import React from 'react'



const AllTerminCard = ({t,removeHandler}) => {


    return (
        <div className="col col-md-3 m-4 p-4" style={{backgroundColor:"#f8ac59",color:'#ffffff'}}>
        <div className="widget yellow-bg p-xl">
            <h2>{t.ime}</h2>
            <ul className="list-unstyled m-t-md">
                <li>
                    <span className="fa fa-envelope m-r-xs"></span>
                    <label>Email:</label>
                    {t.email}
                </li>
                <li>
                    <span className="fa fa-home m-r-xs"></span>
                    <label>JMBG:</label>
                    {t.jmbg}
                </li>
                <li>
                    <span className="fa fa-phone m-r-xs"></span>
                    <label>Datum:</label>
                    {t.values.datum}
                </li>
                <li>
                    <span className="fa fa-phone m-r-xs"></span>
                    <label>Vreme:</label>
                    {t.values.vreme}
                </li>
            </ul>
            <button className='btn btn-danger btn-sm' onClick={()=>removeHandler(t._id)}>OTKAZI TERMIN</button>  
        </div> 
       
    </div>

    )
}

export default AllTerminCard
