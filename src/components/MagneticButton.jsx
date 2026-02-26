import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MagneticButton = ({
  children,
  className = "",
  strength = 40,
}) => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const move = (e) => {
      const rect = wrapper.getBoundingClientRect();

      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const moveX = (relX - rect.width / 2) / rect.width;
      const moveY = (relY - rect.height / 2) / rect.height;

      gsap.to(inner, {
        x: moveX * strength,
        y: moveY * strength,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    };

    wrapper.addEventListener("mousemove", move);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mousemove", move);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} className={`inline-block ${className}`}>
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

export default MagneticButton;