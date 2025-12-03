"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bot2 from "@/app/assets/bot2.png";
import AnimatedButton from "@/components/animation/AnimatedButton";
import { SOCIAL_LINKS } from "@/app/constant/SocialLinks";

export default function HeroSection() {
  const fadeOutRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scaleOutRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Fade Out Animation
    fadeOutRefs.current.forEach((el) => {
      if (el) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".mxd-hero-08__tl-trigger",
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          })
          .fromTo(
            el,
            { transform: "translate3d(0, 0, 0)", opacity: 1 },
            { transform: "translate3d(0, -5rem, 0)", opacity: 0 }
          );
      }
    });

    // Scale Out Animation
    scaleOutRefs.current.forEach((el) => {
      if (el) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".mxd-hero-08__tl-trigger",
              start: "top 40%",
              end: "top 10%",

              scrub: true,
            },
          })
          .fromTo(
            el,
            { transform: "translate3d(0, 0, 0)", scaleY: 1, opacity: 1 },
            { transform: "translate3d(0, -5rem, 0)", scaleY: 1.2, opacity: 0 }
          );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <div className="mxd-section">
        <div className="mxd-hero-08">
          <div className="mxd-hero-08__wrap loading-wrap">
            <div className="mxd-hero-08__center">
              <div className="mxd-hero-08__headline">
                <div className="mxd-container">
                  <div className="hero-08-headline__image">
                    <Image
                      // className="mxd-rotate-slow"
                      className="mxd-move"
                      alt="Hero Image"
                      src={bot2}
                      width={800}
                      height={781}
                    />
                  </div>
                  <div
                    className="hero-08-headline__title hero-08-slide-out-scroll loading__item"
                    ref={(el) => {
                      fadeOutRefs.current[0] = el;
                    }}
                  >
                    <h1>
                      DIGITAL KNIGHTS -
                      <br />
                      BUILT TO STAND OUT
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-hero-08__bottom">
              <div
                className="mxd-hero-08__data-wrap hero-08-scale-out-scroll"
                style={{ minWidth: "40%" }}
                ref={(el) => {
                  scaleOutRefs.current[1] = el;
                }}
              >
                <div className="mxd-hero__mark loading__item">
                  <span className="mark-text">3D WEB3 UNIVERSE</span>
                </div>
                <div className="mxd-hero-08__descr loading__item">
                  <p
                    className="t-large t-medium t-120 t-muted gradient-text"
                    style={{ fontSize: 20, marginTop: 10 }}
                  >
                    Digital Knights is a 3D Web3 universe where color, armor,
                    and identity all lock in together. Every Knight is crafted
                    as a high-quality 3D avatar with a focused color system,
                    distinct textures, and traits that actually mean something.
                  </p>

                  <p
                    className="t-large t-medium t-120 t-muted gradient-rusty"
                    style={{ fontSize: 18, marginTop: 10 }}
                  >
                    Armor on. Identity locked. This is for the people who refuse
                    to blend in.
                  </p>
                </div>
                <div
                  className="mxd-btngroup"
                  style={{ marginBottom: 20, marginTop: 20 }}
                >
                  <AnimatedButton
                    text="Follow Updates on X"
                    as="a"
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
                  />

                  <AnimatedButton
                    text="Join The Knights on Discord"
                    className="btn btn-anim btn-default btn-outline slide-right-up"
                    href={SOCIAL_LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
            </div>
            <div className="mxd-hero-08__tl-trigger" />
          </div>
        </div>
      </div>
    </>
  );
}
