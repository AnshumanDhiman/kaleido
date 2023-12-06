import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import logo from "../../assets/gsap_components/logo.png";

export default function Hero() {
  const containerRef = useRef(null);
  const layouts = ["final", "plain", "columns", "grid1"];
  const curLayoutRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const nextState = () => {
      const container = containerRef.current;
      const state = Flip.getState(".letter, .for, .gsap", {
        props: "color,backgroundolor",
        simple: true,
      });

      container.classList.remove(layouts[curLayoutRef.current]);
      curLayoutRef.current = (curLayoutRef.current + 1) % layouts.length;
      container.classList.add(layouts[curLayoutRef.current]);

      Flip.from(state, {
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.inOut",
        spin: curLayoutRef.current === 0,
        simple: true,
        onEnter: (elements, animation) =>
          gsap.fromTo(
            elements,
            { opacity: 0 },
            { opacity: 1, delay: animation.duration() - 0.1 },
          ),
        onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
      });

      if (curLayoutRef.current !== 0) {
        gsap.delayedCall(1.5, nextState);
      }
    };
    gsap.delayedCall(1, nextState);
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        className={`container ${layouts[curLayoutRef.current]}`}
      >
        <div className="letter A">A</div>
        <div className="letter B">B</div>
        <div className="letter C">C</div>
        <div className="for">Letters</div>
        <img src={logo} className="w-40 gsap" />
      </div>
  
    </>
  );
}
