import axios from "axios";

const client = axios.create({
    baseURL:"https://proyecto-node-beryl.vercel.app/usuario/",
})

const getUsuarios = () => client.get();

const getUsuarioById = (id) => client.get(id);

const addUsuario = (usuario) => client.post("",usuario);

const editUsuario = (usuario,id) => client.put(id,usuario);


export {getUsuarios,addUsuario,editUsuario,getUsuarioById}