import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Sand from "./elements/Sand";

const Experiment = () => {
  const { camera } = useThree();

  camera.position.y = 3;
  camera.lookAt(0, 0, 0);

  return (
    <>
      <color attach="background" args={["#161641"]} />

      <ambientLight intensity={1} />
      <directionalLight castShadow position={[10, 4, 10]} />

      <Sand />

      <OrbitControls />

      {/* <PostProcessing /> */}
    </>
  );
};

export default Experiment;
