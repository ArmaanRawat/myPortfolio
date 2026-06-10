import React from "react";

function ParallaxBackground() {
  return (
    <section className="pointer-events-none absolute inset-0 overflow-hidden bg-[#f7f5ef]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.94)_0%,rgba(247,245,239,0.9)_48%,rgba(226,239,236,0.75)_100%)]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#c9f0e8]/55 blur-3xl" />
      <div className="absolute right-[-8rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[#f2d7b6]/50 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-white blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
    </section>
  );
}

export default ParallaxBackground;
