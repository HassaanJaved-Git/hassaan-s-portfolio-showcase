import { useMemo, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  // ensure engine loads full build once on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      // enable the particles canvas to fill the entire screen and sit behind other content
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        // when canvas is positioned behind other elements the engine
        // can't receive mouse coordinates from it, so listen on the window
        detectsOn: "window" as const,
        events: {
          onHover: {
            enable: true,
            // responsive movement around the cursor
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 150,   // larger area of effect
            duration: 1,     // longer duration for smoother motion
            speed: 1,        // add speed parameter if supported
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: { value: "#2dd4a8" },
        links: {
          color: "#2dd4a8",
          distance: 100,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,          // slower baseline movement for a gentler feel
          direction: "none" as const,
          random: true,
          straight: true,
          outModes: { default: "out" as const },
        },
        number: {
          density: { enable: true },
          value: 400, 
        },
        opacity: {
          value: { min: 0.001, max: 0.005 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 20, max: 80 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // fullScreen mode takes care of sizing and stacking
  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBackground;
