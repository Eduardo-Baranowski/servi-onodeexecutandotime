import axios from "axios"

const api = axios.create({
  baseURL: process.env.SYNC_URL
})

export default api;
