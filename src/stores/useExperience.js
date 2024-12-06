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
  isRetroModeEnabled: false,

  // AUDIO HANDLING
  start: () => {
    audio.play();
    animateVolume(0.2, 2000);
  },

  muteSound: () => {
    set(() => {
      animateVolume(0.0, 2000);
      return { isSoundMuted: true };
    });
  },

  unmuteSound: () => {
    set(() => {
      animateVolume(0.2, 2000);
      return { isSoundMuted: false };
    });
  },

  // RETRO MODE HANDLING
  enableRetroMode: () => {
    set(() => {
      return { isRetroModeEnabled: true };
    });
  },

  disableRetroMode: () => {
    set(() => {
      return { isRetroModeEnabled: false };
    });
  },
}));
