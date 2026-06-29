"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  // Inicializamos el motor de forma estable
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: { value: "#0a0a0a" }, // Fondo oscuro
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Hace que las partículas huyan del cursor
        },
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: ["#FFFFFF", "#a855f7"] }, // Morado y Blanco
      links: {
        color: "#a855f7",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1, // Velocidad suave
        straight: false,
      },
      number: {
        density: { enable: true, area: 900 },
        value: 180, // Cantidad de partículas
      },
      opacity: { value: 0.3 },
      shape: { type: "oval" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

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