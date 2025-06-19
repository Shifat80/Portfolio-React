import React from "react";
import Particles from "../../Reactbits/Particles/Particles";
// import TiltedCard from "../../Reactbits/TiltedCard/TiltedCard";
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard";
import SpotlightCard from "../../Reactbits/SpotlightCard/SpotlightCard";
import GradientText from "../../Reactbits/GradientText/GradientText";
import { Link } from "react-router";

const About = () => {
  return (
    <div id="about" className="px-4 py-12 md:py-20">
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

      {/* Content Container - Now using max-w-7xl like Feature.jsx */}
      <div className="relative z-10 max-w-7xl mx-auto py-16">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="font-extrabold text-5xl mb-12 "
        >
          About me!
        </GradientText>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Title Card with Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <ProfileCard
              name="M. Hasan Shifat"
              title="Software Engineer"
              handle="mehedi-hasan-shifat"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profile.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open('https://wa.me/8801829774960', '_blank')}
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(10, 92, 222, 0.426)"
            >
              <h3 className="text-2xl font-bold mb-4">My Background</h3>
              <p className="mb-4">
                I am currently an undergraduate student pursuing a Bachelor of
                Science in Computer Science and Engineering (CSE) at Bangladesh
                University of Business & Technology. I have a strong passion for
                technology and innovation, with a particular interest in
                Full-Stack Web Development, Artificial Intelligence (AI), and
                Cybersecurity.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-6">
                Field of Interest
              </h3>
              <p className="mb-4">
                I am passionate about exploring cutting-edge technologies that
                solve real-world problems. My core areas of interest include:
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center">
                  <span className="mr-2">💻</span> Full-Stack Development (MERN)
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🧠</span> AI & Machine Learning
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🛡️</span> Ethical Hacking &
                  Cybersecurity
                </div>
                <div className="flex items-center">
                  <span className="mr-2">☁️</span> DevOps & Cloud Computing
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Technical Skills</h3>
              <p className="mb-4">
                I continuously improve and expand my technical toolkit. My
                current skill set includes:
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center">
                  <span className="mr-2">🧑‍💻</span> JavaScript, Python, C/C++,
                  Java, SQL, 8086 Assembly
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⚙️</span> React.js, Node.js,
                  Express.js, MongoDB, Firebase,
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🗂️</span> Git & GitHub
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🛠️</span> REST APIs, Figma, Postman,
                  Firebase Auth, Docker (beginner)
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
