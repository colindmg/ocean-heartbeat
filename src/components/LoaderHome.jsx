import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import useExperience from "../stores/useExperience";

const LoaderHome = () => {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);
  const start = useExperience((state) => state.start);

  const handleExperienceStart = () => {
    setShow(false);
    setTimeout(() => {
      start();
    }, 100);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeIn" } }}
          className="fixed z-50 top-0 left-0 p-14 text-white text-center size-full bg-[#1a1a5e] flex flex-col items-center justify-center gap-5"
        >
          <motion.h1 className="font-gianiteh text-4xl font-bold ">
            OCEAN HEARTBEAT
          </motion.h1>

          {/* START BUTTON */}
          <motion.button
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: progress === 100 ? 1 : 0,
              filter: progress === 100 ? "blur(0px)" : "blur(10px)",
              transition: { delay: 0.3, duration: 1, ease: "easeOut" },
            }}
            whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
            disabled={progress < 100}
            style={{ cursor: progress < 100 ? "default" : "pointer" }}
            className="px-4 py-2 border-2 border-white rounded-sm uppercase font-semibold mt-10 hover:scale-105"
            onClick={handleExperienceStart}
          >
            Démarrer l&apos;expérience
          </motion.button>

          {/* LOADING BAR */}
          <motion.div
            className="absolute bottom-0 w-full h-[3px] "
            animate={{
              opacity: progress === 100 ? 0 : 1,
              filter: progress === 100 ? "blur(10px)" : "blur(0px)",
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <motion.div
              className="h-full w-0 bg-white"
              animate={{ width: `${progress}%` }}
            ></motion.div>
            <p className="absolute text-xl text-white left-4 -top-10 ">
              {Math.ceil(progress)}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderHome;
