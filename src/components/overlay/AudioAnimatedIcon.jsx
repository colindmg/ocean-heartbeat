import { motion } from "motion/react";
import PropTypes from "prop-types";

const AudioAnimatedIcon = ({ isPlaying = true }) => {
  const barVariants = {
    playing: (i) => ({
      height: ["10px", "20px", "10px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
        ease: "easeInOut",
        delay: i % 2 ? 0.2 : 0,
      },
    }),
    paused: {
      height: "5px",
    },
  };

  return (
    <div className="flex items-center h-5">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] mx-[1.5px] bg-white rounded-full"
          initial="paused"
          animate={isPlaying ? "playing" : "paused"}
          variants={barVariants}
          custom={i}
        />
      ))}
    </div>
  );
};

AudioAnimatedIcon.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default AudioAnimatedIcon;
