import axios from "axios"

export const axiosIntance  = axios.create({
  baseURL: 'https://some-domain.com/api/',
});
