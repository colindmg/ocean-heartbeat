import { OrbitControls, Sparkles } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Caustics from "./Caustics";
import { Heart } from "./elements/Heart";
import Sand from "./elements/Sand";

const Experience = () => {
  const { camera } = useThree();

  camera.position.y = 3;
  camera.position.z = 8;
  camera.lookAt(0, 0, 5);

  return (
    <>
      {/* PERFS */}
      {/* <Perf position="top-left" /> */}

      {/* CONTROLS */}
      <OrbitControls makeDefault />

      {/* POSTPROCESSING */}
      {/* <PostProcessing /> */}

      {/* ENVIRONMENT */}
      <color attach="background" args={["#1a1a5e"]} />
      <fog attach="fog" args={["#1a1a5e", -3, 20]} />

      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight castShadow position={[10, 10, 10]} />
      <Caustics
        distance={100}
        intensity={15}
        angle={1}
        penumbra={1}
        position={[2, 10, 0]}
      />

      {/* SCENE */}
      <Sand />
      <Sparkles scale={30} size={2} count={200} />
      <Heart scale={0.05} position-y={1} position-z={2} />
    </>
  );
};

export default Experience;
