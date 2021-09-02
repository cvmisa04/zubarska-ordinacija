import React from 'react'
import "../404Error/style.css"


  

const My404Component = () => {
    const img = 'images/bg.jpg'

    return (
        <div className='container-fluid' style={{backgroundColor:"#a8cbf7"}}>
           	<div id="notfound" >
		<div className="notfound">
			<div className="notfound-404" >
				<h3 className='text-center' style={{ color:'red',fontSize: "190px",

  fontWeight: "900",
 


  }}>Oops!</h3>
			</div>
			<h2>404 - STRANICA NIJE PRONADJENA</h2>
			<p>Stranica koju tražite je možda uklonjena ili je njeno ime promenjeno ili je privremeno nedostupna..</p>
			<a href="/">Zakazi termin</a>
		</div>
	</div>
            
        </div>
    )
}

export default My404Component
