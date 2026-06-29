"use client";

import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";

export default function SpaceBackground() {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  // 1. Inicializar el motor de partículas una sola vez al montar el componente
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadHyperspacePreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. Opciones de configuración de la animación libres de errores de tipo
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

  // Guardamos la instancia del contenedor de manera segura
  const particlesLoaded = async (container) => {
    if (container) {
      containerRef.current = container;
    }
  };

  // Renderizar solo cuando el motor esté listo
  if (!init) return null;

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

