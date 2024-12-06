import useExperience from "../../stores/useExperience";

import { brain, heart, kidneys } from "../../content";

import { motion } from "motion/react";

const ObjectSwitcher = () => {
  const selectedObject = useExperience((state) => state.selectedObject);
  const selectObject = useExperience((state) => state.selectObject);
  const hideDetails = useExperience((state) => state.hideDetails);

  return (
    <>
      {/* HEART */}
      {selectedObject === heart && (
        <motion.div
          key={selectedObject.name}
          className="absolute bottom-40 text-4xl font-gianiteh uppercase left-1/2  pointer-events-auto text-white"
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          exit={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          style={{ translateX: "-50%" }}
        >
          {selectedObject.name}

          {/* SWITCH TO BRAIN */}
          <motion.button
            key={selectObject.name + "button"}
            className="absolute -right-10 top-1/2 hover:opacity-50"
            style={{ translateY: "-50%", rotate: 180 }}
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            exit={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            onClick={() => {
              selectObject(brain);
              hideDetails();
            }}
          >
            <img
              className="size-6"
              src="./icons/arrow.svg"
              alt="Icone fleche"
            />
          </motion.button>
        </motion.div>
      )}

      {/* BRAIN */}
      {selectedObject === brain && (
        <motion.div
          key={selectedObject.name}
          className="absolute bottom-40 text-4xl font-gianiteh uppercase left-1/2  pointer-events-auto text-white"
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          exit={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          style={{ translateX: "-50%" }}
        >
          {selectedObject.name}

          {/* SWITCH TO KIDNEYS */}
          <motion.button
            key={selectObject.name + "button"}
            className="absolute -right-10 top-1/2 hover:opacity-50"
            style={{ translateY: "-50%", rotate: 180 }}
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            exit={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            onClick={() => {
              selectObject(kidneys);
              hideDetails();
            }}
          >
            <img
              className="size-6"
              src="./icons/arrow.svg"
              alt="Icone fleche"
            />
          </motion.button>
        </motion.div>
      )}

      {/* KIDNEYS */}
      {selectedObject === kidneys && (
        <motion.div
          key={selectedObject.name}
          className="absolute bottom-40 text-4xl font-gianiteh uppercase left-1/2  pointer-events-auto text-white"
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          exit={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          style={{ translateX: "-50%" }}
        >
          {selectedObject.name}

          {/* SWITCH TO HEART */}
          <motion.button
            key={selectObject.name + "button"}
            className="absolute -right-10 top-1/2 hover:opacity-50"
            style={{ translateY: "-50%", rotate: 180 }}
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            exit={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            onClick={() => {
              selectObject(heart);
              hideDetails();
            }}
          >
            <img
              className="size-6"
              src="./icons/arrow.svg"
              alt="Icone fleche"
            />
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default ObjectSwitcher;
