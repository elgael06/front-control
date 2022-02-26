import axios from 'axios';
import setToken from '../functions/setToken';

export const login = async (username = '', password = '') => {
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
    try {
        const { data,status } = await axios.post('/api/v1/sesion/login',
            { email: username }, {
            headers: {
                'Authorization': `Basic ${token}`
            },
        });
        if (status === 200) {  
            setToken(data.token);
        }
        return {...data,res:status};
    } catch(error: any){
        return {
            message: error.toString(),
            status: false,
            sesion:null
        }
    }
}

export const sendConfirmInfoLogin = async (datos: {
    email: string,
    phone: string,
    date: string,
    password: string,
    nPassword:string
}) => {
    
    const url = '/api/v1/user/confirm';
    const error = { messaje: 'Error en la respuesta! ', status: false };
    try {
        const { data, status } = await axios.post(url, datos);
        return status === 200 ? { ...data } : error;
    } catch (err: any) {
        error.messaje += err.toString();
        console.log(err);
        return error;
    }
}