import axios from 'axios';

export const login = async (email='',password='') => {
    const { data } = await axios.post('/api/v1/sesion/login',
        {email,password});
    return data;
}