import axios from 'axios'


export const createTerm = async (data)=>{
   const config = {
      headers: {
          "Content-Type": "application/json"
      }
  }

   return await axios.post('/api/create-term',data,config)

}

export const getTermin = async(jmbg)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'accept':'application/json'
        },
      };

    return await axios.get(`/api/termin?jmbg=${jmbg}`,config).then(response=>console.log(response)).catch(error=>{
      if(error.response){
        console.log(error.response.status)
      }else if (error.request){
        console.log(error.request)
      }
    })
}

export const removeTermin= async(id)=>{
 return await axios.delete(`/api/termin/${id}`)
}

export const allTermin = async()=>{
    return await axios.get('/api/termini');
}
