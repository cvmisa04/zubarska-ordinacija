import axios from 'axios'


export const register = async(data)=>{
    return await axios.post('/api/register',data);
}