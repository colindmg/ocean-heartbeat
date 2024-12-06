import {useFrame, useThree} from "@react-three/fiber";
import {Perf} from "r3f-perf";
import {OceanEnvironment} from "./elements/environment/OceanEnvironment";
import PostProcessing from "./PostProcessing";
import Sand from "./elements/Sand";
import Caustics from "./Caustics";
import {Heart} from "./elements/Heart.jsx";
import {Brain} from "./elements/Brain.jsx";

const Experience = () => {

  const {camera} = useThree();
  camera.position.set(0, 4, 5);
  camera.lookAt(-2, 2, 1);

  return (
    <>
      <Perf position="top-left"/>

      <color attach="background" args={["#1a1a5e"]}/>

      <fog attach="fog" args={["#1a1a5e", -3, 20]}/>

      <Caustics
        distance={100}
        intensity={15}
        angle={1}
        penumbra={1}
        position={[2, 10, 0]}
      />

      <ambientLight intensity={1}/>
      <directionalLight castShadow position={[10, 10, 10]}/>

      <Sand/>
      <Heart rotation-y={(Math.PI * 0.5) * 3} position={[-2, 1, 1]} scale={0.05}/>
      {/*<Brain scale={0.015} position={[-2, 1, 1]}/>*/}
      <OceanEnvironment position-z={2}/>

      <PostProcessing/>
    </>
  );
};

export default Experience;
