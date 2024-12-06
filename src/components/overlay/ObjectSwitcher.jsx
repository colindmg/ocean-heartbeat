import useExperience from "../../stores/useExperience";

import { brain, heart } from "../../content";

import { motion } from "motion/react";

const ObjectSwitcher = () => {
  const selectedObject = useExperience((state) => state.selectedObject);
  const selectObject = useExperience((state) => state.selectObject);

  return (
    <>
      {/* HEART */}
      {selectedObject === heart && (
        <motion.div
          className="absolute bottom-40 text-4xl font-gianiteh uppercase left-1/2  pointer-events-auto text-white"
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          exit={{ opacity: 0, x: -40 }}
          style={{ translateX: "-50%" }}
        >
          {selectedObject.name}

          {/* SWITCH TO BRAIN */}
          <button
            className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-180 hover:opacity-50"
            onClick={() => selectObject(brain)}
          >
            <img
              className="size-6"
              src="./icons/arrow.svg"
              alt="Icone fleche"
            />
          </button>
        </motion.div>
      )}

      {/* BRAIN */}
      {selectedObject === brain && (
        <motion.div
          className="absolute bottom-40 text-4xl font-gianiteh uppercase left-1/2  pointer-events-auto text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          exit={{ opacity: 0, x: -40 }}
          style={{ translateX: "-50%" }}
        >
          {selectedObject.name}

          {/* SWITCH TO HEARTH */}
          <button
            className="absolute -left-10 top-1/2 -translate-y-1/2 hover:opacity-50"
            onClick={() => selectObject(heart)}
          >
            <img
              className="size-6"
              src="./icons/arrow.svg"
              alt="Icone fleche"
            />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ObjectSwitcher;
