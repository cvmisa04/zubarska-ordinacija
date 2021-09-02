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

    return await axios.get(`/termin?jmbg=${jmbg}`,config)
}

export const removeTermin= async(id)=>{
 return await axios.delete(`/termin/${id}`)
}

export const allTermin = async()=>{
    return await axios.get('/termini');
}
