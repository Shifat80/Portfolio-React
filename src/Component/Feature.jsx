import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientText from "../../Reactbits/GradientText/GradientText";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaCopy,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiVercel,
  SiTypescript,
  SiFramer,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Link } from "react-router";
import { RiTeamLine } from "react-icons/ri";

const BangladeshTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-sm  text-zinc-500">Bangladesh</div>
      <div className="text-zinc-200 font-medium flex items-center">
        <span>{currentTime}</span>
        <div className="ml-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
      </div>
    </>
  );
};

const Feature = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "mehedihasanshipat4@gmail.com";
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-4 py-12 md:py-20 relative">
      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {/* First row, first card (spans 2 columns) */}
        <motion.div
          className="glassmorphism-card md:col-span-2 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-full border border-white/20"></div>
              <div className="w-24 h-24 rounded-full border border-white/20"></div>
              <div className="w-24 h-24 rounded-full border border-white/20"></div>
              <div className="w-24 h-24 rounded-full border border-white/20"></div>
            </div>
          </div>
          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-400/60 shadow-lg">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="font-bold text-center h-24 p-2 text-2xl"
              >
                 Collaboration
                <p>
                  I prioritize client collaboration, fostering open communication
                </p>
              </GradientText>
            </div>
          </div>
        </motion.div>

        {/* First row, second card */}
        <motion.div
          className="glassmorphism-card group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Passionate about{" "}
            <span className="text-purple-400">cutting-edge</span> technologies
          </h3>
          {/* First marquee row */}
          <div className="relative overflow-hidden w-full mb-3 h-10">
            <div className="flex tech-marquee-animation whitespace-nowrap animate-marquee-left">
              <div className="flex gap-3 flex-shrink-0">
                <div className="tech-pill">
                  <FaReact className="text-blue-400 text-lg" />
                  <span className="text-zinc-200">React</span>
                </div>
                <div className="tech-pill">
                  <SiTailwindcss className="text-blue-400 text-lg" />
                  <span className="text-zinc-200">Tailwind CSS</span>
                </div>
                <div className="tech-pill">
                  <SiFirebase className="text-orange-500 text-lg" />
                  <span className="text-zinc-200">Firebase</span>
                </div>
                <div className="tech-pill">
                  <TbBrandJavascript className="text-yellow-400 text-lg" />
                  <span className="text-zinc-200">JavaScript</span>
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-3 flex-shrink-0 ml-3">
                <div className="tech-pill">
                  <FaReact className="text-blue-400 text-lg" />
                  <span className="text-zinc-200">React</span>
                </div>
                <div className="tech-pill">
                  <SiTailwindcss className="text-blue-400 text-lg" />
                  <span className="text-zinc-200">Tailwind CSS</span>
                </div>
                <div className="tech-pill">
                  <SiFirebase className="text-orange-500 text-lg" />
                  <span className="text-zinc-200">Firebase</span>
                </div>
                <div className="tech-pill">
                  <TbBrandJavascript className="text-yellow-400 text-lg" />
                  <span className="text-zinc-200">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
          {/* Second marquee row */}
          <div className="relative overflow-hidden w-full mb-3 h-10">
            <div className="flex tech-marquee-animation whitespace-nowrap animate-marquee-right">
              <div className="flex gap-3 flex-shrink-0">
                <div className="tech-pill">
                  <FaNodeJs className="text-green-500 text-lg" />
                  <span className="text-zinc-200">Node.js</span>
                </div>
                <div className="tech-pill">
                  <SiMongodb className="text-green-500 text-lg" />
                  <span className="text-zinc-200">MongoDB</span>
                </div>
                <div className="tech-pill">
                  <SiExpress className="text-white text-lg" />
                  <span className="text-zinc-200">Express.js</span>
                </div>
                <div className="tech-pill">
                  <FaGithub className="text-white text-lg" />
                  <span className="text-zinc-200">GitHub</span>
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-3 flex-shrink-0 ml-3">
                <div className="tech-pill">
                  <FaNodeJs className="text-green-500 text-lg" />
                  <span className="text-zinc-200">Node.js</span>
                </div>
                <div className="tech-pill">
                  <SiMongodb className="text-green-500 text-lg" />
                  <span className="text-zinc-200">MongoDB</span>
                </div>
                <div className="tech-pill">
                  <SiExpress className="text-white text-lg" />
                  <span className="text-zinc-200">Express.js</span>
                </div>
                <div className="tech-pill">
                  <FaGithub className="text-white text-lg" />
                  <span className="text-zinc-200">GitHub</span>
                </div>
              </div>
            </div>
          </div>
          {/* Third marquee row */}
          <div className="relative overflow-hidden w-full h-10">
            <div className="flex tech-marquee-animation whitespace-nowrap animate-marquee-left-slow">
              <div className="flex gap-3 flex-shrink-0">
                <div className="tech-pill">
                  <SiVercel className="text-zinc-200 text-lg" />
                  <span className="text-zinc-200">Vercel</span>
                </div>
                <div className="tech-pill">
                  <FaFigma className="text-purple-500 text-lg" />
                  <span className="text-zinc-200">Figma</span>
                </div>
                <div className="tech-pill">
                  <SiNextdotjs className="text-zinc-200 text-lg" />
                  <span className="text-zinc-200">Next.js</span>
                </div>
                <div className="tech-pill">
                  <SiTypescript className="text-blue-400 text-lg" />
                  <span className="text-zinc-200">TypeScript</span>
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-3 flex-shrink-0 ml-3">
                <div className="tech-pill">
                  <SiVercel className="text-zinc-200 text-lg" />
                  <span className="text-zinc-200">Vercel</span>
                </div>
                <div className="tech-pill">
                  <FaFigma className="text-purple-500 text-lg" />
                  <span className="text-zinc-200">Figma</span>
                </div>
                <div className="tech-pill">
                  <SiNextdotjs className="text-zinc-200 text-lg" />
                  <span className="text-zinc-200">Next.js</span>
                </div>
                <div className="tech-pill">
                  <SiTypescript className="text-blue-400 text-lg" />
                  <span className="text-zinc-200">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second row, first card */}
        <motion.div
          className="glassmorphism-card relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ minHeight: "280px" }}
        >
          {/* Background iframe positioned absolutely */}
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none rounded-2xl overflow-hidden">
            <iframe
              src="https://same-tables-367077.framer.app/"
              title="Framer Site"
              className="w-full h-full"
              style={{ border: "none", pointerEvents: "none" }}
              allowFullScreen
            />
          </div>

          {/* Content overlay with higher z-index */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-8 text-blue-300 drop-shadow-lg">
              I'm very flexible with time zone communications
            </h3>
          </div>

          <div className=" absolute bottom-6 left-6 z-20  glassmorphism-mini">
            <BangladeshTime />
          </div>
        </motion.div>

        {/* Second row, second card */}
        <motion.div
          className="glassmorphism-card md:col-span-2 flex flex-col justify-center items-center text-center group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-2xl font-bold text-white mb-2">Ping ME!</div>
          <h3 className="text-xl font-bold text-zinc-200 mb-2">
            Let's work together
          </h3>
          <p className="text-zinc-300 mb-6">on your next project</p>

          <div className="flex items-center gap-2">
            <a
              href="mailto:mehedihasanshipat4@gmail.com"
              className="contact-button"
            >
              <FaEnvelope className="text-zinc-300 text-lg" />
              <span className="text-zinc-200">
                mehedihasanshipat4@gmail.com
              </span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="copy-button relative"
              aria-label="Copy email address"
            >
              <FaCopy
                className={`text-lg ${
                  copied ? "text-green-400" : "text-zinc-300"
                }`}
              />

              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 glassmorphism-mini text-green-200 text-xs py-1 px-2 rounded whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              )}
            </button>
          </div>
        </motion.div>

        {/* Third row - wide card */}
        <motion.div
          className="glassmorphism-card md:col-span-3 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Marquee container with overflow hidden */}
          <div className="relative overflow-hidden w-full mb-4">
            {/* Auto-scrolling inner content */}
            <div className="flex project-marquee-animation whitespace-nowrap animate-marquee-projects">
              <div className="flex gap-4 flex-shrink-0">
                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">
                    API Gateway &
                  </h4>
                  <h4 className="font-medium text-zinc-200">Documentation</h4>
                  <div className="text-xs text-zinc-400 mt-2">Guides</div>
                  <div className="text-xs text-zinc-400">Resources</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">User</h4>
                  <h4 className="font-medium text-zinc-200">Onboarding</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Flow Design
                  </div>
                  <div className="text-xs text-zinc-400">Step-by-step</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">Payment</h4>
                  <h4 className="font-medium text-zinc-200">System</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Architecture
                  </div>
                  <div className="text-xs text-zinc-400">Security</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">
                    Monitoring &
                  </h4>
                  <h4 className="font-medium text-zinc-200">Analytics</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Infrastructure
                  </div>
                  <div className="text-xs text-zinc-400">Real-time data</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">
                    Design System
                  </h4>
                  <h4 className="font-medium text-zinc-200">& UI</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Consistency
                  </div>
                  <div className="text-xs text-zinc-400">Components</div>
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-4 flex-shrink-0 ml-4">
                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">
                    API Gateway &
                  </h4>
                  <h4 className="font-medium text-zinc-200">Documentation</h4>
                  <div className="text-xs text-zinc-400 mt-2">Guides</div>
                  <div className="text-xs text-zinc-400">Resources</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">User</h4>
                  <h4 className="font-medium text-zinc-200">Onboarding</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Flow Design
                  </div>
                  <div className="text-xs text-zinc-400">Step-by-step</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">Payment</h4>
                  <h4 className="font-medium text-zinc-200">System</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Architecture
                  </div>
                  <div className="text-xs text-zinc-400">Security</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">
                    Monitoring &
                  </h4>
                  <h4 className="font-medium text-zinc-200">Analytics</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Infrastructure
                  </div>
                  <div className="text-xs text-zinc-400">Real-time data</div>
                </div>

                <div className="project-card">
                  <h4 className="font-medium text-zinc-200 mb-1">
                    Design System
                  </h4>
                  <h4 className="font-medium text-zinc-200">& UI</h4>
                  <div className="text-xs text-zinc-400 mt-2">
                    Consistency
                  </div>
                  <div className="text-xs text-zinc-400">Components</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-zinc-400 text-sm mt-4">The Inside Scoop</div>
          <h3 className="text-xl font-bold text-zinc-200">
            Currently building a Saas Application
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
