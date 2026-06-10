import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f7f5ef] pt-28 text-[#111111] md:pt-24">
      <ParallaxBackground />
      <div className="section-inner relative z-10">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
