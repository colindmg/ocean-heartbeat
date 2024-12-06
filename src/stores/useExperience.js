import { create } from "zustand";

// Audio global
const audio = new Audio("/audios/oceanatmosphere.mp3");
audio.loop = true;
audio.volume = 0.0;

// Fonction pour animer le volume
const animateVolume = (targetVolume, duration) => {
  const step = 50; // Intervalle en ms
  const volumeIncrement = (targetVolume - audio.volume) / (duration / step);

  const interval = setInterval(() => {
    let newVolume = audio.volume + volumeIncrement;
    if (
      (volumeIncrement > 0 && newVolume >= targetVolume) || // Animation ascendante terminée
      (volumeIncrement < 0 && newVolume <= targetVolume) // Animation descendante terminée
    ) {
      newVolume = targetVolume;
      clearInterval(interval);
    }
    audio.volume = newVolume;
  }, step);
};

export default create((set) => ({
  isSoundMuted: false,

  // PHASES OF THE EXPERIENCE
  phase: "loading",

  // FUNCTIONS TO CHANGE BETWEEN PHASES
  loaded: () => {
    set({ phase: "loaded" });
  },

  start: () => {
    set((state) => {
      if (state.phase === "loaded") {
        audio.play();
        animateVolume(0.2, 2000); // Augmente le volume à 0.2 en 2 secondes
        return { phase: "started" };
      }
      return {};
    });
  },

  muteSound: () => {
    set(() => {
      animateVolume(0.0, 2000); // Diminue le volume à 0 en 2 secondes
      return { isSoundMuted: true };
    });
  },

  unmuteSound: () => {
    set(() => {
      animateVolume(0.2, 2000); // Augmente le volume à 0.2 en 2 secondes
      return { isSoundMuted: false };
    });
  },
}));
