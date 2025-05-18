import React from "react";
import Orb from "../../Reactbits/Orb/Orb";
import BlurText from "../../Reactbits/BlurText/BlurText";
import GradientText from "../../Reactbits/GradientText/GradientText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Hero = () => {
  return (
    <div className="min-h-[600px] w-full relative">
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>

        {/* Left Side Content */}
        <div className="z-10 text-left md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-4">
          <BlurText
            text="Hi, I'm Shifat"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl md:text-6xl font-bold mb-4"
          />

          <BlurText
            text="Full-Stack Developer"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl font-bold mb-6"
          />

          <p className="text-md md:text-lg opacity-90 mb-8">
            Blending MERN, AI & Design to build smart, secure & scalable digital
            experiences. From intuitive user interfaces to intelligent backends,
            I craft solutions that solve real-world problems — like secure crime
            reporting systems and AI-powered health tools.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
              animationSpeed={3}
              showBorder={true}
              className="px-5 py-2 rounded-full text-sm font-medium"
            >
              🔧 MERN Stack
            </GradientText>

            <GradientText
              colors={["#ffaa40", "#4079ff", "#ffaa40", "#4079ff"]}
              animationSpeed={3}
              showBorder={true}
              className="px-5 py-2 rounded-full text-sm font-medium"
            >
              🎨 3D Web Interfaces
            </GradientText>

            <GradientText
              colors={["#40ffaa", "#ff4079", "#40ffaa", "#ff4079"]}
              animationSpeed={3}
              showBorder={true}
              className="px-5 py-2 rounded-full text-sm font-medium"
            >
              🛡️ Cybersecurity
            </GradientText>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all cursor-pointer">
              🔗 Explore My Work
            </button>

            <button className="px-6 py-2 border border-white font-semibold rounded-lg transition-all duration-500 ease-in-out relative group overflow-hidden cursor-pointer">
              <span className="relative z-10">📄 View My Resume</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>

            <button className="px-6 py-2 border border-white font-semibold rounded-lg transition-all duration-500 ease-in-out relative group overflow-hidden cursor-pointer">
              <span className="relative z-10">📬 Let's Connect</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>
          </div>
        </div>

        {/* Right Side Content */}
      </div>
    </div>
  );
};

export default Hero;
