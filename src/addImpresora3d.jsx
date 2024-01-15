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


    return (
        <div>
            <h2>Añadir impresora 3d</h2>
            <form>
                <div>
                    <label htmlFor="marca">
                        Marca:
                        <input type="text" name="marca" id="marca" onChange={handleManage}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="marca">
                        Modelo:
                        <input type="text" name="modelo" id="modelo" onChange={handleManage}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="marca">
                        Medida:
                        <input type="text" name="medida" id="medida" onChange={handleManage}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="marca">
                        Email:
                        <input type="text" name="email" id="email" onChange={handleManage}/>
                    </label>
                </div>
                <button type="submit">Añadir</button>
            </form>
        </div>
    );
}