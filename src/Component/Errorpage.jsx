import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { useNavigate } from "react-router";
import GradientText from "../../Reactbits/GradientText/GradientText";

const Errorpage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen text-white mt-35 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border border-white/10"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full border border-white/15"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full border border-white/10"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="glassmorphism-card w-32 h-32 mx-auto flex items-center justify-center rounded-full">
            <FaExclamationTriangle className="text-5xl text-purple-400" />
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="font-bold text-8xl md:text-9xl"
          >
            404
          </GradientText>
        </motion.div>

        {/* Error Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Oops! Page Not Found
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl text-zinc-400">
            <HiOutlineEmojiSad className="text-2xl" />
            <span>Something went wrong</span>
          </div>
        </motion.div>

        {/* Error Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="glassmorphism-card max-w-lg mx-auto">
            <p className="text-zinc-300 text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Don't worry, let's get you back on track!
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleGoHome}
            className="contact-button group"
          >
            <FaHome className="text-zinc-300 text-lg group-hover:text-white transition-colors" />
            <span className="text-zinc-200 group-hover:text-white transition-colors">
              Go Home
            </span>
          </button>

          <button
            onClick={handleGoBack}
            className="contact-button group"
          >
            <FaArrowLeft className="text-zinc-300 text-lg group-hover:text-white transition-colors" />
            <span className="text-zinc-200 group-hover:text-white transition-colors">
              Go Back
            </span>
          </button>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <div className="glassmorphism-mini inline-block">
            <p className="text-zinc-400 text-sm">
              Need help? Contact me at{" "}
              <a
                href="mailto:mehedihasanshipat4@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                mehedihasanshipat4@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Errorpage;