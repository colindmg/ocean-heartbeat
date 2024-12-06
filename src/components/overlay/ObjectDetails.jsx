import useExperience from "../../stores/useExperience";

import { motion } from "motion/react";

const ObjectDetails = () => {
  const selectedObject = useExperience((state) => state.selectedObject);

  return (
    <>
      <motion.div
        key={selectedObject.title1}
        className="flex flex-col gap-2 absolute bg-white/30 backdrop-blur-md p-5 rounded-md top-[15%] left-[15%] w-[350px] max-w-90vw text-white max-md:left-[10%] max-md:w-[80%] max-md:top-[10%]"
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
      >
        <h3 className="font-bold">{selectedObject.title1}</h3>
        <p className="text-sm">{selectedObject.firstDescription}</p>
      </motion.div>

      <motion.div
        key={selectedObject.title2}
        className="flex flex-col gap-2 absolute bg-white/30 backdrop-blur-md p-5 rounded-md top-[55%] right-[10%] w-[350px] max-w-90vw text-white max-md:hidden"
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
        }}
        exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
      >
        <h3 className="font-bold">{selectedObject.title2}</h3>
        <p className="text-sm">{selectedObject.secondDescription}</p>
      </motion.div>
    </>
  );
};

export default ObjectDetails;
