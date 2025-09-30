/* eslint-disable react/jsx-key */
"use client";
import { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./Carousel/EmblaCarouselDotButton";
import Fade from "embla-carousel-fade";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionProjects = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const contentRef = useRef();
  const imageContainerRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  // GSAP ANIMATIONS

  useEffect(() => {
    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      overwrite: true,
      scrollTrigger: {
        trigger: subheadlineBoxRef.current,
        start: "top 95%",
        once: true,
      },
    });

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(
      titleSplit.words,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.05,
        duration: 0.75,
        ease: "power2",
        overwrite: true,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
          once: true,
        },
      }
    );

    // description text animation
    const descriptionSplit = new SplitText(descriptionRef.current, {
      type: "words",
    });
    gsap.fromTo(
      descriptionSplit.words,
      { filter: "blur(8px)", opacity: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        overwrite: true,
        ease: "sine",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 95%",
          once: true,
        },
      }
    );

    // image parallax effect
    gsap.fromTo(
      imageContainerRef.current,
      { yPercent: 7.5 },
      {
        yPercent: -7.5,
        overwrite: true,
        scrollTrigger: {
          trigger: ".projects",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { onNextButtonClick } = usePrevNextButtons(emblaApi);

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
        duration: 0.3,
        ease: "power3.out",
        overwrite: true,
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
        overwrite: true,
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
    <section className="projects projects-desktop">
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
          <Star className="subheadline-box-icon" />
          <h2 className="small-description grey">Featured Works</h2>
        </div>
        <div className="titlebox">
          <div className="titlebox-big-gradient" />
          <h1 className="subheadline white" ref={titleRef}>
            Pioneering Projects That Consistently{" "}
            <br className="hide-on-mobile" /> Redefine What’s Possible
          </h1>
        </div>
        <p className="description grey" ref={descriptionRef}>
          Transforming startups, SMEs, and industry{" "}
          <br className="hide-on-desktop" /> giants into digital leaders.
        </p>
      </div>
      <div
        className="projects-content"
        ref={contentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onNextButtonClick}
      >
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="project-content-wrapper" ref={imageContainerRef}>
          <div className="projects-carousel" ref={emblaRef}>
            <div className="projects-carousel-row">
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/heavemax.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Heavecorp project"
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/essentiamax.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/kinimaticmax.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/peakmax.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/vitamax.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white">See More</p>
      </div>
    </section>
  );
};

export default memo(SectionProjects);
