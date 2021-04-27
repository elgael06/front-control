import axios from "axios";
import responseDefault from "../interface/responseDefault.interface";
import userInitial from '../interface/userInitial.interface';


export const getAllUsers = async () => {
    try {
        const { data, status } = await axios.get('/api/v1/user', );        
        return status===200 ? data : [];
    } catch (err) {
        console.error(err);
        return []
    }
}
export const getUsersEmail = async (email='') => {
    try {
        const { data, status } = await axios.get(`/api/v1/user?email="${email}"`, );        
        return status===200 ? data : null;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const insertUser = async (user:userInitial):Promise<responseDefault> => {
    const { data } = await axios.post('/api/v1/user', user);
    return data;
}

export const updatetUser = async (id:string,user:userInitial):Promise<responseDefault> => {
    const { data } = await axios.post(`/api/v1/user/${id}`, user);
    return data;
}

export const getAUserId = async (id='') => {
    try {
        const { data, status } = await axios.get(`/api/v1/user/${id}`);        
        return status===200 ? {...data.user,puesto:data.data.puesto} : null;
    } catch (err) {
        console.error(err);
        return null
    }
}