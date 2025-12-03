"use client";
import menuItems from "@/data/menu.json"; // adjust path accordingly

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import Flip from "gsap/Flip";
import { usePathname } from "next/navigation";
import AnimatedButton from "../animation/AnimatedButton";
import { SOCIAL_LINKS } from "@/app/constant/SocialLinks";

gsap.registerPlugin(Flip);

export default function MobileMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const submenuRefs = useRef<(HTMLUListElement | null)[]>([]);
  const hamburgerBtnRef = useRef<HTMLAnchorElement | null>(null); // .mxd-nav__hamburger
  const menuContainRef = useRef<HTMLDivElement | null>(null); // .mxd-menu__contain

  // the single element that flips between the two containers
  const flipBaseRef = useRef<HTMLDivElement | null>(null); // .hamburger__base

  // Store scrollHeight values
  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
      setTimeout(
        () => {
          setIsMenuOpen(false);
        },

        800
      );
    } else {
      setIsMenuOpen(true);
      setTimeout(
        () => {
          setIsActive(true);
        },

        600
      );
    }
  };

  // === FLIP ONLY on state change ===
  useLayoutEffect(() => {
    const flipEl = flipBaseRef.current;
    const toMenu = isMenuOpen;

    if (!flipEl || !hamburgerBtnRef.current || !menuContainRef.current) return;

    // Capture current position/sizes before DOM move
    const state = Flip.getState(flipEl);

    // Move the node to its new container
    if (toMenu) {
      menuContainRef.current.appendChild(flipEl);
    } else {
      hamburgerBtnRef.current.appendChild(flipEl);
    }

    // Animate from previous to new layout
    Flip.from(state, {
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, [isMenuOpen]);
  return (
    <nav
      className={`mxd-nav__wrap  ${isActive ? "active_menu" : ""} `}
      data-lenis-prevent=""
    >
      {/* Hamburger Start */}
      <div className="mxd-nav__contain loading__fade">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleToggle();
          }}
          className={`mxd-nav__hamburger ${isMenuOpen ? "nav-open" : ""}`}
          ref={hamburgerBtnRef}
        >
          {/* flip element */}

          <div
            className="hamburger__base"
            ref={flipBaseRef}
            style={{
              background:
                "linear-gradient(135deg, #FFD700 0%, #FF7E00 50%, #B7410E 100%)",
            }}
          />

          <div className="hamburger__line" />
          <div className="hamburger__line" />
        </a>
      </div>
      {/* Hamburger End */}
      {/* Main Navigation Start */}
      <div className={`mxd-menu__wrapper ${isActive ? "active_menu" : ""} `}>
        {/* background active layer */}
        <div className="mxd-menu__base" />
        {/* menu container */}
        <div className="mxd-menu__contain" ref={menuContainRef}>
          <div className="mxd-menu__inner">
            {/* left side */}
            <div className="mxd-menu__left">
              <div className="main-menu">
                <nav className="main-menu__content">
                  <ul id="main-menu" className="main-menu__accordion">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className="main-menu__item fade-in-up-elm"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        {item.href ? (
                          <AnimatedButton
                            text={item.title}
                            className="main-menu__link btn btn-anim"
                            href={item.href}
                          ></AnimatedButton>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            {/* right side */}
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <div
                    className="menu-promo__video fade-in-up-elm"
                    style={{
                      transitionDelay: "0.3s",
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="mxd-btngroup">
                      <AnimatedButton
                        text="X"
                        as={"a"}
                        className="btn btn-anim btn-default slide-down"
                        style={{
                          background:
                            "linear-gradient(135deg, #1DA1F2 0%, #8A2BE2 100%)",
                          color: "white",
                          border: "none",
                        }}
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ph-bold ph-twitter-logo" />
                      </AnimatedButton>
                      <AnimatedButton
                        text="Join Discord"
                        className="btn btn-anim btn-default btn-accent slide-right-up"
                        href={SOCIAL_LINKS.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ph-bold ph-discord-logo" />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger__parking-slot" />
        </div>
      </div>
      {/* Main Navigation End */}
    </nav>
  );
}
