/* eslint-disable react/jsx-key */
import { useEffect, useRef, memo, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");
const SectionServices = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();
  const overlayRef = useRef();
  const overlayWidgetRef = useRef();
  const overlayWidgetButtonRef = useRef();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      overwrite: true,
      ease: "power1",
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
        yPercent: 100,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.085,
        overwrite: true,
        duration: 1,
        ease: "power2",
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
      { filter: "blur(8px)", opacity: 0, skewX: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        skewX: 0,
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

    // button animation
    gsap.to(buttonRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      overwrite: true,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 95%",
        once: true,
      },
    });
  }, []);

  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleOverlay = () => {
    if (!isOverlayVisible) {
      // Show overlay
      gsap.to(overlayRef.current, {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        overwrite: true,
      });
      gsap.fromTo(
        overlayWidgetRef.current,
        { yPercent: 10, rotate: 5, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.5,
          ease: customEase,
          overwrite: true,
        }
      );
      gsap.fromTo(
        overlayWidgetButtonRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: customEase,
          overwrite: true,
        }
      );
    } else {
      // Hide overlay
      gsap.to(overlayWidgetRef.current, {
        yPercent: 10,
        rotate: 5,
        opacity: 0,
        duration: 0.5,
        ease: customEase,
        overwrite: true,
      });
      gsap.to(overlayWidgetButtonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: customEase,
        overwrite: true,
      });
      gsap.to(overlayRef.current, {
        delay: 0.1,
        opacity: 0,
        duration: 0.5,
        overwrite: true,
        onComplete: () => {
          overlayRef.current.style.display = "none";
        },
      });
    }
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <section className="services">
      <div
        className="calendly-overlay"
        ref={overlayRef}
        style={{ display: "none", opacity: 0 }}
        onClick={toggleOverlay}
      >
        <div className="calendly-overlay-widget" ref={overlayWidgetRef}>
          <div className="calendly-overlay-widget-border" />
          <div className="calendly-overlay-widget-scrollbar-hider" />
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dialedweb/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=9b92a2"
          />
        </div>
        <div
          className="calendly-overlay-widget-button"
          ref={overlayWidgetButtonRef}
          onClick={toggleOverlay}
        >
          <X className="calendly-overlay-widget-button-icon" />
        </div>
      </div>
      <div className="services-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">My Services</h2>
          </div>

          <div
            className="contact-button-wrapper opacity-blur"
            ref={buttonRef}
            onClick={toggleOverlay}
          >
            <button className="contact-button-white">
              <span>
                <span className="contact-button-container-white">
                  <span className="contact-button-primary-white"></span>
                  <span className="contact-button-complimentary-white"></span>
                </span>
              </span>
              <span className="description black">Book a call</span>
            </button>
          </div>
        </div>
        <div className="services-content-container">
          <div className="services-content-container-left" />
          <div className="services-content-container-right" />
          <div className="services-content-container-bottom" />
          <div className="services-content-container-top" />
          <video
            src="/videos/servicesmax.mp4"
            className="services-content-video"
            autoPlay="autoplay"
            muted
            playsInline={true}
            data-wf-ignore="true"
            preload="metadata"
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
