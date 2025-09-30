import { useEffect, useRef, useMemo, memo } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";

const SectionSubscribe = () => {
  // Refs for various elements
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();
  const sliderRef1 = useRef();
  const sliderRef2 = useRef();
  const sliderRefMobile = useRef();

  // Memoize animation logic
  const gsapAnimations = useMemo(() => {
    return {
      headlineAnimation: (targetRef) => {
        const titleSplit = new SplitText(targetRef.current, { type: "chars" });
        gsap.fromTo(
          titleSplit.chars,
          {
            "will-change": "opacity, transform",
            filter: "blur(8px)",
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            overwrite: true,
            yPercent: 0,
            stagger: 0.02,
            duration: 0.75,
            ease: "power1",
            scrollTrigger: {
              trigger: targetRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      },
      descriptionAnimation: (targetRef) => {
        const descriptionSplit = new SplitText(targetRef.current, {
          type: "words",
        });
        gsap.fromTo(
          descriptionSplit.words,
          { filter: "blur(8px)", opacity: 0, skewX: 0 },
          {
            opacity: 1,
            filter: "blur(0px)",
            skewX: 0,
            overwrite: true,
            stagger: 0.025,
            ease: "sine",
            scrollTrigger: {
              trigger: targetRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      },
      sliderAnimation: (targetRef, yStart, yEnd) => {
        gsap.fromTo(
          targetRef.current,
          { yPercent: yStart },
          {
            yPercent: yEnd,
            overwrite: true,
            scrollTrigger: {
              trigger: targetRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              once: true,
            },
          }
        );
      },
      mobileSliderAnimation: (targetRef) => {
        gsap.fromTo(
          targetRef.current,
          { xPercent: 0 },
          {
            xPercent: -25,
            overwrite: true,
            scrollTrigger: {
              trigger: targetRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              once: true,
            },
          }
        );
      },
      buttonAnimation: (targetRef) => {
        gsap.to(targetRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power1",
          overwrite: true,
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 95%",
            once: true,
          },
        });
      },
    };
  }, []);

  useEffect(() => {
    // Trigger the animations on the refs once the component is mounted
    if (titleRef.current) gsapAnimations.headlineAnimation(titleRef);
    if (descriptionRef.current)
      gsapAnimations.descriptionAnimation(descriptionRef);
    if (sliderRef1.current) gsapAnimations.sliderAnimation(sliderRef1, -25, 25);
    if (sliderRef2.current) gsapAnimations.sliderAnimation(sliderRef2, 15, -15);
    if (sliderRefMobile.current)
      gsapAnimations.mobileSliderAnimation(sliderRefMobile);
    if (buttonRef.current) gsapAnimations.buttonAnimation(buttonRef);
  }, [gsapAnimations, sliderRef2.current]); // Dependencies array ensures that animations are only initialized once

  return (
    <section className="subscribe">
      <div className="subscribe-content">
        {/* Slider for desktop */}
        <div className="subscribe-content-slider">
          <div className="subscribe-content-slider-content" ref={sliderRef1}>
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="subscribe-content-center">
          <div className="subscribe-content-center-textbox">
            <h1 className="subheadline white" ref={titleRef}>
              <span className="small-subheadline">Join The</span>
              <br />
              Community
            </h1>
          </div>
          <div className="subscribe-content-center-bottom">
            <p className="description grey" ref={descriptionRef}>
              Stay ahead with exclusive updates, insights, and tips sharing
              design, development, and marketing. Sign up now to be part of the
              future.
            </p>
            <div
              className="subscribe-content-center-button opacity-blur"
              ref={buttonRef}
            >
              <p className="description grey">Email</p>
              <div className="subscribe-content-center-button-box">
                <p className="description black">Subscribe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile slider */}
        <div className="subscribe-content-mobile-slider">
          <div
            className="subscribe-content-mobile-slider-content"
            ref={sliderRefMobile}
          >
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
          </div>
        </div>

        {/* Slider for desktop */}
        <div className="subscribe-content-slider">
          <div className="subscribe-content-slider-content" ref={sliderRef2}>
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
            <div className="subscribe-content-slider-item"></div>
          </div>
        </div>

        {/* Gradient elements */}
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionSubscribe;
