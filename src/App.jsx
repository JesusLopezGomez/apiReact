import { BrowserRouter, Routes, Route } from "react-router-dom"
import Impresoras3d from "./components/impresoras3d";
import Layout from "./components/Layout";
import AddImpresora3d from "./components/addImpresora3d";
import Impresoras3dById from "./components/impresoras3dById";

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
            <Route path="*" element={<Impresoras3d />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;