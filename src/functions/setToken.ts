import axios from 'axios';

export default function setToken(token:string){
    axios.defaults.headers.post['x-access-tokens'] = token;
    axios.defaults.headers.get['x-access-tokens'] = token;
    axios.defaults.headers.put['x-access-tokens'] = token;
    axios.defaults.headers.delete['x-access-tokens'] = token;
}