import { Fragment, useEffect, useState } from "react";
import { addImpresora3d } from "./services/impresoras3dService";
import "./impresoras3d.css";
export default function AddImpresora3d() {
    const [impresora3d, setImpresora3d] = useState({
        marca:'',
        modelo:'',
        medida:'',
        email:'',
        precio:'',
    });

    const handleManage = (e) => {
        setImpresora3d({...impresora3d, [e.target.name]: e.target.value})
    }

    const saveImpresora3d = (e) => {
        e.preventDefault();
        addImpresora3d(impresora3d).then(() => {
            console.log("Impresora añadida con éxito");
        }).catch((error) => console.log(error));
    }

    return (
        <div className="container mt-5">
            <h2>Añadir impresora 3D</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="marca" className="form-label">Marca:</label>
                    <input type="text" className="form-control" id="marca" name="marca" onChange={handleManage} />
                </div>
                <div className="mb-3">
                    <label htmlFor="modelo" className="form-label">Modelo:</label>
                    <input type="text" className="form-control" id="modelo" name="modelo" onChange={handleManage} />
                </div>
                <div className="mb-3">
                    <label htmlFor="medida" className="form-label">Medida:</label>
                    <input type="text" className="form-control" id="medida" name="medida" onChange={handleManage} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" onChange={handleManage} />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input type="text" className="form-control" id="precio" name="precio" onChange={handleManage} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveImpresora3d}>Añadir</button>
            </form>
        </div>
    );
}