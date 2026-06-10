import { motion as Motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <Motion.img
      className="glass-chip absolute w-14 cursor-grab rounded-2xl p-2"
      src={image.startsWith("/") ? image : "/" + image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <Motion.div
      className="glass-chip absolute w-[12rem] cursor-grab rounded-full px-4 py-3 text-center text-sm font-semibold text-neutral-700"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}>
      {text}
    </Motion.div>
  );
};

export default Card;
