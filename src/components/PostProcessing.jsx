import { EffectComposer, WaterEffect } from "@react-three/postprocessing";

const PostProcessing = () => {
  return (
    <>
      <EffectComposer>
        <WaterEffect factor={0.75} />
      </EffectComposer>
    </>
  );
};

export default PostProcessing;
