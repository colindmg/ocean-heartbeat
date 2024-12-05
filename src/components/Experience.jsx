import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Sand from "./elements/Sand";
import PostProcessing from "./PostProcessing";
import { Heart } from "./elements/Heart";
import { Perf } from "r3f-perf";
import Caustics from "./Caustics";

const Experience = () => {
  const { camera } = useThree();

  camera.position.y = 3;
  camera.position.z = 8;
  camera.lookAt(0, 0, 5);

  return (
    <>
      <Perf position="top-left" />

      <color attach="background" args={["#1a1a5e"]} />

      <fog attach="fog" args={["#1a1a5e", -3, 20]} />

      <Caustics
        distance={100}
        intensity={15}
        angle={1}
        penumbra={1}
        position={[2, 10, 0]}
      />

      <ambientLight intensity={1} />
      <directionalLight castShadow position={[10, 10, 10]} />

      <Sand />
      <Heart scale={0.1} />

      <OrbitControls makeDefault />

      <PostProcessing />
    </>
  );
};

export default Experience;
