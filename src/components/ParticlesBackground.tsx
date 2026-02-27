import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#2dd4a8" },
          links: {
            color: "#2dd4a8",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true },
            value: 60,
          },
          opacity: {
            value: { min: 0.03, max: 0.12 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
