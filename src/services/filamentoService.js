import axios from "axios";

const client = axios.create({
    baseURL : "https://proyecto-node-beryl.vercel.app/filamento/"
})

const getFilamentos = () => client.get();

const getFilamentoId = (id) => client.get(id);

const addFilamento = (filamento) => client.post("",filamento);

const editFilamento = (filamento,id) => client.put(id,filamento);

const deleteFilamentoP = (id) => client.delete(id);

export {getFilamentos,getFilamentoId,addFilamento,editFilamento,deleteFilamentoP}