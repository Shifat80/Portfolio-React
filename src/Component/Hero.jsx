import React, { useState } from "react";
import Orb from "../../Reactbits/Orb/Orb";
import BlurText from "../../Reactbits/BlurText/BlurText";
import GradientText from "../../Reactbits/GradientText/GradientText";



const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="min-h-[600px] w-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center py-16 px-4 md:py-16 md:px-12">
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
          <div
            className="relative translate-y-3/6 w-[80%] aspect-square z-0 pointer-events-none"
            style={{ transform: "translateY(20%) scale(1.2)" }}
          >
            <Orb
              hoverIntensity={0}
              rotateOnHover={false}
              hue={30}
              forceHoverState={false}
            />
          </div>
        </div>

        <div className="z-10 flex flex-col items-center justify-center text-center h-[80vh] mx-auto mt-16 sm:mt-8 md:mt-0">
          <BlurText
            text="Hi, I'm  Shifat"
            delay={100}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 sm:mb-4 text-center text-white drop-shadow-lg"
          />

          {/* <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
           Shifat
          </GradientText> */}

          <BlurText
            text="Full-Stack Developer"
            delay={400}
            animateBy="words"
            direction="top"
            className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-8 sm:mb-10 text-center text-white/90 tracking-wide"
          />

          <p className="text-base sm:text-lg md:text-2xl opacity-90 mb-8 mx-auto max-w-2xl text-white/80 font-medium leading-relaxed drop-shadow">
            Blending <span className="font-bold ">MERN</span>,{" "}
            <span className="font-bold ">AI</span> &amp;{" "}
            <span className="font-bold ">Design</span> to build
            smart, secure &amp; scalable digital experiences.
            <br />
            From intuitive user interfaces to intelligent backends.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
              animationSpeed={3}
              showBorder={true}
              className="px-6 py-2 rounded-full text-base sm:text-lg font-semibold shadow-md"
            >
              🔧 MERN Stack
            </GradientText>

            <GradientText
              colors={["#8a2be2", "#4361ee", "#7209b7", "#4cc9f0"]}
              animationSpeed={3}
              showBorder={true}
              className="px-6 py-2 rounded-full text-base sm:text-lg font-semibold shadow-md"
            >
              🤖 AI Integration
            </GradientText>

            <GradientText
              colors={["#40ffaa", "#ff4079", "#40ffaa", "#ff4079"]}
              animationSpeed={3}
              showBorder={true}
              className="px-6 py-2 rounded-full text-base sm:text-lg font-semibold shadow-md"
            >
              🛡️ Security
            </GradientText>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 border border-white font-bold rounded-full transition-all duration-500 ease-in-out relative group overflow-hidden cursor-pointer text-lg bg-white/10 hover:bg-white/20 shadow-lg">
              <span className="relative z-10">📄 View My Resume</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>

            <button className="px-8 py-3 border border-white font-bold rounded-full transition-all duration-500 ease-in-out relative group overflow-hidden cursor-pointer text-lg bg-white/10 hover:bg-white/20 shadow-lg">
              <span className="relative z-10">📬 Let's Connect</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
