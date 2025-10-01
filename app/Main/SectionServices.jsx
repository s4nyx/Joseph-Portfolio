/* eslint-disable react/jsx-key */
import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");
const SectionServices = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

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
        stagger: 0.1,
        duration: 0.75,
        ease: "power1",
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
        stagger: 0.05,
        duration: 0.75,
        ease: "power1",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 95%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="services">
      <div className="services-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">My Services</h2>
          </div>

          {/* Contact button removed */}
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
