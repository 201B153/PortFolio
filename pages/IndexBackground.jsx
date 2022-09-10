import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
// import { loadSlim } from 'tsparticles-slim';

const IndexBackground = (props) => {
  const options = useMemo(() => {
    return {
      autoPlay: true,
      background: {
        color: {
          value: '#000',
        },
        image: '',
        position: '',
        repeat: '',
        size: '',
        opacity: 1,
      },
      backgroundMask: {
        composite: 'destination-out',
        cover: {
          color: {
            value: '#fff',
          },
          opacity: 1,
        },
        enable: false,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: true,
            mode: [],
          },
          onDiv: {
            selectors: [],
            enable: true,
            mode: [],
            type: 'circle',
          },
          onHover: {
            enable: true,
            mode: 'trail',
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: true,
        },
        modes: {
          slow: {
            factor: 3,
            radius: 200,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: 'ease-out-quad',
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: 'ease-out-quad',
              selectors: [],
            },
          },
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 5,
            particles: {
              color: {
                value: '#ff0000',
                animation: {
                  enable: true,
                  speed: 400,
                  sync: true,
                },
              },
              collisions: {
                enable: false,
              },
              links: {
                enable: false,
              },
              move: {
                outModes: {
                  default: 'destroy',
                },
                speed: 2,
              },
              size: {
                value: 5,
                animation: {
                  enable: true,
                  speed: 5,
                  minimumValue: 1,
                  sync: true,
                  startValue: 'min',
                  destroy: 'max',
                },
              },
            },
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: '#ffffff',
                },
                stop: {
                  value: '#000000',
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: '#000000',
              },
              length: 2000,
            },
          },
        },
      },
      manualParticles: [],
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
      particles: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        collisions: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          enable: true,
          mode: 'bounce',
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: '#ff0000',
          animation: {
            h: {
              count: 0,
              enable: true,
              offset: 0,
              speed: 50,
              decay: 0,
              sync: false,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
          },
        },
        destroy: {
          mode: 'none',
          split: {
            count: 1,
            factor: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 3,
            },
            rate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
          },
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: 'none',
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
            },
            enable: false,
            options: {
              sides: 6,
              turnSteps: 30,
              angle: 30,
            },
          },
          outModes: {
            default: 'out',
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fillColor: {
              value: '#000000',
            },
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
            factor: 1000,
          },
          limit: 0,
          value: 100,
        },
        opacity: {
          random: {
            enable: true,
            minimumValue: 0.3,
          },
          value: {
            min: 0.3,
            max: 0.8,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 0.5,
            decay: 0,
            sync: false,
            destroy: 'none',
            startValue: 'random',
            minimumValue: 0.3,
          },
        },
        reduceDuplicates: false,
        rotate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: 'clockwise',
          path: false,
        },
        shadow: {
          blur: 0,
          color: {
            value: '#000',
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          options: {},
          type: 'circle',
        },
        size: {
          random: {
            enable: true,
            minimumValue: 1,
          },
          value: {
            min: 1,
            max: 3,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 3,
            decay: 0,
            sync: false,
            destroy: 'none',
            startValue: 'random',
            minimumValue: 1,
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        life: {
          count: 0,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            sync: false,
          },
          duration: {
            random: {
              enable: false,
              minimumValue: 0.0001,
            },
            value: 0,
            sync: false,
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: 'vertical',
          speed: 25,
        },
        tilt: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: 'clockwise',
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: 'random',
          },
          consent: false,
          distance: 100,
          enable: true,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: '#000',
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      style: {},
      themes: [],
      zLayers: 100,
      emitters: [],
    };
    console.log('hello');
    // return {
    //   fpsLimit: 60,
    //   backgroundMode: {
    //     enable: true,
    //     zIndex: 0,
    //   },
    //   particles: {
    //     number: {
    //       value: 180,
    //       density: {
    //         enable: true,
    //         area: 800,
    //       },
    //     },
    //     color: {
    //       value: '#ff0000',
    //       animation: {
    //         enable: true,
    //         speed: 20,
    //         sync: true,
    //       },
    //     },
    //     shape: {
    //       type: 'circle',
    //       options: {
    //         polygon: {
    //           sides: 5,
    //         },
    //         image: {
    //           src: 'https://cdn.matteobruni.it/images/particles/github.svg',
    //           width: 100,
    //           height: 100,
    //         },
    //       },
    //     },
    //     stroke: {
    //       width: 0,
    //     },
    //     opacity: {
    //       value: 0.5,
    //       random: false,
    //       animation: {
    //         enable: false,
    //         speed: 3,
    //         minimumValue: 0.1,
    //         sync: false,
    //       },
    //     },
    //     size: {
    //       value: 3,
    //       random: true,
    //       animation: {
    //         enable: false,
    //         speed: 20,
    //         minimumValue: 0.1,
    //         sync: false,
    //       },
    //     },
    //     links: {
    //       enable: true,
    //       distance: 100,
    //       color: '#ffffff',
    //       opacity: 0.4,
    //       width: 1,
    //     },
    //     move: {
    //       enable: true,
    //       speed: 6,
    //       direction: 'none',
    //       random: false,
    //       straight: false,
    //       outMode: 'out',
    //       attract: {
    //         enable: false,
    //         rotateX: 600,
    //         rotateY: 1200,
    //       },
    //     },
    //   },
    //   interactivity: {
    //     detectsOn: 'canvas',
    //     events: {
    //       onHover: {
    //         enable: true,
    //         mode: 'repulse',
    //       },
    //       onClick: {
    //         enable: true,
    //         mode: 'push',
    //       },
    //       resize: true,
    //     },
    //     modes: {
    //       grab: {
    //         distance: 400,
    //         links: {
    //           opacity: 1,
    //         },
    //       },
    //       bubble: {
    //         distance: 400,
    //         size: 40,
    //         duration: 2,
    //         opacity: 0.8,
    //       },
    //       repulse: {
    //         distance: 200,
    //       },
    //       push: {
    //         quantity: 4,
    //       },
    //       remove: {
    //         quantity: 2,
    //       },
    //     },
    //   },
    //   detectRetina: true,
    //   background: {
    //     color: '#000000',
    //     image:
    //       'https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    //     position: '50% 50%',
    //     repeat: 'no-repeat',
    //     size: 'cover',
    //   },
    // };
  }, []);

  const particlesInit = useCallback((engine) => {
    // loadSlim(engine); // Doesn't have mouse trail
    loadFull(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default IndexBackground;
