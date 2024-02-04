import {useState } from "react"
import { addUsuario } from "../../services/userService";

export default function Register() {
    const [usuario, setUsuario] = useState({
        email:'',
        username:'',
        name:'',
        role:'user',
        password:''
    });

    const [add,setAdd] = useState(false);

    const handleManage = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value})
    }

    const saveUser = (e) => {
        e.preventDefault();
        addUsuario(usuario).then((usuario) => setAdd(true))
        .catch(error => console.log(error)); 
    }

    return (
        <div className="container mt-5">
        <h2>Registro</h2>
        {(add && (<div className="alert alert-success" role="alert">
        Usuario registrado con éxito
        </div>))}
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" className="form-control" id="email" name="email" onChange={handleManage} value={usuario.email}/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="modenamelo" name="name" onChange={handleManage} value={usuario.name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                <input type="text" className="form-control" id="username" name="username" onChange={handleManage} value={usuario.username}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleManage} value={usuario.password}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={saveUser} key={1}>Guardar</button>
        </form>
    </div>    
    );
}