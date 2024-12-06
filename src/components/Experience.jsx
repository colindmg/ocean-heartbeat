import { Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import useMouse from "../hooks/useMouse";
import { lerp } from "../utils";
import Caustics from "./Caustics";
import { Brain } from "./elements/Brain.jsx";
import { OceanEnvironment } from "./elements/environment/OceanEnvironment";
import { Heart } from "./elements/Heart.jsx";
import Sand from "./elements/Sand";
import PostProcessing from "./PostProcessing";

const Experience = () => {
  const { camera } = useThree();
  camera.position.set(0, 4, 5);
  const mouse = useMouse();

  useFrame(() => {
    camera.lookAt(0, 2, 1);
    camera.position.x = lerp(camera.position.x, mouse.x.get(), 0.025);
    camera.position.y = lerp(camera.position.y, mouse.y.get() + 4, 0.025);
  });

  return (
    <>
      {/* PERFS */}
      <Perf position="top-left" style={{ display: "none" }} />

      {/* POSTPROCESSING */}
      <PostProcessing />

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
      <Heart rotation-y={Math.PI * 0.5 * 3} position={[0, 1, 1]} scale={0.05} />
      <Brain scale={0.014} position={[0, 1, 1]} />
      <OceanEnvironment position-z={2} />
      <Sparkles scale={30} size={2} count={200} />
    </>
  );
};

export default Experience;
