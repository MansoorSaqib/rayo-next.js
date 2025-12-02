"use client";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisSmoothScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Create scrollerProxy for better ScrollTrigger integration
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      scrollLeft(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Ensure scrollbar is visible and working
    document.body.style.overflow = "auto";

    // Update ScrollTrigger when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Centralized refresh handler for all animations
    const handleRefresh = () => {
      // Avoid running in non-browser / insecure contexts
      if (typeof window === "undefined") return;

      // Small delay to ensure all components are ready
      setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch (e) {
          // In some browsers/environments (iframes, strict privacy),
          // ScrollTrigger.refresh can throw "The operation is insecure".
          // Swallow it to avoid breaking the app; animations just won't refresh.
          console.warn("ScrollTrigger.refresh() failed", e);
        }
      }, 100);
    };

    // Handle window resize
    const handleResize = () => {
      handleRefresh();
    };

    // Listen for ScrollTrigger refresh events
    ScrollTrigger.addEventListener("refresh", handleRefresh);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      // Revert scrollerProxy
      ScrollTrigger.scrollerProxy(document.body, {});
      // Reset body overflow
      document.body.style.overflow = "";
    };
  }, [lenis]);
  // return null for ios
  if (
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  ) {
    return null;
  }
  return <ReactLenis root />;
}
