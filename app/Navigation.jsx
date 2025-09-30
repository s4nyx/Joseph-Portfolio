/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";

gsap.registerPlugin(CustomEase);

// Custom easing
const customEase = CustomEase.create("customEase", ".4,0,.1,1");

// Main Navigation Component
export const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path) => {
    setMenu(false); // Close the menu before navigating
    router.push(path);
  };

  useEffect(() => {
    // Close the menu when the pathname changes
    if (menu) {
      setMenu(false);
    }
  }, [pathname]);

  return (
    <>
      <NavigationBar
        onNavigate={handleNavigate}
        setMenu={setMenu}
        menu={menu}
      />
      <MobileMenu menu={menu} setMenu={setMenu} onNavigate={handleNavigate} />
    </>
  );
};

// Desktop Navigation Bar Component
const NavigationBar = ({ onNavigate, setMenu, menu }) => {
  const navigationBarRef = useRef(null);

  useEffect(() => {
    gsap.to(navigationBarRef.current, {
      opacity: 1,
      rotateY: "0deg",
      scale: "1",
      rotateX: "0deg",
      translateY: "0vh",
      duration: 0.75,
      ease: "power1",
      delay: 0.75,
    });
    gsap.fromTo(
      navigationBarRef.current,
      { width: "25%" },
      { width: "100%", duration: 0.75, ease: "power1", delay: 1.75 }
    );
  }, []);

  return (
    <div className="navigation-wrapper">
      <div className="navigation-inside" ref={navigationBarRef}>
        {/* Left Section */}
        <div className="navigation-inside-left">
          <Image
            src="/images/dwlogonew2.webp"
            className="navigation-inside-left-image"
            width={53}
            height={29}
            alt="Logo"
          />
        </div>

        {/* Center Navigation Links */}
        <div className="navigation-inside-big">
         <span className="text-white text-2xl">Welcome to my portfolio</span>
        </div>

        {/* Right Section (Get in Touch Button) */}
        <div className="navigation-inside-right">
          <button
            className="button button-navigation button-transparent-border"
            onClick={() => onNavigate("/contact")}
          >
            <div className="button-content">
              <span className="small-description">Get In Touch</span>
            </div>
            <div className="button-circle button-circle-white">
              <ArrowUpRight className="button-icon" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="navigation-inside-right-mobile"
          onClick={() => setMenu(!menu)}
        >
          <div className={`menu-bars example5 ${menu ? "menu-open" : ""}`}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ menu, setMenu, onNavigate }) => {
  const menuContentRef = useRef(null);
  const menuNavRef = useRef(null);
  const menuSocialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".menu",
      { display: "none" },
      { display: "block", duration: 0.5, ease: customEase },
      0
    )
      .fromTo(
        menuContentRef.current,
        { opacity: 0, gap: "150px" },
        { opacity: 1, duration: 0.5, gap: "2.5vw", ease: customEase },
        0
      )
      .fromTo(
        menuNavRef.current,
        { transform: "translate3d(0, 5vh, 0) rotate(5deg)" },
        {
          transform: "translate3d(0, 0, 0) rotate(0deg)",
          duration: 0.5,
          ease: customEase,
        },
        0
      )
      .fromTo(
        menuSocialRef.current,
        { transform: "translate3d(0, 5vh, 0) rotate(-5deg)" },
        {
          transform: "translate3d(0, 0, 0) rotate(0deg)",
          duration: 0.5,
          ease: customEase,
        },
        0
      );

    if (menu) {
      tl.play();
    } else {
      tl.reverse();
    }

    return () => {
      tl.kill();
    };
  }, [menu]);

  return (
    <div
      className={`menu-container ${menu ? "open" : ""}`}
      onClick={() => setMenu(!menu)}
    >
      <div className="menu">
        <div className="menu-content" ref={menuContentRef}>
          {/* Navigation Links */}
          <div className="menu-navigation" ref={menuNavRef}>
            {["Home", "About", "Works", "Contact"].map((item, index) => (
              <p
                key={index}
                className="headline menu-navigation-text white"
                onClick={() =>
                  onNavigate(
                    item.toLowerCase() === "home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  )
                }
              >
                {item}
              </p>
            ))}
          </div>

          {/* Social Icons */}
          <div className="menu-social" ref={menuSocialRef}>
            <Instagram strokeWidth={1.25} className="menu-social-icon" />
            <Twitter strokeWidth={1.25} className="menu-social-icon" />
            <Linkedin strokeWidth={1.25} className="menu-social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
