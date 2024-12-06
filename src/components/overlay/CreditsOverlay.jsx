import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CreditsOverlay = () => {
  const [isCreditsOverlayVisible, setIsCreditsOverlayVisible] = useState(false);

  const handleCreditsOverlayToggle = () => {
    setIsCreditsOverlayVisible(!isCreditsOverlayVisible);
  };
  return (
    <>
      <button onClick={handleCreditsOverlayToggle} className="hover:opacity-50">
        <img className="size-7 " src="./icons/info.svg" alt="Icone info" />
      </button>

      <AnimatePresence>
        {isCreditsOverlayVisible && (
          <motion.div
            className="fixed flex flex-col text-white text-center p-8 gap-5 items-center justify-center z-50 top-0 left-0 size-full bg-black/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1
              key={"loaderTitle"}
              className="font-gianiteh text-3xl font-bold animate-pulse"
            >
              OCEAN HEARTBEAT
            </h1>
            <p className="italic">
              Fait avec bugs, fatigue et caféine par{" "}
              <a
                href="https://www.linkedin.com/in/thibaut-lefrancois/"
                target="_blank"
                className="underline hover:opacity-80"
              >
                Thibaut Lefrançois
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/colindmg/"
                target="_blank"
                className="underline hover:opacity-80"
              >
                Colin Demouge
              </a>{" "}
              :)
            </p>
            <button
              onClick={handleCreditsOverlayToggle}
              className="bg-white text-[#1a1a5e] px-4 py-1 font-semibold rounded-full hover:opacity-80"
            >
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreditsOverlay;
