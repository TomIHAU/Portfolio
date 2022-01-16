export const part = [
  {
    background: {
      color: {
        value: "#2e1d17",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    fullScreen: {
      zIndex: -10,
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },

      modes: {
        repulse: {
          distance: 180,
          speed: 0.1,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        grab: {
          distance: 400,
        },
      },
    },
    particles: {
      color: {
        value: "#ccc",
      },
      links: {
        enable: false,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        spin: {},
      },
      number: {
        density: {
          enable: true,
          area: 100,
        },
        value: 80,
      },
      opacity: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.1,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 5,
        },
        animation: {
          enable: true,
          speed: 20,
          minimumValue: 0.1,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          color: {
            value: "#ffaaa0",
          },
        },
      },
    },
  },
  {
    background: {
      color: {
        value: "#000000",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    backgroundMask: {
      cover: {
        color: {
          value: "#000",
        },
      },
    },
    fullScreen: {
      zIndex: -10,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "attract",
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        grab: {
          distance: 400,
        },
      },
    },
    particles: {
      color: {
        value: "blue",
        animation: {
          h: {
            speed: 3,
          },
        },
      },
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 150,
        enable: true,
        opacity: 0.4,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        spin: {},
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.1,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 5,
        },
        animation: {
          enable: true,
          speed: 20,
          minimumValue: 0.1,
        },
      },
      twinkle: {
        lines: {
          enable: true,
          frequency: 0.005,
          color: {
            value: "#ff0000",
          },
        },
        particles: {
          enable: true,
          color: {
            value: "#ffff00",
          },
        },
      },
    },
  },
  {
    background: {
      color: {
        value: "#061125",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 1,
          opacity: 0.9,
          size: 40,
          speed: 3,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#6b411a",
      },
      links: {
        enable: false,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "out",
        random: true,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 550,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.01, sync: false },
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 90,
        anim: { enable: false, speed: 40, size_min: 0.2, sync: false },
      },
    },
    detectRetina: false,
  },
];
