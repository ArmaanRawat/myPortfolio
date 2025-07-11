import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Armaan Rawat</p>
            <p className="subtext">
              I'm a competitive programmer and full-stack developer with 3+
              years of experience. From algorithms to apps — I build solutions
              that work. well maybe sometimes for fun.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "55deg", top: "15%", left: "5%" }}
              text="Competitive Programming"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "30%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", top: "25%", left: "75%" }}
              text="Optimized Algorithms"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "10%" }}
              text="Clean Architecture"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "45%" }}
              text="Full-Stack Engineering"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="Scalable Systems"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "55deg", top: "75%", left: "50%" }}
              image="assets/logos/cplusplus.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "45%", left: "50%" }}
              image="assets/logos/skill-icons--postgresql-light.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "40%", left: "75%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "70%", left: "14%" }}
              image="assets/logos/skill-icons--typescript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "50%", left: "85%" }}
              image="assets/logos/skill-icons--python-dark.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              🌍 Timezone: India Standard Time (IST) (UTC +05:30)
              <br />
              Let's connect — no matter where you are in the world!
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Ready to team up and create something impactful?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
