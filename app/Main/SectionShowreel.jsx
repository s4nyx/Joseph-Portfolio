/* eslint-disable react/jsx-key */
import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionShowreel = () => {
  const videoRef = useRef();
  const playButtonRef = useRef();
  const showreelItemRef1 = useRef();
  const showreelItemRef2 = useRef();
  const showreelItemRef3 = useRef();
  const showreelItemRef4 = useRef();
  // console.log("here");

  useEffect(() => {
    gsap.to(videoRef.current, {
      rotateY: "0deg",
      scale: "1",
      rotateX: "0deg",
      translateY: "0vh",
      overwrite: true,
      // scrollTrigger: {
      //   trigger: ".showreel",
      //   start: "top bottom",
      //   end: "top top",
      //   scrub: true,
      //   markers: false,
      // },
    });

    gsap.to(showreelItemRef1.current, {
      overwrite: true,
      delay: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef1.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef2.current, {
      delay: 0.1,
      opacity: 1,
      overwrite: true,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef2.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef3.current, {
      delay: 0.2,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      overwrite: true,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef3.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef4.current, {
      delay: 0.3,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      overwrite: true,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef4.current, start: "top 95%" },
    });

    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container">
          <div className="showreel-video-playbutton" ref={playButtonRef}>
            <Play fill="#010101" className="showreel-video-playbutton-icon" />
          </div>
          <div ref={videoRef} className="showreel-content-videobox">
            <div className="background">
              <div className="trail"></div>
            </div>
            <video
              src="/videos/ese.mp4"
              className="showreel-content-video"
              autoPlay="autoplay"
              muted
              playsInline={true}
              data-wf-ignore="true"
              preload="auto"
              loop
            />
          </div>
        </div>
        <div className="text-white text-center text-7xl font-bold mt-12">
          My Work Experience
        </div>
        <div className="showreel-content-row">
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef1}
          >
            <img
              src="/logos/spore.png"
              className="showreel-content-row-item-image rounded-full"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef2}
          >
            <img
              src="/logos/cision.jpg"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef3}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 206 141"
              className="scale-75 showreel-content-row-item-image current-fill text-white text-dark"
              xmlns="http://www.w3.org/2000/svg"
              data-v-3b869794=""
            >
              <path
                id="svg_1"
                d="m137.74662,114.5124a3.09,3.09 0 0 0 -3.1,3.09a3,3 0 0 0 3.11,3a3,3 0 0 0 2.95,-3.05a3.05,3.05 0 0 0 -2.96,-3.04zm-15.44,6.8a3.08,3.08 0 0 0 0.09,6.16a3.08,3.08 0 0 0 -0.09,-6.16zm81.33,-0.51c-6.19,-9.73 -12.46,-19.41 -18.66,-29.14a4.27,4.27 0 0 1 -0.63,-2.14c-0.06,-4.83 0,-9.67 0,-14.51a1.89,1.89 0 0 1 1.11,-2a6.93,6.93 0 0 0 3.28,-7.62a6.85,6.85 0 0 0 -6.07,-5.35c-2.18,-0.15 -4.38,-0.11 -6.57,-0.11c-4.52,0 -9,-0.07 -13.53,0.11a6.76,6.76 0 0 0 -6.28,5.4a7,7 0 0 0 3.44,7.66a1.63,1.63 0 0 1 0.95,1.72a91.36,91.36 0 0 0 0.05,9.51a15.21,15.21 0 0 1 -3.5,11.62a52.69,52.69 0 0 0 -3.15,4.82a4.3,4.3 0 0 1 -0.41,-0.44q-7.46,-11.58 -14.87,-23.18a2.48,2.48 0 0 1 -0.31,-1.26c0,-6.71 0,-13.42 0,-20.12a1.3,1.3 0 0 1 0.88,-1.36a8.81,8.81 0 0 0 -3.88,-16.8l-23.65,0a8.84,8.84 0 0 0 -8.77,6.72a8.74,8.74 0 0 0 4.72,10a1.41,1.41 0 0 1 0.9,1.49c0,6.71 0,13.42 0,20.12a2.25,2.25 0 0 1 -0.21,1.17c-2.48,3.91 -5,7.79 -7.59,11.82c-0.25,-0.36 -0.41,-0.54 -0.53,-0.75q-10.94,-17 -21.85,-34a3.54,3.54 0 0 1 -0.45,-1.82c0,-9.31 0,-18.61 -0.05,-27.92a1.65,1.65 0 0 1 1.17,-1.79a11.71,11.71 0 0 0 6.69,-13.46c-1.27,-5.55 -6,-9.18 -12,-9.19q-15.86,0 -31.7,0a14.46,14.46 0 0 0 -2.79,0.22a11.8,11.8 0 0 0 -2.65,22.39a1.44,1.44 0 0 1 1,1.56c0,9.47 0,18.94 0,28.41a3.22,3.22 0 0 1 -0.49,1.68q-8.88,13.92 -17.82,27.79q-7.85,12.21 -15.68,24.4c-5.95,9.3 -4.72,20.5 3.16,28.14a21,21 0 0 0 15.14,6l170.64,0a13.38,13.38 0 0 0 2.9,-0.26a12.7,12.7 0 0 0 8.06,-19.53zm-43.22,-53.86a2.65,2.65 0 0 1 2.94,-2.67l18.25,0a2.73,2.73 0 0 1 3,2.68a2.81,2.81 0 0 1 -3,2.85q-9.12,0 -18.25,0a2.74,2.74 0 0 1 -2.94,-2.86zm2,28.93a12.46,12.46 0 0 0 2.57,-8.7c-0.23,-3.93 0,-7.88 -0.07,-11.82c0,-1 0.28,-1.32 1.31,-1.31q6.27,0.07 12.55,0c0.93,0 1.23,0.3 1.18,1.19a23.88,23.88 0 0 0 0,2.93c0.06,1 -0.36,1.28 -1.29,1.21a7.91,7.91 0 0 0 -2.06,0.12a2,2 0 0 0 -1.68,2.29a1.9,1.9 0 0 0 1.9,1.86a17.83,17.83 0 0 0 2.07,0.06c0.69,0 1.06,0.22 1,1c0,1.19 0,2.36 0,3.54c0,0.6 -0.21,0.9 -0.87,0.86a20.22,20.22 0 0 0 -2.06,0a2,2 0 0 0 -2.09,2a2,2 0 0 0 2,2.18c1.1,0.07 2.2,0 3.29,0.06a1.52,1.52 0 0 1 1.08,0.55c3.41,5.24 6.78,10.5 10.2,15.83a8.26,8.26 0 0 1 -4.23,2.25a14.9,14.9 0 0 1 -11.48,-1.36c-1.75,-1 -3.46,-2.11 -5.16,-3.22c-3.84,-2.5 -7.62,-5.12 -12.66,-4c0,-0.12 -0.05,-0.24 -0.08,-0.36c1.52,-2.42 2.91,-4.89 4.61,-7.16l-0.03,0zm-54,-51.41a3.75,3.75 0 0 1 3.38,-1.83q11.75,0 23.51,0a3.81,3.81 0 0 1 4,3.85a3.72,3.72 0 0 1 -4,3.68c-3.94,0 -7.88,0 -11.82,0s-7.8,0 -11.69,0a3.72,3.72 0 0 1 -3.32,-5.7l-0.06,0zm2.35,38.46a15.28,15.28 0 0 0 3.11,-10.51c-0.29,-5.18 -0.07,-10.39 -0.07,-15.6l0,-1.43l19.62,0l0,7.12c-1.32,0 -2.65,0 -4,0a2.55,2.55 0 0 0 -2.5,2.09a2.46,2.46 0 0 0 1.4,2.71a2.63,2.63 0 0 0 0.69,0.21c0.36,0.05 0.73,0.05 1.09,0.08c1.08,0.07 2.58,-0.25 3.12,0.33s0.22,2.06 0.24,3.15s0,2.43 0,3.84c-1.3,0 -2.54,0 -3.78,0c-1.75,0 -2.79,1 -2.78,2.53s1.06,2.47 2.83,2.48c1.29,0 2.6,-0.06 3.89,0a2,2 0 0 1 1.36,0.7c4.31,6.6 8.55,13.24 12.83,19.85c0.46,0.7 0.25,1.06 -0.31,1.49a16.44,16.44 0 0 1 -8.64,2.92c-5,0.51 -9.34,-1.21 -13.44,-3.79c-2.1,-1.32 -4.17,-2.69 -6.23,-4.06c-4.5,-3 -9.18,-5.27 -15.2,-3.69c2.44,-3.73 4.44,-7.2 6.83,-10.42l-0.06,0zm-74.76,-71.24a5.35,5.35 0 0 1 4.44,-5.2a14.48,14.48 0 0 1 2.18,-0.2q15.24,0 30.48,0a11.21,11.21 0 0 1 2.65,0.28a5.4,5.4 0 0 1 3.91,5.64a5.29,5.29 0 0 1 -4.71,4.94a13.73,13.73 0 0 1 -1.7,0.09l-15.3,0c-5.32,0 -10.64,0 -16,0c-3.49,-0.01 -5.94,-2.34 -5.89,-5.55l-0.06,0zm-3.45,61.61c3.51,-5.47 7,-11 10.55,-16.39a5.93,5.93 0 0 0 1,-3.42c0,-9.42 0,-18.85 0,-28.28l0,-1.53c0.44,0 0.79,-0.07 1.14,-0.07c8.37,0 16.74,0 25.11,0c1,0 1.36,0.24 1.33,1.28q-0.09,4 0,8c0,1 -0.24,1.4 -1.3,1.33c-1.45,-0.08 -2.92,0 -4.38,0a3.13,3.13 0 0 0 -3.34,3.11a3.19,3.19 0 0 0 3.21,3.29c1.5,0.06 3,0.07 4.51,0c1,0 1.32,0.35 1.3,1.34c-0.06,2.64 0,5.28 0,7.92c0,1 -0.32,1.28 -1.27,1.23c-1.46,-0.06 -2.93,-0.06 -4.39,0a3.19,3.19 0 0 0 -3.3,2.67a3,3 0 0 0 2,3.5a4.33,4.33 0 0 0 1.43,0.23c2,0 4.06,0 6.09,0a1.83,1.83 0 0 1 1.28,0.62q9.28,14.31 18.47,28.67a2.79,2.79 0 0 1 0.1,0.36c-3,2.87 -6.57,4.11 -10.46,4.84c-7.24,1.36 -13.86,-0.28 -20,-4.09c-4.59,-2.83 -9.11,-5.79 -13.69,-8.64a21.29,21.29 0 0 0 -16.34,-2.92a5,5 0 0 1 -0.88,0l1.83,-3.05zm50.67,60.91q-30.52,0 -61.06,0a15.56,15.56 0 0 1 -15.84,-15.93a14.61,14.61 0 0 1 2.29,-7.6c4.85,-7.59 9.63,-15.23 14.63,-22.73c1.92,-2.89 5.11,-4.15 8.36,-5.09a15.68,15.68 0 0 1 13.28,2c3.36,2.12 6.68,4.31 10,6.46c4.45,2.85 9,5.58 14.26,6.64c9.36,1.89 18.24,0.92 26.1,-5.09a1.91,1.91 0 0 1 0.32,-0.16l0.11,0.09c1.45,1.94 1.45,1.94 0.16,4c-3.87,6 -7.71,12 -11.61,18c-4.1,6.3 -4.24,12.59 -0.15,18.93a4.11,4.11 0 0 1 0.18,0.44c-0.34,0 -0.68,0.04 -1.03,0.04zm13,-0.2c-2.06,0.28 -4.05,0.55 -5.84,-1.05a11.52,11.52 0 0 1 -4.05,-7.4a11,11 0 0 1 1.85,-7.51c3.36,-5.17 6.66,-10.38 10,-15.55a21.47,21.47 0 0 1 2.27,-2.46c2.59,4.1 5.25,7.77 7.35,11.73c4.93,9.27 -1.18,20.85 -11.58,22.24zm45.37,1.31l-33.55,0c0.77,-0.73 1.44,-1.29 2,-1.93a21.76,21.76 0 0 0 2.37,-26.38c-1.63,-2.57 -3.29,-5.12 -4.94,-7.68l-0.69,-1.12l-0.28,-0.43l0.4,0a15.17,15.17 0 0 1 3.93,0.64a73.53,73.53 0 0 1 6.92,3.77c3,1.76 5.86,3.85 9,5.37c8,3.88 15.93,3.21 23.88,-1.34c-1.92,3 -3.7,5.73 -5.47,8.49c-1.1,1.7 -2.16,3.44 -3.31,5.11c-3.47,5.1 -3.63,10.2 -0.27,15.5l0.01,0zm17.42,-4.65c-2.48,3.61 -6.1,4.93 -10.35,4.72a2.54,2.54 0 0 1 -1.12,-0.43a8.28,8.28 0 0 1 -3,-11.17c2.75,-4.59 5.75,-9 8.65,-13.55a3.53,3.53 0 0 1 0.58,-0.55c2.09,3.31 4.28,6.41 6.08,9.71c2.09,3.83 1.6,7.72 -0.85,11.27l0.01,0zm34.65,5.49c-3.21,0.1 -6.42,0 -9.63,0l-22.75,0a40.57,40.57 0 0 0 3.06,-4.58a15.6,15.6 0 0 0 -0.82,-16c-1.45,-2.35 -3,-4.64 -4.49,-7c-0.21,-0.32 -0.39,-0.67 -0.61,-1.06a7.49,7.49 0 0 1 5.93,0.91c2.23,1.35 4.38,2.8 6.58,4.19c2.79,1.77 5.67,3.37 9,3.84c4.72,0.67 9.22,0.09 13.29,-2.62c0.2,-0.14 0.41,-0.24 0.75,-0.43c2.29,3.65 4.57,7.24 6.79,10.87a6.33,6.33 0 0 1 0.61,2.09a8.38,8.38 0 0 1 -7.72,9.79l0.01,0zm-55.92,-21.64a3.09,3.09 0 0 0 -3.1,3.09a3,3 0 0 0 3.11,3a3,3 0 0 0 2.95,-3.05a3.05,3.05 0 0 0 -2.96,-3.04zm-15.44,6.8a3.08,3.08 0 0 0 0.09,6.16a3.08,3.08 0 0 0 -0.09,-6.16z"
                class="cls-1"
              ></path>
              <path
                id="svg_2"
                d="m60.22662,118.6924a4.06,4.06 0 0 1 -4.08,4.11a4.11,4.11 0 0 1 -4.11,-4.1a4.16,4.16 0 0 1 4.19,-4.19a4.1,4.1 0 0 1 4,4.18z"
                class="cls-1"
              ></path>
              <path
                id="svg_3"
                d="m79.80662,107.1124a4,4 0 0 1 4,4.15a4.13,4.13 0 0 1 -4.19,4a4.17,4.17 0 0 1 -4.11,-4.13a4.1,4.1 0 0 1 4.3,-4.02z"
                class="cls-1"
              ></path>
              <path
                id="svg_4"
                d="m32.77662,99.0624a4.1,4.1 0 0 1 0,8.19a4.1,4.1 0 1 1 0,-8.19z"
                class="cls-1"
              ></path>
              <path
                id="svg_5"
                d="m140.70662,117.6124a3,3 0 0 1 -2.95,3.05a3,3 0 0 1 -3.11,-3a3.09,3.09 0 0 1 3.1,-3.09a3.05,3.05 0 0 1 2.96,3.04z"
                class="cls-1"
              ></path>
              <path
                id="svg_6"
                d="m125.36662,124.4124a3,3 0 0 1 -3,3.06a3.08,3.08 0 0 1 -0.09,-6.16a3,3 0 0 1 3.09,3.1z"
                class="cls-1"
              ></path>
              <path
                id="svg_7"
                d="m184.93662,121.0824a2.47,2.47 0 0 1 2.34,2.46a2.36,2.36 0 0 1 -2.44,2.32a2.29,2.29 0 0 1 -2.31,-2.42a2.37,2.37 0 0 1 2.41,-2.36z"
                class="cls-1"
              ></path>
              <path
                id="svg_8"
                d="m173.86662,127.7824a2.38,2.38 0 1 1 -4.75,0a2.29,2.29 0 0 1 2.38,-2.35a2.33,2.33 0 0 1 2.37,2.35z"
                class="cls-1"
              ></path>
            </svg>

            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef4}
          >
            <img
              src="/logos/cssbestux.svg"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div>
        <div className="experience-container">
          {/*<!-- Enhanced Experience Timeline --> */}
          <ul
            aria-label="Experience timeline"
            role="feed"
            className="relative flex flex-col gap-16 py-16 pl-8 text-sm before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border-l before:border-zinc-700 after:absolute after:top-8 after:left-8 after:bottom-8 after:-translate-x-1/2 after:border-l after:border-zinc-800 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]"
          >
            <li
              role="article"
              className="group relative pl-8 before:absolute before:left-0 before:top-4 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-zinc-600 before:ring-2 before:ring-zinc-700 before:transition-all before:duration-300 hover:before:scale-110 hover:before:bg-zinc-500 lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-500 lg:block lg:w-28">
                2019.
              </h4>
              <div className="flex flex-col flex-1 gap-4 p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/30 transition-all duration-300 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-zinc-900/20 group-hover:scale-[1.01]">
                <h3 className="text-2xl font-bold leading-8 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Project Manager & Software Development Manager | Self-Employed
                  <span className="block text-lg font-normal text-zinc-400 lg:hidden mt-1">
                    2019. – Present
                  </span>
                </h3>
                <ul className="pl-6 list-disc text-zinc-300 text-lg marker:text-zinc-500 space-y-2">
                  <li className="transition-colors duration-200 hover:text-white">
                    Founded and operated an IT business delivering web and mobile solutions across industries.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Managed multiple client projects simultaneously, ensuring requirements were met on time and within budget.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Interpreted business objectives into technical requirements and solutions.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Oversaw client communication, stakeholder management, and strategic project planning.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="group relative pl-8 before:absolute before:left-0 before:top-4 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-zinc-600 before:ring-2 before:ring-zinc-700 before:transition-all before:duration-300 hover:before:scale-110 hover:before:bg-zinc-500 lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-500 lg:block lg:w-28">
                2012.
              </h4>
              <div className="flex flex-col flex-1 gap-4 p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/30 transition-all duration-300 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-zinc-900/20 group-hover:scale-[1.01]">
                <h3 className="text-2xl font-bold leading-8 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Senior Full Stack Developer | Web Agency
                  <span className="block text-lg font-normal text-zinc-400 lg:hidden mt-1">
                    February 2012. – Present
                  </span>
                </h3>
                <ul className="pl-6 list-disc text-zinc-300 text-lg marker:text-zinc-500 space-y-2">
                  <li className="transition-colors duration-200 hover:text-white">
                    Lead end-to-end development of websites and mobile applications tailored to client needs.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Collaborate closely with design and product teams to deliver user-friendly, business-focused solutions.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Provide ongoing support, updates, and enhancements to existing projects.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Design websites, UI/UX elements, and company logos.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Mentor and train junior developers to improve technical and professional skills.
                  </li>
                  <li className="transition-colors duration-200 hover:text-white">
                    Continued partnership with the agency as a primary client after starting independent consultancy.
                  </li>
                </ul>
              </div>
            </li>
            {/* <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2021.03
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                  Fullstack developer at SporeJourney
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2021.03
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                    Designed and developed the front end of sporesjourney.com
                    using React, Next.js, and Tailwind CSS, creating a
                    responsive and visually engaging user interface.
                  </li>
                  <li>
                    Implemented interactive 3D visualizations with Three.js to
                    showcase immersive content, increasing user engagement by
                    25%.
                  </li>
                  <li>
                    Configured and customized Shopify backend, integrating
                    payment gateways and inventory management, resulting in a
                    15% improvement in checkout conversion rates.
                  </li>
                  <li>
                    Built and integrated RESTful APIs and Shopify’s GraphQL API
                    to enable seamless data flow between front-end and backend
                    systems.
                  </li>
                  <li>
                    Optimized site performance using lazy loading and CDN
                    integration, achieving a Google Lighthouse score of 90/100
                    for speed and SEO.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2019.06
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                  Front-end developer at Squisheaze
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2019.06
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                    Led front-end development of squisheaze.com, a visually
                    dynamic e-commerce platform, using React, Next.js, and
                    Tailwind CSS to create an engaging user interface.
                  </li>
                  <li>
                    Implemented interactive 3D product visualizations using
                    Three.js, enhancing user experience and increasing user
                    session duration by 20%.
                  </li>
                  <li>
                    Optimized site performance with lazy loading and code
                    splitting, achieving a Google Lighthouse score of 92/100 for
                    speed and accessibility.
                  </li>
                  <li>
                    Collaborated with designers and backend developers to
                    integrate RESTful APIs, ensuring seamless functionality for
                    product listings and user interactions.
                  </li>
                  <li>
                    Utilized TypeScript to enhance code maintainability,
                    reducing front-end bugs by 15% through strict type checking.
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
          {/*<!-- End Alternative Changelog feed --> */}
        </div>
      </div>
    </section>
  );
};

export default memo(SectionShowreel);
