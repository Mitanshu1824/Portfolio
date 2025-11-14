import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  aspectRatio = "100%",
  className = "",
  once = false,
  style = {},
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  // Create pixel grid
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("absolute", "hidden");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  // Pixel animation
  const animatePixels = (activate) => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;

    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll("div");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    delayedCallRef.current && delayedCallRef.current.kill();

    gsap.set(pixels, { display: "none" });

    const total = pixels.length;
    const staggerTime = animationStepDuration / total;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: { each: staggerTime, from: "random" },
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? "block" : "none";
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: { each: staggerTime, from: "random" },
    });
  };

  const onEnter = () => !isTouchDevice && !isActive && animatePixels(true);
  const onLeave = () => !isTouchDevice && isActive && !once && animatePixels(false);
  const onClick = () => (isTouchDevice ? animatePixels(!isActive) : null);

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        rounded-xl
        bg-[#111827]
        border border-gray-700
        overflow-hidden
        relative
        cursor-pointer
        w-full
      `}
      style={style}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div style={{ paddingTop: aspectRatio }} />

      {/* Default content */}
      <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
        {firstContent}
      </div>

      {/* Transition content */}
      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{ display: "none" }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>

      {/* Grid */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 pointer-events-none z-20"
      />
    </div>
  );
}

export default PixelTransition;
