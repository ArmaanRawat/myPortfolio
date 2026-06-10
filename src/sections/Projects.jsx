import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
} from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [preview, setPreview] = useState(null);

  // Clamp the preview image position to stay within the viewport
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMouseMove = (e) => {
    if (!preview) return;
    const imgWidth = 320;
    const imgHeight = 220;
    const padding = 16;
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    let newX = e.clientX + 20;
    let newY = e.clientY + 20;
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
      className="section-shell bg-[linear-gradient(180deg,#f7f5ef_0%,#eef8f3_100%)]">
      <div className="section-inner">
        <p className="section-kicker">Selected Work</p>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-heading">Projects with product polish.</h2>
          <div className="glass-panel rounded-[1.5rem] p-6">
            <p className="text-base leading-8 text-neutral-600">
              A focused set of apps and tools built around useful interactions,
              clean implementation, and thoughtful user experience.
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-4">
          {myProjects.map((project) => (
            <Project key={project.id} {...project} setPreview={setPreview} />
          ))}
        </div>
      </div>
      {preview && (
        <Motion.img
          className="glass-panel pointer-events-none fixed left-0 top-0 z-50 max-h-56 w-80 rounded-2xl object-contain p-2"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
