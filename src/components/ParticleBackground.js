"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";

export default function SpaceBackground() {
  const [init, setInit] = useState(false);

  // 1. Inicializar el motor de partículas una sola vez al montar el componente
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadHyperspacePreset(engine);
    }).then(() => {
      setInit(false); // Cambiar a true si deseas que espere la carga completa
    });
  }, []);

  // 2. Opciones de configuración de la animación
  const options = {
    preset: "hyperspace",
    background: {
      color: "#0d0d0d",
    },
    particles: {
      move: {
        speed: 3,
      },
    },
  };

  // Opcional: Si quieres guardar la instancia del contenedor para pausar/reproducir
  const particlesLoaded = async (container) => {
    // Aquí tienes acceso al objeto 'container' por si necesitas usar container.pause() o container.play()
    console.log("Contenedor de partículas cargado", container);
  };

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}

export function resume() {
  if (container) {
    container.play();
  }


  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}

