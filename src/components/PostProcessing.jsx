import {
  EffectComposer,
  TiltShift2,
  ToneMapping,
  WaterEffect,
} from "@react-three/postprocessing";

const PostProcessing = () => {
  return (
    <>
      <EffectComposer multisampling={1}>
        <WaterEffect factor={0.75} />
        <TiltShift2 samples={6} blur={0.5} />
        <ToneMapping />
      </EffectComposer>
    </>
  );
};

export default PostProcessing;
