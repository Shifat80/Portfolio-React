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

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-sm text-zinc-500">Bangladesh</div>
      <div className="text-zinc-200 font-medium flex items-center">
        <span>{currentTime}</span>
        <div className="ml-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
      </div>
    </>
  );
};

const Feature = () => {
  // Add this state for copy notification
  const [copied, setCopied] = useState(false);

  // Replace just the handleCopyEmail function
  const handleCopyEmail = () => {
    const email = "mehedihasanshipat4@gmail.com";

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Execute copy command
    document.execCommand("copy");

    // Clean up and provide feedback
    document.body.removeChild(tempInput);
    setCopied(true);

    // Reset after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-4 py-12 md:py-20">
      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* First row, first card (spans 2 columns) */}
        <motion.div
          className="bg-transparent backdrop-blur-sm rounded-2xl p-6 md:col-span-2 border border-zinc-800 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-full border border-zinc-700"></div>
              <div className="w-24 h-24 rounded-full border border-zinc-700"></div>
              <div className="w-24 h-24 rounded-full border border-zinc-700"></div>
              <div className="w-24 h-24 rounded-full border border-zinc-700"></div>
            </div>
          </div>

          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500">
              <img
                src="/public/Adobe Express - file.png"
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
                className=" font-bold text-start text-2xl"
              >
                <RiTeamLine className="text-2xl text-white" /> Collaboration
                <p>
                  {" "}
                  I prioritize client collaboration, fostering open
                  communication
                </p>
              </GradientText>
            </div>
            <p className="text-lg font-medium text-zinc-300"></p>
          </div>
        </motion.div>

        {/* First row, second card */}
        <motion.div
          className="bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Passionate about{" "}
            <span className="text-purple-600">cutting-edge</span> technologies
          </h3>

          {/* First marquee row */}
          <div className="relative overflow-hidden w-full mb-3 h-10">
            <div className="flex tech-marquee-animation whitespace-nowrap">
              {[1, 2, 3].map((set) => (
                <div
                  key={`row1-${set}`}
                  className="flex gap-5 min-w-full animate-marquee-left"
                >
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <FaReact className="text-blue-400 text-lg" />
                    <span className="text-zinc-300">React</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <SiTailwindcss className="text-blue-400 text-lg" />
                    <span className="text-blue-400">Tailwind CSS</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <SiFirebase className="text-orange-500 text-lg" />
                    <span className="text-blue-500">Firebase</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <TbBrandJavascript className="text-yellow-400 text-lg" />
                    <span className="text-yellow-300">JavaScript</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second marquee row */}
          <div className="relative overflow-hidden w-full mb-3 h-10">
            <div className="flex tech-marquee-animation whitespace-nowrap">
              {[1, 2, 3].map((set) => (
                <div
                  key={`row2-${set}`}
                  className="flex gap-3 min-w-full animate-marquee-right"
                >
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <FaNodeJs className="text-green-500 text-lg" />
                    <span className="text-red-400">Node.js</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <SiMongodb className="text-green-500 text-lg" />
                    <span className="text-green-400">MongoDB</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <SiExpress className="text-white text-lg" />
                    <span className="text-blue-500">Express.js</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <FaGithub className="text-white text-lg" />
                    <span className="text-white">GitHub</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third marquee row */}
          <div className="relative overflow-hidden w-full h-10">
            <div className="flex tech-marquee-animation whitespace-nowrap">
              {[1, 2, 3].map((set) => (
                <div
                  key={`row3-${set}`}
                  className="flex gap-3 min-w-full animate-marquee-left-slow"
                >
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <SiVercel className="text-zinc-200 text-lg" />
                    <span className="text-zinc-200">Vercel</span>
                  </div>
                  <div className="bg-zinc-800/80 rounded-md px-3 py-1.5 flex items-center gap-2 flex-shrink-0 border border-zinc-700/20">
                    <FaFigma className="text-purple-500 text-lg" />
                    <span className="text-purple-300">Figma</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Second row, first card */}
        <motion.div
          className="bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ minHeight: "280px" }} // Ensure card has enough height
        >
          {/* Background iframe positioned absolutely */}
          <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
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
            <h3 className="text-xl font-bold mb-8 text-blue-400 drop-shadow-md">
              I'm very flexible with time zone communications
            </h3>

            <div className="flex gap-2 mb-8">
              <div className="bg-zinc-800/80 backdrop-blur-sm rounded-md px-3 py-1 flex items-center gap-1">
                <span className="text-zinc-300">UK</span>
              </div>
              <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-500 rounded-md px-3 py-1 flex items-center gap-1">
                <span className="text-blue-400">Bangladesh</span>
              </div>
              <div className="bg-zinc-800/80 backdrop-blur-sm rounded-md px-3 py-1 flex items-center gap-1">
                <span className="text-zinc-300">USA</span>
              </div>
            </div>
          </div>

          <div className="mt-auto absolute bottom-6 left-6 z-10 bg-zinc-900/70 backdrop-blur-sm px-3 py-1 rounded-md">
            <BangladeshTime />
          </div>
        </motion.div>

        {/* Second row, second card */}
        <motion.div
          className="bg-transparent backdrop-blur-sm rounded-2xl p-6 md:col-span-2 border border-zinc-800 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-2xl font-bold text-white mb-2">Ping ME!</div>
          <h3 className="text-xl font-bold text-zinc-300 mb-2">
            Let's work together
          </h3>
          <p className="text-zinc-400 mb-6">on your next project</p>

          <div className="flex items-center gap-2">
            <Link
              href="mailto:mehedihasanshipat4@gmail.com"
              className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-md px-4 py-2 flex items-center gap-2"
            >
              <FaEnvelope className="text-zinc-400 text-lg" />
              <span className="text-zinc-300">
                mehedihasanshipat4@gmail.com
              </span>
            </Link>

            <button
              onClick={handleCopyEmail}
              className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-md transition-all duration-200 relative"
              aria-label="Copy email address"
            >
              <FaCopy
                className={`text-lg ${
                  copied ? "text-green-400" : "text-zinc-400"
                }`}
              />

              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-800/70 text-green-200 text-xs py-1 px-2 rounded whitespace-nowrap backdrop-blur-sm"
                >
                  Copied!
                </motion.div>
              )}
            </button>
          </div>
        </motion.div>

        {/* Third row - wide card */}
        <motion.div
          className="bg-transparent backdrop-blur-sm rounded-2xl p-6 md:col-span-3 border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Marquee container with overflow hidden */}
          <div className="relative overflow-hidden w-full mb-4">
            {/* Auto-scrolling inner content */}
            <div className="flex animate-marquee-projects whitespace-nowrap">
              {/* First set of cards */}
              {[1, 2].map((set) => (
                <div
                  key={set}
                  className="flex gap-4 min-w-full project-marquee-animation"
                >
                  <div className="bg-zinc-800/80 rounded-md p-4 flex-shrink-0 w-48 flex flex-col">
                    <h4 className="font-medium text-zinc-300 mb-1">
                      API Gateway &
                    </h4>
                    <h4 className="font-medium text-zinc-300">Documentation</h4>
                    <div className="text-xs text-zinc-500 mt-2">Guides</div>
                    <div className="text-xs text-zinc-500">Resources</div>
                  </div>

                  <div className="bg-zinc-800/80 rounded-md p-4 flex-shrink-0 w-48 flex flex-col">
                    <h4 className="font-medium text-zinc-300 mb-1">User</h4>
                    <h4 className="font-medium text-zinc-300">Onboarding</h4>
                    <div className="text-xs text-zinc-500 mt-2">
                      Flow Design
                    </div>
                    <div className="text-xs text-zinc-500">Step-by-step</div>
                  </div>

                  <div className="bg-zinc-800/80 rounded-md p-4 flex-shrink-0 w-48 flex flex-col">
                    <h4 className="font-medium text-zinc-300 mb-1">Payment</h4>
                    <h4 className="font-medium text-zinc-300">System</h4>
                    <div className="text-xs text-zinc-500 mt-2">
                      Architecture
                    </div>
                    <div className="text-xs text-zinc-500">Security</div>
                  </div>

                  <div className="bg-zinc-800/80 rounded-md p-4 flex-shrink-0 w-48 flex flex-col">
                    <h4 className="font-medium text-zinc-300 mb-1">
                      Monitoring &
                    </h4>
                    <h4 className="font-medium text-zinc-300">Analytics</h4>
                    <div className="text-xs text-zinc-500 mt-2">
                      Infrastructure
                    </div>
                    <div className="text-xs text-zinc-500">Real-time data</div>
                  </div>

                  <div className="bg-zinc-800/80 rounded-md p-4 flex-shrink-0 w-48 flex flex-col">
                    <h4 className="font-medium text-zinc-300 mb-1">
                      Design System
                    </h4>
                    <h4 className="font-medium text-zinc-300">& UI</h4>
                    <div className="text-xs text-zinc-500 mt-2">
                      Consistency
                    </div>
                    <div className="text-xs text-zinc-500">Components</div>
                  </div>

                  <div className="bg-zinc-800/80 rounded-md p-4 flex-shrink-0 w-48 flex flex-col">
                    <h4 className="font-medium text-zinc-300 mb-1">
                      API Gateway
                    </h4>
                    <h4 className="font-medium text-zinc-300">Documentation</h4>
                    <div className="text-xs text-zinc-500 mt-2">Guides</div>
                    <div className="text-xs text-zinc-500">Resources</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-zinc-500 text-sm mt-4">The Inside Scoop</div>
          <h3 className="text-xl font-bold text-zinc-300">
            Currently building a Saas Application
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
