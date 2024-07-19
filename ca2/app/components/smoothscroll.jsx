"use client";
import { ReactLenis } from "lenis/react";

function smoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default smoothScroll;