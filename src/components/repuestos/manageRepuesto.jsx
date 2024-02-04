import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addRepuesto, editRepuesto, getRepuestosById } from "../../services/repuestosService";

export default function ManageRepuesto(){
    const { id } = useParams();

    
    const [repuesto,setRepuesto] = useState({
        marca:'',
        tipo:'',
        modeloImpresora:'',
        precio:''
    })
    useEffect(() => {
        getRepuestosById(id).then((response) => {
            setRepuesto(response.data)
        }).catch(error => console.log(error));
    },[id])
    
    function handleManage(e){
        setRepuesto({... repuesto , [e.target.name]:e.target.value});
    }

    function manageRepuesto(e){
        e.preventDefault();
        if(id){
            editRepuesto(repuesto,id).then(reponse => console.log("Repuesto editado con éxito"))
            .catch(error => console.log(error));
        }else{
            addRepuesto(repuesto).then(reponse => console.log("Repuesto añadido con éxito"))
            .catch(error => console.log(error));
        }
    }

    return (
        <div className="container mt-5">
        <h2>{(!id ? 'Añadir': 'Editar')} repuesto</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca:</label>
                <input type="text" className="form-control" id="marca" name="marca" onChange={handleManage} value={repuesto.marca}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo:</label>
                <input type="text" className="form-control" id="tipo" name="tipo" onChange={handleManage} value={repuesto.tipo}/>
            </div>
            <div className="mb-3">
                <label htmlFor="modeloImpresora" className="form-label">Modelo de impresora compatible:</label>
                <input type="text" className="form-control" id="modeloImpresora" name="modeloImpresora" onChange={handleManage} value={repuesto.modeloImpresora}/>
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio:</label>
                <input type="text" className="form-control" id="precio" name="precio" onChange={handleManage} value={repuesto.precio}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={manageRepuesto}>{(id ? 'Editar' : 'Guardar')}</button>
        </form>
    </div>    
    );
}