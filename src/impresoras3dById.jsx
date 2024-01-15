import { Fragment, useEffect, useState } from "react";
import { getImpresorasById } from "./services/impresoras3dService";
import "./impresoras3d.css";
export default function Impresoras3dById({id}){
    const [impresora3d,setImpresora3d] = useState({});

    useEffect(() => {
        getImpresorasById(id).then((response) => {
            setImpresora3d(response.data);
        });
    },[])

    const Impresoras = () =>{
        return (
            <Fragment key={1}>
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{impresora3d.marca}</h5>
                        <p className="card-text">{impresora3d.modelo}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Medida: {impresora3d.medida}</li>
                        <li className="list-group-item">Email: {impresora3d.email}</li>
                        <li className="list-group-item">Precio: {impresora3d.precio}</li>
                    </ul>
                </div>
            </Fragment> 
        )}

    return (
    <>
        <h2>Impresora3D by {id}</h2>
        <div className="container">
        <Impresoras></Impresoras>
        </div>
    </>
    );
}