import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:3000/impresora3d/",
})

const getImpresoras3d = () => client.get();

const getImpresorasById = (id) => client.get(id);

const getImpresorasByMarca = (marca) => client.get(`?marca=${marca}`);

const addImpresora3d = (impresora) => client.post("",impresora);

const deleteImpresora3d = (id) => client.delete(id);

const editImpresora3d = (id,impresora) => client.put(id,impresora);

export {getImpresoras3d,getImpresorasById,getImpresorasByMarca,addImpresora3d,deleteImpresora3d,editImpresora3d}