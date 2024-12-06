import { AnimatePresence } from "motion/react";
import useExperience from "../../stores/useExperience";
import ObjectDetails from "./ObjectDetails";
import ObjectSwitcher from "./ObjectSwitcher";
import RetroModeToggle from "./RetroModeToggle";
import SoundToggle from "./SoundToggle";

const Overlay = () => {
  const areDetailsVisible = useExperience((state) => state.areDetailsVisible);

  return (
    <div className="fixed z-40 top-0 left-0 size-full pointer-events-none ">
      {/* MUTE SOUND BUTTON */}
      <div className="absolute bottom-8 left-8 pointer-events-auto flex items-center gap-4">
        <SoundToggle />
        <RetroModeToggle />
      </div>

      {/* SELECTED OBJECT */}
      <AnimatePresence mode="sync">
        <ObjectSwitcher />
      </AnimatePresence>

      <AnimatePresence>
        {areDetailsVisible && <ObjectDetails key={"gngngngng"} />}
      </AnimatePresence>
    </div>
  );
};

export default Overlay;
