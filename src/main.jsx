import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Impresoras3d from './impresoras3d.jsx'
import Impresoras3dById from './impresoras3dById.jsx'
import AddImpresora3d from './addImpresora3d.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Impresoras3d></Impresoras3d>
    <br></br>
    <Impresoras3dById id={"6564516a831d901024fa6f01"}></Impresoras3dById>
    <br></br>
    <AddImpresora3d></AddImpresora3d>
  </React.StrictMode>,
)
