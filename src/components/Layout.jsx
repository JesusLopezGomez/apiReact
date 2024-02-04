import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Layout = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function haddleChange(e) {
    setInput(e.target.value);
  }

  function navigateF() {
    navigate(`/search/${input}`);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="impresorasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Impresoras 3D
                </a>
                <ul className="dropdown-menu" aria-labelledby="impresorasDropdown">
                  <li className="nav-item">
                    <Link to="/impresoras3d" className="dropdown-item">Ver todas</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/addImpresora3d" className="dropdown-item">Añadir impresora 3D</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="repuestosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Repuestos
                </a>
                <ul className="dropdown-menu" aria-labelledby="repuestosDropdown">
                  <li className="nav-item">
                    <Link to="/repuestos" className="dropdown-item">Ver todos</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manageRepuesto" className="dropdown-item">Añadir repuesto</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="filamentosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Filamentos
                </a>
                <ul className="dropdown-menu" aria-labelledby="filamentosDropdown">
                  <li className="nav-item">
                    <Link to="/filamentos" className="dropdown-item">Ver todos</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manageFilamento" className="dropdown-item">Añadir filamento</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link active">Registro</Link>
              </li>
            </ul>
            <div className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={haddleChange} />
              <button className="btn btn-outline-success" type="submit" onClick={navigateF}>Search</button>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;