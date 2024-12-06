import RetroModeToggle from "./RetroModeToggle";
import SoundToggle from "./SoundToggle";

const Overlay = () => {
  return (
    <div className="fixed z-40 top-0 left-0 size-full pointer-events-none">
      {/* MUTE SOUND BUTTON */}
      <div className="absolute bottom-8 left-8 pointer-events-auto flex items-center gap-4">
        <SoundToggle />
        <RetroModeToggle />
      </div>
    </div>
  );
};

export default Overlay;