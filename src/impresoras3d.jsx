import { Fragment, useEffect, useState } from "react";
import { deleteImpresora3d,getImpresoras3d } from "./services/impresoras3dService";
import "./impresoras3d.css";
export default function Impresoras3d() {
    const [impresoras3d, setImpresoras3d] = useState([]);

    useEffect(() => {
        getImpresoras3d().then((response) => {
            setImpresoras3d(response.data);
        }).catch((error) => console.log(error));
    }, [impresoras3d.length])

    const deleteImpresora = (e) => {
        let idDel = e.target.id;
        deleteImpresora3d(idDel).then(()=>{
            setImpresoras3d(impresoras3d.filter((impresora) => impresora._id !== idDel));
        }).catch((error) => console.log(error));
    }

    const Impresoras = () => impresoras3d.map((impresora, index) => {
        return (
            <Fragment key={index}>
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img src="https://ventanillavirtual.micm.gob.do/Content/Fotos/nodisponible.png" className="card-img-top" style={{width:200+'px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{impresora.marca}</h5>
                        <p className="card-text">{impresora.modelo}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Medida: {impresora.medida}</li>
                        <li className="list-group-item">Email: {impresora.email}</li>
                        <li className="list-group-item">Precio: {impresora.precio}</li>
                    </ul>
                    <button className="btn btn-danger" id={impresora._id} onClick={deleteImpresora}>Eliminar</button>
                </div>
            </Fragment>        
        )});

    return (
        <>
            <h2>Todas las impresoras3D</h2>
            <div className="containerR">
                <Impresoras></Impresoras>
            </div>
        </>
    );
}