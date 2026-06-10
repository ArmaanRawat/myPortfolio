import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="section-shell bg-[#f7f5ef]" id="about">
      <div className="section-inner">
        <p className="section-kicker">About</p>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-heading">Built with clarity, craft, and care.</h2>
          <p className="glass-panel rounded-[1.5rem] p-6 text-base leading-8 text-neutral-600">
            I work across algorithms, interfaces, APIs, and cloud-ready systems
            to build products that look clean and behave reliably.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[18rem]">
          <div className="grid-default-color relative row-span-2 min-h-[40rem] overflow-hidden hover:-translate-y-1 duration-200 md:col-span-3 md:h-full">
            <div className="flex h-full flex-col gap-6">
              <div className="glass-chip flex min-h-64 flex-1 items-center justify-center rounded-[1.35rem] p-5">
                <img
                  src="/assets/sample.png"
                  alt="Developer workspace"
                  className="h-full max-h-80 w-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <p className="section-kicker mb-2">Brief Intro</p>
                <p className="headtext">Hi, I'm Armaan Rawat</p>
                <p className="subtext">
                  Competitive programmer and full-stack developer with 3+ years
                  of experience building practical, refined, and enjoyable web
                  products.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="glass-chip rounded-2xl p-3">
                    <p className="font-display text-xl font-semibold text-neutral-950">
                      3+
                    </p>
                    <p className="text-xs font-medium text-neutral-500">
                      Years
                    </p>
                  </div>
                  <div className="glass-chip rounded-2xl p-3">
                    <p className="font-display text-xl font-semibold text-neutral-950">
                      Full
                    </p>
                    <p className="text-xs font-medium text-neutral-500">
                      Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-default-color grid-2">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full">
              <p className="font-display flex items-end text-center text-4xl font-semibold text-neutral-200 md:text-5xl">
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
          <div className="grid-black-color grid-3">
            <div className="relative z-10 max-w-[58%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                India Standard Time (IST), UTC +05:30.
                <br />
                Open to async collaboration across regions.
              </p>
            </div>
            <figure className="absolute left-[34%] top-[8%] opacity-80">
              <Globe />
            </figure>
          </div>
          <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">
                Ready to team up and create something impactful?
              </p>
              <CopyEmailButton />
            </div>
          </div>
          <div className="grid-default-color grid-5">
            <div className="relative z-10 max-w-[52%]">
              <p className="headtext">Tech Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                that help me build robust and scalable applications.
              </p>
            </div>
            <div className="absolute inset-y-0 start-[48%] h-full w-full md:inset-y-9 md:scale-110">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
