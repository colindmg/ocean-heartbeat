import { create } from "zustand";
import { heart } from "../content";

// Audio global
const audio = new Audio("/audios/oceanatmosphere.mp3");
audio.loop = true;
audio.volume = 0.0;

const clickAudio = new Audio("/audios/click.wav");
clickAudio.volume = 0.1;

const secondClickAudio = new Audio("/audios/secondaryClick.wav");
secondClickAudio.volume = 0.1;

// Fonction pour animer le volume
const animateVolume = (targetVolume, duration) => {
  const step = 50;
  const volumeIncrement = (targetVolume - audio.volume) / (duration / step);

  const interval = setInterval(() => {
    let newVolume = audio.volume + volumeIncrement;
    if (
      (volumeIncrement > 0 && newVolume >= targetVolume) ||
      (volumeIncrement < 0 && newVolume <= targetVolume)
    ) {
      newVolume = targetVolume;
      clearInterval(interval);
    }
    audio.volume = newVolume;
    clickAudio.volume = newVolume;
    secondClickAudio.volume = newVolume;
  }, step);
};

export default create((set) => ({
  isSoundMuted: false,
  isRetroModeEnabled: false,
  selectedObject: heart,
  areDetailsVisible: false,

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

  // SELECTED OBJECT HANDLING
  selectObject: (objectName) => {
    set(() => {
      return { selectedObject: objectName };
    });
  },

  unselectObject: () => {
    set(() => {
      return { selectedObject: null };
    });
  },

  // DETAILS HANDLING
  showDetails: () => {
    set(() => {
      clickAudio.play();
      return { areDetailsVisible: true };
    });
  },

  hideDetails: () => {
    set(() => {
      secondClickAudio.play();
      return { areDetailsVisible: false };
    });
  },
}));
