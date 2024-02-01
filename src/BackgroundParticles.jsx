import Particles from "react-particles";
import { memo, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#0891b2", "#7c3aed", "#db2777", "#16a34a"],
          },
          shape: {
            type: "edge",
            stroke: {
              width: 0,
              color: "#1d8cf8",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 400,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 300,
            color: "#93c5fd",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
export default memo(BackgroundParticles);
