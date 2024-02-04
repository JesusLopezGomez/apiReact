import { Fragment, useEffect, useState } from "react";
import { getFilamentos, deleteFilamentoP } from "../../services/filamentoService";
import { Link } from "react-router-dom";

export default function Filamentos() {
    const [filamentos, setFilamentos] = useState([]);

    useEffect(() => {
        getFilamentos().then((response) => {
            setFilamentos(response.data);
        }).catch((error) => console.log(error));
    }, [])

    const deleteFilamento = (e) => {
        let idDel = e.target.id;
        console.log(idDel)
        deleteFilamentoP(idDel).then(()=>{
            setFilamentos(filamentos.filter((filamento) => filamento._id !== idDel));
        }).catch((error) => console.log(error));
    }

    const FilamentosC = () => filamentos.map((filamento, index) => {
        return (
            <Fragment key={index}>
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img src="https://ventanillavirtual.micm.gob.do/Content/Fotos/nodisponible.png" className="card-img-top" style={{width:200+'px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{filamento.marca}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Material: {filamento.material}</li>
                        <li className="list-group-item">Peso: {filamento.peso}</li>
                        <li className="list-group-item">Precio: {filamento.precio}</li>
                    </ul>
                    <Link to={`/manageFilamento/${filamento._id}`} className="btn btn-warning">Editar</Link>
                    <button className="btn btn-danger" id={filamento._id} onClick={deleteFilamento}>Eliminar</button>
                </div>
            </Fragment>        
        )});

    return (
        <>
            <h2>Todas los filamentos</h2>
            <div className="containerR">
                <FilamentosC></FilamentosC>
            </div>
        </>
    );
}