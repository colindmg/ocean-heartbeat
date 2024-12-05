import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
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
            return { phase: "started" };
          }
          return {};
        });
      },
    };
  })
);
