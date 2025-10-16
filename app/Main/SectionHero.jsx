/* eslint-disable react/jsx-key */
import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useProgress } from "@react-three/drei";

const Animation = dynamic(() => import("./Canvas/Animation"), {
  ssr: false,
});

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionHero = () => {
  // LOADING
  const { progress } = useProgress();
  const [playAnimation, setPlayAnimation] = useState(false);

  useLayoutEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setPlayAnimation(true);
      }, 150);
    }
  }, [progress]);

  // REFS
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef1 = useRef();
  const buttonCircleRef1 = useRef();
  const buttonRef2 = useRef();
  const logosWrapperRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  // GSAP ANIMATIONS
  useEffect(() => {
    if (playAnimation) {
      gsap.set(titleRef.current, { opacity: 1 });

      const titleSplit = new SplitText(titleRef.current, { type: "chars" });
      gsap.fromTo(
        titleSplit.chars,
        {
          "will-change": "opacity, transform",
          filter: "blur(8px)",
          opacity: 0,
          yPercent: 50,
        },
        {
          overwrite: true,
          delay: 0.4,
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          stagger: 0.02,
          duration: 0.75,
          ease: "power1",
        }
      );

      // description text animation
      gsap.to(descriptionRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        overwrite: true,
        delay: 0.9,
      });

      // buttons animation
      gsap.to(buttonRef1.current, {
        delay: 1.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        overwrite: true,
        ease: "power1",
      });
      gsap.to(buttonRef2.current, {
        delay: 1.4,
        opacity: 1,
        filter: "blur(0px)",
        overwrite: true,
        duration: 0.5,
        ease: "power1",
      });

      // logos wrapper animation
      gsap.to(logosWrapperRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        overwrite: true,
        delay: 0.9,
      });
    }
  }, [playAnimation]);

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        overwrite: true,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        overwrite: true,
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <section className="hero">
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero-titlebox-gradient" />
                <h1 className="headline hero-headline white" ref={titleRef}>
                  I&apos;m Alex Filiakov <br /> Web Expert
                </h1>
              </div>
              <p
                className="big-description grey opacity-blur"
                ref={descriptionRef}
              >
                over 20 years experience in Web development and UI/UX Building
                scalable and user-friendly web and mobile applications
              </p>
            </div>
            {/* <div className="hero-buttons-row">
              <button className="button opacity-blur" ref={buttonRef1}>
                <div className="button-content">
                  <span className="small-description">See More</span>
                </div>
                <div className="button-circle" ref={buttonCircleRef1}>
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>
              <button className="button opacity-blur" ref={buttonRef2}>
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div> */}
          </div>
          <div
            className="hero-content-right"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Animation />
          </div>
        </div>
        {/* <div className="hero-content-bottom opacity-blur" ref={logosWrapperRef}>
          <Marquee
            className="hero-content-bottom-row"
            gradient={true}
            gradientColor="#010101"
            gradientWidth={250}
          >
            {[
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
            ].map((src, i) => (
              <div className="hero-content-bottom-item" key={i}>
                <Image
                  width={100}
                  height={100}
                  src={src}
                  alt={`Marquee item ${i + 1}`}
                  className="hero-content-bottom-image"
                />
              </div>
            ))}
          </Marquee>
        </div> */}
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white">Drag</p>
      </div>
    </section>
  );
};

export default memo(SectionHero);
