import SoundToggle from "./SoundToggle";

const Overlay = () => {
  return (
    <div className="fixed z-40 top-0 left-0 size-full pointer-events-none">
      {/* MUTE SOUND BUTTON */}
      <SoundToggle />
    </div>
  );
};

export default Overlay;
