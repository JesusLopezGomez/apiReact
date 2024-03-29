import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:3000/repuesto/",
})

const getRepuestos = () => client.get();

const getRepuestosById = (id) => client.get(id);

const addRepuesto = (repuesto) => client.post("",repuesto);

const editRepuesto = (repuesto,id) => client.put(id,repuesto);


export {getRepuestos,addRepuesto,editRepuesto,getRepuestosById}