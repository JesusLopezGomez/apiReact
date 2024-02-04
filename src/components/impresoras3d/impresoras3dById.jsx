import { Fragment, useEffect, useState } from "react";
import { getImpresorasById } from "../../services/impresoras3dService";
import "./impresoras3d.css";
import { useParams } from "react-router-dom";
export default function Impresoras3dById(){
    const [impresora3d,setImpresora3d] = useState({});
    const { id } = useParams();


    useEffect(() => {
        getImpresorasById(id).then((response) => {
            console.log(response.data)
            setImpresora3d(response.data);
        }).catch((error) => console.log(error));
    },[id])


    const Impresoras = () =>{
        return (
            <Fragment key={1}>
                <div className="card" style={{width: 18 + 'rem'}}>
                <img src="https://ventanillavirtual.micm.gob.do/Content/Fotos/nodisponible.png" className="card-img-top" style={{width:200+'px'}}/>
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
        <h2>Impresora3D by </h2>
        <div className="containerR">
        
        <Impresoras></Impresoras>
        </div>
    </>
    );
}