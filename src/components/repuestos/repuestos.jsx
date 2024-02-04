import { Fragment, useEffect, useState } from "react"
import { getRepuestos } from "../../services/repuestosService";
import { Link } from "react-router-dom";

export default function Repuestos() {
    const [repuestos, setRepuestos] = useState([]);

    useEffect(() => {
        getRepuestos().then((response) => {
            setRepuestos(response.data);
        }).catch(error => console.log(error));
    }, [])

    const Repuestos = () => repuestos.map((respuesto, index) => {
        return(
            <Fragment key={index}>
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img src="https://ventanillavirtual.micm.gob.do/Content/Fotos/nodisponible.png" className="card-img-top" style={{ width: 200 + 'px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{respuesto.marca}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tipo: {respuesto.tipo}</li>
                        <li className="list-group-item"><b>Modelo impresora3d compatible:</b> {respuesto.modeloImpresora}</li>
                        <li className="list-group-item">Precio: {respuesto.precio}</li>
                        <Link to={`/manageRepuesto/${respuesto._id}`} className="btn btn-warning">Editar</Link>
                    </ul>
                </div>
            </Fragment>
        )
    })

    return (
        <>
            <h1>Repuestos</h1>
            <div className="containerR">
            <Repuestos />
            </div>
        </>
    )
}