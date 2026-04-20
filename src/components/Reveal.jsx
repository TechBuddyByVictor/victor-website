import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  style,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileViewport = window.matchMedia("(max-width: 759px)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const bounds = node.getBoundingClientRect();
    const revealFallback =
      bounds.top < window.innerHeight * 1.4
        ? window.setTimeout(() => setIsVisible(true), isMobileViewport ? 900 : 1400)
        : undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: isMobileViewport ? 0.08 : 0.16,
        rootMargin: isMobileViewport ? "0px 0px -6% 0px" : "0px 0px -12% 0px",
      },
    );

    observer.observe(node);

    return () => {
      if (revealFallback) {
        window.clearTimeout(revealFallback);
      }

      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
