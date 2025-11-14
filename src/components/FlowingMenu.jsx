import React from "react";
import { gsap } from "gsap";

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, description, image }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo.out" };

  // Determine hover entry edge (top or bottom)
  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  // Repeated content for marquee movement
  const repeatedMarqueeContent = Array.from({ length: 3 }).map((_, idx) => (
    <React.Fragment key={idx}>
      {description.map((skill, i) => (
      <div
  key={i}
  className="flex items-center gap-2 sm:gap-3 mx-[4vw] whitespace-nowrap"
>
  <img
    src={skill.icon}
    alt={skill.name}
    className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-90"
  />

  <span className="
    text-[#060010] uppercase font-bold 
    text-[2vh] sm:text-[2.5vh] md:text-[3vh]
  ">
    {skill.name}
  </span>
</div>
      ))}
    </React.Fragment>
  ));
  
  return (
    <div
      ref={itemRef}
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
    >
      <a
        to={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center h-full relative cursor-pointer uppercase font-semibold text-white text-[4vh] hover:text-[#060010] transition-colors duration-300"
      >
        {text}
      </a>

      {/* Animated marquee container */}
      <div
        ref={marqueeRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center h-full min-w-[200%] will-change-transform animate-skill-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
