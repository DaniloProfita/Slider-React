import React, { useEffect, useState } from 'react';
import PrimerSlider from './components/PrimerSlider';
import SegundoSlider from './components/SegundoSlider';
import TercerSlider from './components/TercerSlider';

const App = () => {
  const [mostrarPrimerSlider, setMostrarPrimerSlider] = useState(true);
  const [mostrarSegundoSlider, setMostrarSegundoSlider] = useState(false);
  const [mostrarTercerSlider, setMostrarTercerSlider] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mostrarPrimerSlider) {
        setMostrarPrimerSlider(false);
        setMostrarSegundoSlider(true);
        setMostrarTercerSlider(false);
      } else if (mostrarSegundoSlider) {
        setMostrarPrimerSlider(false);
        setMostrarSegundoSlider(false);
        setMostrarTercerSlider(true);
      } else if (mostrarTercerSlider) {
        setMostrarPrimerSlider(true);
        setMostrarSegundoSlider(false);
        setMostrarTercerSlider(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mostrarPrimerSlider, mostrarSegundoSlider, mostrarTercerSlider]);

  return (
    <div className='w-screen h-screen sm:h-[700px] bg-black text-white'>
      <div className='relative w-full h-full'>
        <PrimerSlider
          mostrar={mostrarPrimerSlider}
          onClick={() => {
            setMostrarPrimerSlider(true);
            setMostrarSegundoSlider(false);
            setMostrarTercerSlider(false);
          }}
        />
        <SegundoSlider
          mostrar={mostrarSegundoSlider}
          onClick={() => {
            setMostrarPrimerSlider(false);
            setMostrarSegundoSlider(true);
            setMostrarTercerSlider(false);
          }}
        />
        <TercerSlider
          mostrar={mostrarTercerSlider}
          onClick={() => {
            setMostrarPrimerSlider(false);
            setMostrarSegundoSlider(false);
            setMostrarTercerSlider(true);
          }}
        />
      </div>
    </div>
  );
};

export default App;