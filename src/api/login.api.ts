import axios from 'axios';

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
            axios.defaults.headers.post['x-access-tokens'] = data.token;
            axios.defaults.headers.get['x-access-tokens'] = data.token;
            axios.defaults.headers.put['x-access-tokens'] = data.token;
            axios.defaults.headers.delete['x-access-tokens'] = data.token;
        }
        return {...data,res:status};
    } catch(error){
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
    } catch (err) {
        error.messaje += err.toString();
        console.log(err);
        return error;
    }
}