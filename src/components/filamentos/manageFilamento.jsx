import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addFilamento, editFilamento, getFilamentoId } from "../../services/filamentoService";

export default function ManageFilamento(){
    const { id } = useParams();

    const [filamento,setFilamento] = useState({
        marca:'',
        material:'',
        peso:'',
        precio:''
    })
    
    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);

    useEffect(() => {
        getFilamentoId(id).then((response) => {
            setFilamento(response.data)
        }).catch(error => console.log(error));
    },[id])
    
    function handleManage(e){
        setFilamento({... filamento , [e.target.name]:e.target.value});
    }

    function manageFilamento(e){
        e.preventDefault();
        if(id){
            editFilamento(filamento,id).then(reponse => setEdit(true))
            .catch(error => console.log(error));
        }else{
            addFilamento(filamento).then(reponse => setAdd(true))
            .catch(error => console.log(error));
        }
    }

    return (
        <div className="container mt-5">
        {(add && <div className="alert alert-success">Filamento añadido con éxito</div>)}
        {(edit && <div className="alert alert-success">Filamento editado con éxito</div>)}
        <h2>{(!id ? 'Añadir': 'Editar')} filamento</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca:</label>
                <input type="text" className="form-control" id="marca" name="marca" onChange={handleManage} value={filamento.marca}/>
            </div>
            <div className="mb-3">
                <label htmlFor="material" className="form-label">Material:</label>
                <input type="text" className="form-control" id="material" name="material" onChange={handleManage} value={filamento.material}/>
            </div>
            <div className="mb-3">
                <label htmlFor="peso" className="form-label">Peso:</label>
                <input type="text" className="form-control" id="peso" name="peso" onChange={handleManage} value={filamento.peso}/>
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio:</label>
                <input type="text" className="form-control" id="precio" name="precio" onChange={handleManage} value={filamento.precio}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={manageFilamento}>{(id ? 'Editar' : 'Guardar')}</button>
        </form>
    </div>    
    );
}