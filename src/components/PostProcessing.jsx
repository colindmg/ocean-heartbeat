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
        <TiltShift2 samples={3} blur={0.25} />
        <ToneMapping />
      </EffectComposer>
    </>
  );
};

export default PostProcessing;
