import { BrowserRouter, Routes, Route } from "react-router-dom"
import Impresoras3d from "./components/impresoras3d/impresoras3d";
import Layout from "./components/Layout";
import AddImpresora3d from "./components/impresoras3d/addImpresora3d";
import Impresoras3dById from "./components/impresoras3d/impresoras3dById";
import Repuestos from "./components/repuestos/repuestos";
import ManageRepuesto from "./components/repuestos/manageRepuesto";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="impresoras3d" element={<Impresoras3d />}></Route>
            <Route path="addImpresora3d" element={<AddImpresora3d />}></Route>
            <Route path="editImpresora3d/:id" element={<AddImpresora3d />}></Route>
            <Route path="search/:id" element={<Impresoras3dById />}></Route>
            <Route path="repuestos" element={<Repuestos />}></Route>
            <Route path="manageRepuesto" element={<ManageRepuesto></ManageRepuesto>}></Route>
            <Route path="manageRepuesto/:id" element={<ManageRepuesto></ManageRepuesto>}></Route>
            <Route path="*" element={<Impresoras3d />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;