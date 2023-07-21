import axios from "axios";

const BASE_URL = 'https://mern-stack-clone-airbnb.onrender.com/api/v1';

export const axiosPrivate = axios.create(
  {baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true}
)


export const axiosNormal = axios.create(
  {baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true}
)