import { useEffect, useMemo, memo } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionFooter = () => {
  // Memoize GSAP animation setup
  const gsapAnimation = useMemo(() => {
    const animateElement = (element, delay = 0) => {
      gsap.fromTo(
        element,
        { filter: "blur(8px)", opacity: 0 },
        {
          opacity: 1,
          overwrite: true,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "sine",
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 95%", // start the animation when element is close to viewport
            toggleActions: "play none none none", // Optimizes triggers
            once: true,
          },
        }
      );
    };

    return {
      animateElement,
    };
  }, []);

  useEffect(() => {
    const elements = [
      { ref: ".footer-content-left", delay: 0 },
      { ref: ".footer-content-right", delay: 0.2 },
      { ref: ".footer-content-right-column", delay: 0.4 },
      { ref: ".footer-divider", delay: 0 },
      { ref: ".footer-content-bottom", delay: 0 },
    ];

    // Trigger animation on elements
    elements.forEach(({ ref, delay }) => {
      const element = document.querySelector(ref);
      if (element) {
        gsapAnimation.animateElement(element, delay);
      }
    });
  }, [gsapAnimation]);

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Image
            src="/images/loading.gif"
            className="footer-logo"
            width={53}
            height={29}
            alt="Logo"
          />
          <h1 className="subheadline white">Alex Filiakov</h1>
          <p className="description grey">
            over 20 years experience in Web development, UI/UX Building scalable
            and user-friendly web and mobile applications
          </p>
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-column">
            <h2 className="description white">Services</h2>
            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey">
                  Fontend Development
                </p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey">
                  Backend Development
                </p>
              </div>
            
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey">
                  Ecommerce Development(Shopify)
                </p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey">
                  Web3 Integration
                </p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey">
                  Mobile App Developement
                </p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey">UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-content-bottom">
        <p className="small-description grey">
          © 2025 Alex Filiakov All Rights Reserved
        </p>
        {/* Social icons removed */}
      </div>
    </section>
  );
};

export default memo(SectionFooter);
