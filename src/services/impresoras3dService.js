import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:3000/impresora3d/",
})

export const getImpresoras3d = () => client.get();

export const getImpresorasById = (id) => client.get(id);

export const addImpresora3d = (impresora) => client.post(impresora);