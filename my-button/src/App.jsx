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
  const botonClase = mensaje === "Apagado" ? "boton-verde" : "boton-rojo";

  return (
    <div className="App">
      <h1>Estado del Botón</h1>
      <button className={botonClase} onClick={cambiarEstado}>{botonTexto}</button>
      <p>Estado: {botonTexto}</p>
    </div>
  );
}

export default App
