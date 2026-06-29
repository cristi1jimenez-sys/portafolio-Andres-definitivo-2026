"use client";

import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";
import type { Container } from "@tsparticles/engine";

export default function SpaceBackground() {
  const [init, setInit] = useState(false);
  // Usamos una referencia para guardar el contenedor de forma segura en React
  const containerRef = useRef<Container | null>(null); 

  // 1. Inicializar el motor de partículas una sola vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadHyperspacePreset(engine);
    }).then(() => {
      setInit(true); // Cambiado a true para saber que ya está listo
    });
  }, []);

  // 2. Opciones de configuración de la animación
  const options: any = {
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

  // Guardamos la instancia cuando el canvas esté listo en el DOM
  const particlesLoaded = async (container?: Container): Promise<void> => {
    if (container) {
      containerRef.current = container;
    }
  };

  // Funciones de control por si necesitas pausar o reanudar desde tu interfaz
  const pauseAnimation = () => {
    containerRef.current?.pause();
  };

  const resumeAnimation = () => {
    containerRef.current?.play();
  };

  // Si aún no se inicializa el motor, no renderizamos nada para evitar parpadeos
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

