import { useEffect, useMemo, memo } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

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

    // Handle footer socials
    const socialIcons = document.querySelectorAll(".footer-socials-icon");
    gsap.fromTo(
      socialIcons,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "sine",
        scrollTrigger: {
          trigger: ".footer-content-bottom",
          start: "top bottom",
        },
      }
    );
  }, [gsapAnimation]);

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Image
            src="/images/dwlogonew2.webp"
            className="footer-logo"
            width={53}
            height={29}
            alt="Logo"
          />
          <h1 className="subheadline white">Jay Kietzman</h1>
          <p className="description grey">
            10 years experience in Web2 and Web3 development, UI/UX Building
            scalable and user-friendly web and mobile applications
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
                  Smart Contract Development
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
          © 2025 Jay Kietzman All Rights Reserved
        </p>
        <div className="footer-socials">
          {/* <Linkedin strokeWidth={1.25} className="footer-socials-icon" /> */}
          <a href="http://www.linkedin.com/in/jay-kietzman" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              width="1em"
              height="1em"
              className="text-white text-3xl"
            >
              <path
                fill="currentColor"
                d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z"
              ></path>
            </svg>
          </a>
          <a href="" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="text-white text-3xl"
            >
              <path
                fill="currentColor"
                d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
              ></path>
            </svg>
          </a>
          <a href="" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="text-white text-3xl"
            >
              <path
                fill="currentColor"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21l-1.446 1.394a.76.76 0 0 1-.6.295h-.005l.213-3.054l5.56-5.022c.24-.213-.054-.334-.373-.121L8.32 13.617l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
              ></path>
            </svg>
          </a>

          <a href="" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="text-white text-3xl"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(SectionFooter);
