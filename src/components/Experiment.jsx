import { OrbitControls, useVideoTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Sand from "./elements/Sand";
import PostProcessing from "./PostProcessing";

function Cookie(props) {
  const texture = useVideoTexture("/videos/caustics.mp4");
  return <spotLight decay={0} map={texture} castShadow {...props} />;
}

const Experiment = () => {
  const { camera } = useThree();

  camera.position.y = 3;
  camera.lookAt(0, 0, 5);

  return (
    <>
      <color attach="background" args={["#1a1a5e"]} />

      <fog attach="fog" args={["#1a1a5e", -3, 20]} />

      <Cookie
        distance={100}
        intensity={15}
        angle={1}
        penumbra={1}
        position={[2, 5, 0]}
      />

      <ambientLight intensity={1} />
      <directionalLight castShadow position={[10, 10, 10]} />

      <Sand />

      <OrbitControls makeDefault />

      <PostProcessing />
    </>
  );
};

export default Experiment;
