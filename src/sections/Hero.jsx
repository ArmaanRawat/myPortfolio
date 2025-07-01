import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  useFrame((state, delta) => {
    if (isMobile) {
      // Set a static camera position for mobile
      state.camera.position.set(0, 1, 3);
      state.camera.lookAt(0, 1, 0);
    } else {
      // Animate camera based on mouse for desktop
      easing.damp3(
        state.camera.position,
        [state.pointer.x / 10, 1 + state.pointer.y / 10, 3],
        0.5,
        delta
      );
    }
  });
  return null;
}

export default Hero;
