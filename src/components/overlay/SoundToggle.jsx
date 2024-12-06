import useExperience from "../../stores/useExperience";
import AudioAnimatedIcon from "./AudioAnimatedIcon";

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
    <button className="text-white hover:opacity-50" onClick={handleSoundToggle}>
      {/* SOUND {isSoundMuted ? "OFF" : "ON"} */}
      {/* SOUND ICON */}
      <AudioAnimatedIcon isPlaying={!isSoundMuted} />
    </button>
  );
};

export default SoundToggle;
