import axios from 'axios';

export const login = async (email='',password='') => {
    const { data } = await axios.post('https://base-back-end-api.herokuapp.com/api/v1/sesion/login',
        {email,password});
    return data;
}