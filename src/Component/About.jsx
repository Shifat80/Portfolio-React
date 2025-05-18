import React from "react";
import Particles from "../../Reactbits/Particles/Particles";
import TiltedCard from "../../Reactbits/TiltedCard/TiltedCard";
import SpotlightCard from "../../Reactbits/SpotlightCard/SpotlightCard";

const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Particles Background - Fixed position to cover entire viewport */}
      <div className="fixed inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content Container - Z-index to position above particles */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Title Card with Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <TiltedCard
              imageSrc="https://i.ibb.co/k2Z21dqQ/1724651802012.jpg"
              altText="Mehedi Hasan Shifat"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="500px"
              imageWidth="400px"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-purple-900/40 to-transparent backdrop-blur-sm border border-white/20 rounded-lg">
                  {/* Name Section - Left Aligned */}
                  <div className="text-left">
                    <h3 className="text-3xl font-bold text-white mb-1">
                      Mehedi
                    </h3>
                    <h3 className="text-3xl font-bold text-white mb-1">
                      Hasan
                    </h3>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Shifat
                    </h3>

                    {/* Social Links - Horizontal Layout */}
                    <div className="mt-4 flex gap-4">
                      <a
                        href="https://github.com/Shifat80"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/30"
                      >
                        <span className="text-xl">🔗</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/mehedi-hasan-shifat-87870a23b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/30"
                      >
                        <span className="text-xl">💼</span>
                      </a>
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(10, 92, 222, 0.426)"
          >
              <h3 className="text-2xl font-bold mb-4">My Background</h3>
              <p className="mb-4">
                I'm Mehedi Hasan Shifat, a Full-Stack Developer with expertise
                in the MERN stack and a passion for building engaging digital
                experiences. I blend technical knowledge with creative design to
                craft solutions that are not only functional but also intuitive
                and visually compelling.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-6">
                Experience & Skills
              </h3>
              <p className="mb-4">
                With several years of experience in web development, I've worked
                on projects ranging from secure crime reporting systems to
                AI-powered health tools. My technical toolkit includes:
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center">
                  <span className="mr-2">🔧</span> React & Next.js
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🔧</span> Node.js & Express
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🔧</span> MongoDB & Firebase
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🤖</span> AI Integration
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎨</span> 3D Web Interfaces
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🛡️</span> Cybersecurity
                </div>
              </div>

              <div className="mt-6">
                <button className="px-6 py-2 border border-white font-semibold rounded-lg transition-all duration-500 ease-in-out relative group overflow-hidden cursor-pointer">
                  <span className="relative z-10">📄 Download CV</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </button>
              </div>
          </SpotlightCard>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
