"use client";
import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import SectionFooter from "../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const AboutPageSection = () => {
  // ANIMATIONS

  const titleRef = useRef();
  const titleRef2 = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const itemRefs = useRef([]);

  const teamMembers = [
    { name: "Idan Zeidman", title: "Co-CEO & Co-Founder" },
    { name: "Lorenzo Noya", title: "Co-CEO & Co-Founder" },
    { name: "Matvey Vasilyev", title: "COO & Co-Founder" },
    { name: "Rainer Ahi", title: "CTO" },
    { name: "Hamail Hassan", title: "Creative Director" },
    { name: "Romet Kriks", title: "Motion Graphics Designer" },
    { name: "Sardor Xujamov", title: "Visualization Expert" },
  ];

  useEffect(() => {
    // title animation
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
        delay: 0.2,
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.02,
        duration: 0.75,
        ease: "power1",
      }
    );

    // description animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.6,
    });

    // line animation
    gsap.fromTo(
      lineRef.current,
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
    );

    // title 2 animation
    const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
    gsap.fromTo(
      titleSplit2.words,
      { "will-change": "opacity", filter: "blur(8px)", opacity: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: {
          trigger: titleRef2.current,
          start: "top 95%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // team member boxes animations
    itemRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { yPercent: 100, opacity: 0, filter: "blur(8px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.75,
          delay: index * 0.2,
          ease: "power3",
          scrollTrigger: {
            trigger: ".five-content",
            start: "top bottom",
          },
        }
      );
    });
  }, []);

  // STICKY SECTION

  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);

  useEffect(() => {
    const refs = [item1Ref, item2Ref, item3Ref, item4Ref];

    refs.forEach((ref, position) => {
      const el = ref.current;
      const isLast = position === refs.length - 1;

      gsap.set(el, { willChange: "transform, filter" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: "350%",
          scrub: true,
        },
      });

      timeline
        .to(
          el,
          {
            ease: "none",
            startAt: { filter: "blur(0px)" },
            filter: isLast ? "blur(0px)" : "blur(3px)",
            scrollTrigger: {
              trigger: el,
              start: "center center",
              end: "+=100%",
              scrub: true,
            },
          },
          0
        )
        .to(
          el,
          {
            ease: "none",
            scale: isLast ? 1 : 0.55,
            yPercent: isLast ? 0 : -45,
          },
          0
        );
    });
  }, []);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          <div className="about-content-top">
            <div className="about-content-textbox">
              <div className="titlebox">
                <div className="titlebox-gradient" />
                <h1 className="headline white" ref={titleRef}>
                  A Global Network <br className="hide-on-desktop" /> Of Talent
                </h1>
              </div>
              <p className="description grey opacity-blur" ref={descriptionRef}>
                We&apos;ve assembled a team of dedicated professionals from
                diverse backgrounds who share the same passion for your brand as
                you do.
              </p>
            </div>
            <div className="about-divider" ref={lineRef} />
          </div>
          <div className="about-team">
            <div className="about-team-container">
              {teamMembers.map((member, index) => (
                <div
                  className="about-team-item"
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <p className="description white">{member.name}</p>
                  <p className="description white">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-divider" />
          <div className="about-whyus">
            <p className="description about-whyus-description grey">Why us</p>
            <p
              className="subheadline about-whyus-subheadline white"
              ref={titleRef2}
            >
              At DialedWeb, we embody the startup mindset — dynamic, innovative,
              and hungry to make a difference. We don&apos;t just create amazing
              works; we partner with our clients to revolutionize their
              industries through groundbreaking digital experiences. From
              redefining brand engagement to boosting conversions, every project
              we take on is an opportunity to challenge the norm, deliver
              excellence, and leave an impact.
            </p>
            <div className="about-whyus-gradient" />
          </div>
          <div className="about-divider" />
          <div className="about-sticky-container-wrapper">
            <div className="textbox">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Industries we serve</h2>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h1 className="subheadline white">
                  We have experience <br className="hide-on-desktop" /> across
                  multiple fields
                </h1>
              </div>
              <p className="description grey">
                Our product designers have completed projects in different
                niches. They know how to add business.
              </p>
            </div>
            <div className="about-sticky-container">
              <div className="about-sticky-item" ref={item1Ref}>
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <h1 className="headline white">Web Development</h1>
                    <p className="description about-sticky-item-left-textbox-description grey">
                      Unleash your brand’s potential with our custom web
                      development services. We craft dynamic, interactive
                      websites with seamless user experiences, blending
                      cutting-edge tech and creativity. From digital storefronts
                      to immersive platforms, we deliver captivating, optimized
                      solutions.
                    </p>
                  </div>
                  <h1 className="headline white hide-on-mobile">(01)</h1>
                </div>
                <div className="about-sticky-item-right">
                  <div className="about-sticky-item-right-imagebox">
                    <div className="about-sticky-item-right-imagebox-button hide-on-desktop">
                      <p className="description">(01)</p>
                    </div>
                    <img
                      src="/images/test14.webp"
                      className="about-sticky-item-right-image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about-sticky-item" ref={item2Ref}>
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <h1 className="headline white">Marketing</h1>
                    <p className="description about-sticky-item-left-textbox-description grey">
                      Amplify your brand’s voice with marketing strategies that
                      connect. At Dialedweb, we create data-driven campaigns and
                      tailored solutions, from social media to full-scale
                      digital marketing, ensuring your brand stands out and
                      drives impactful results.
                    </p>
                  </div>
                  <h1 className="headline white hide-on-mobile">(02)</h1>
                </div>
                <div className="about-sticky-item-right">
                  <div className="about-sticky-item-right-imagebox">
                    <div className="about-sticky-item-right-imagebox-button hide-on-desktop">
                      <p className="description">(02)</p>
                    </div>
                    <img
                      src="/images/test18.webp"
                      className="about-sticky-item-right-image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about-sticky-item" ref={item3Ref}>
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <h1 className="headline white">Design</h1>
                    <p className="description about-sticky-item-left-textbox-description grey">
                      Elevate your brand with designs that captivate and
                      perform. Our team blends creativity with precision to
                      craft stunning visuals, intuitive interfaces, and engaging
                      graphics, ensuring every detail aligns with your vision
                      and enhances user experience while telling your unique
                      story.
                    </p>
                  </div>
                  <h1 className="headline white hide-on-mobile">(03)</h1>
                </div>
                <div className="about-sticky-item-right">
                  <div className="about-sticky-item-right-imagebox">
                    <div className="about-sticky-item-right-imagebox-button hide-on-desktop">
                      <p className="description">(03)</p>
                    </div>
                    <img
                      src="/images/test19.webp"
                      className="about-sticky-item-right-image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about-sticky-item" ref={item4Ref}>
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <h1 className="headline white">Software Development</h1>
                    <p className="description about-sticky-item-left-textbox-description grey">
                      Empower your business with custom software built for
                      growth and innovation. From streamlining operations to
                      creating digital products, our expert team crafts
                      scalable, high-performance solutions tailored to your
                      needs, ensuring seamless functionality and measurable
                      impact.
                    </p>
                  </div>
                  <h1 className="headline white hide-on-mobile">(04)</h1>
                </div>
                <div className="about-sticky-item-right">
                  <div className="about-sticky-item-right-imagebox">
                    <div className="about-sticky-item-right-imagebox-button hide-on-desktop">
                      <p className="description">(04)</p>
                    </div>
                    <img
                      src="/images/test14.webp"
                      className="about-sticky-item-right-image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};
