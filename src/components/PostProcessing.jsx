import {
  EffectComposer,
  Pixelation,
  TiltShift2,
  ToneMapping,
  WaterEffect,
} from "@react-three/postprocessing";
import useExperience from "../stores/useExperience";

const PostProcessing = () => {
  const isRetroModeEnabled = useExperience((state) => state.isRetroModeEnabled);

  return (
    <>
      <EffectComposer multisampling={1}>
        <ToneMapping />

        {!isRetroModeEnabled && (
          <>
            <WaterEffect factor={0.75} />
            <TiltShift2 samples={3} blur={0.25} />
          </>
        )}
        {isRetroModeEnabled && <Pixelation granularity={15} />}
      </EffectComposer>
    </>
  );
};

export default PostProcessing;
