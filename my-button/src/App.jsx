import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState("Apagado");
  const [botonTexto, setBotonTexto] = useState("Encender");
  const cambiarEstado = () => {
    const nuevoMensaje = mensaje === "Apagado" ? "Encendido" : "Apagado";
    setMensaje(nuevoMensaje);
    const nuevoBotonTexto = nuevoMensaje === "Apagado" ? "Encender" : "Apagar";
    setBotonTexto(nuevoBotonTexto);
  };
  const botonClase = mensaje === "Apagado" ? "btn btn-outline-success" : "btn btn-outline-danger";

  return (
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
        </div>
        <div class="col">
          <div className="container">
            <h1>Estado del Botón</h1>
            <button type="button" className={botonClase} onClick={cambiarEstado}>{botonTexto}</button>
          </div>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
  );
}

export default App
