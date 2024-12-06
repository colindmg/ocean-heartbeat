import useExperience from "../../stores/useExperience";

const RetroModeToggle = () => {
  const enableRetroMode = useExperience((state) => state.enableRetroMode);
  const disableRetroMode = useExperience((state) => state.disableRetroMode);
  const isRetroModeEnabled = useExperience((state) => state.isRetroModeEnabled);

  const handleRetroModeToggle = () => {
    if (isRetroModeEnabled) {
      disableRetroMode();
    } else {
      enableRetroMode();
    }
  };

  return (
    <button onClick={handleRetroModeToggle} className="hover:opacity-50">
      <img className="size-7 " src="./icons/arcade.svg" alt="Icone arcade" />
    </button>
  );
};

export default RetroModeToggle;
