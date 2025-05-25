import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",//URL da API Django
})

//interceptador para adicionar o token automaticamente nas requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export default api;