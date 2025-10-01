"use client";

import { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // سبک‌تر از loadFull هست

import { useEffect, useState } from "react";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  // initialize
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // اگه همه امکانات رو خواستی میتونی loadFull رو بیاری
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 6.4,
          },
        },
      },
      particles: {
        color: {
          value: "#e68e2e",
        },
        links: {
          color: "#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesContainer;
