import { Fragment, useEffect, useState } from "react";
import { getImpresorasById } from "./services/impresoras3dService";
import "./impresoras3d.css";
export default function Impresoras3dById(){
    const [impresora3d,setImpresora3d] = useState({});
    const [id,setId] = useState(null);


    useEffect(() => {
        getImpresorasById(id).then((response) => {
            setImpresora3d(response.data);
        }).catch((error) => console.log(error));
    },[id])

    const handleId = (e) => {
        setId(e.target.value)
    }

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
        <h2>Impresora3D by <input type="text" name="id" className="idInput" onChange={handleId}/></h2>
        <div className="containerR">
        
        <Impresoras></Impresoras>
        </div>
    </>
    );
}