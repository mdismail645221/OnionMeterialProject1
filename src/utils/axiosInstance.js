import axios from "axios";



const baseURL = 'http://localhost:5000/';

const headers = {
    'Content-type': 'application/json',
    Accept: 'application/json'
}

const token = localStorage.getItem('token');

if(token){
    headers.Authorization = `Bearer ${token}`
}


export const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers
  });