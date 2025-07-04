import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [preview, setPreview] = useState(null);

  // Clamp the preview image position to stay within the viewport
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMouseMove = (e) => {
    if (!preview) return;
    const imgWidth = 320; // w-80 = 320px
    const imgHeight = 224; // h-56 = 224px
    const padding = 16; // 16px padding from edge
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    let newX = e.clientX + 20;
    let newY = e.clientY + 20;
    // Clamp so image stays in viewport
    newX = clamp(newX, padding, winW - imgWidth - padding);
    newY = clamp(newY, padding, winH - imgHeight - padding);
    x.set(newX);
    y.set(newY);
  };

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space mt-20 md:mt-30 mb-20 md:mb-30">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
