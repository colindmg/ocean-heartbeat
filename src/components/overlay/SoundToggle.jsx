import useExperience from "../../stores/useExperience";

const SoundToggle = () => {
  const muteSound = useExperience((state) => state.muteSound);
  const unmuteSound = useExperience((state) => state.unmuteSound);
  const isSoundMuted = useExperience((state) => state.isSoundMuted);

  const handleSoundToggle = () => {
    if (isSoundMuted) {
      unmuteSound();
    } else {
      muteSound();
    }
  };

  return (
    <button
      className="text-white absolute bottom-8 left-8 pointer-events-auto"
      onClick={handleSoundToggle}
    >
      SOUND {isSoundMuted ? "OFF" : "ON"}
    </button>
  );
};

export default SoundToggle;
