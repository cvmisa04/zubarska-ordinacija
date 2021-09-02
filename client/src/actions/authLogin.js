import axios from 'axios'

export const login = async(data)=>{
    return axios.post('/api/login',data)
}