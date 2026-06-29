"use client";
import { tsParticles } from "@tsparticles/engine";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";
let container;

await loadHyperspacePreset(tsParticles);

export async function start() {
  if (container) {
    container.destroy();
  }

  container = await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "hyperspace",
      background: {
        color: "#0d0d0d"
      },
      move: {
        speed: 3
      }
    },

  });
}

export function stop() {
  if (container) {
    container.pause();
  }
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

