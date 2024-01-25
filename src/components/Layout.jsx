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
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/impresoras3d" className="nav-link active">Impresoras 3D</Link>
              </li>
              <li className="nav-item">
                <Link to="/addImpresora3d" className="nav-link active">Añadir impresora 3D </Link>
              </li>
              <li className="nav-item">
                <Link to="/repuestos" className="nav-link active">Repuestos</Link>
              </li>
              <li className="nav-item">
                <Link to="/manageRepuesto" className="nav-link active">Añadir repuesto</Link>
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