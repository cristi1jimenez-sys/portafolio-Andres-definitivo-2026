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
}