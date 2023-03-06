import React, { useState, useEffect } from 'react'
import style from './Equipos.module.css'

const EquipoB = () => {
  const [puntos, setPuntos] = useState(0)
  const [ganador, setGanador] = useState(false)

  const sumarPunto = () => {
    setPuntos(puntos + 1)
  }

  const restarPunto = () => {
    if (puntos > 0) {
      setPuntos(puntos - 1)
    }
  }

  const resetPuntos = () => {
    setPuntos(0)
    setGanador(false)
  }

  useEffect(() => {
    if (puntos === 30) {
      setGanador(true)
    }
  }, [puntos])

  return (
    <div className={style.equipoContainer}>
      <h1>EQUIPO B</h1>
      {ganador ? (
        <div>
          <h2 className={style.ganador}>¡EQUIPO B ES EL GANADOR!</h2>
          <button onClick={resetPuntos}>Resetear Contador</button>
        </div>
      ) : (
        <>
          <p>{puntos}</p>
          <button onClick={sumarPunto}>+</button>
          <button onClick={restarPunto}>-</button>
        
        </>
      )}
    </div>
  )
}

export default EquipoB
