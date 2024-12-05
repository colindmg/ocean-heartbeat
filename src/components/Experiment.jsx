import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Sand from "./elements/Sand";

const Experiment = () => {
  const { camera } = useThree();
  camera.position.set(0, 1, 5);
  camera.lookAt(0, 0, 0);

  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} castShadow />

      <Sand />

      <OrbitControls makeDefault />

      {/* <PostProcessing /> */}
    </>
  );
};

export default Experiment;
