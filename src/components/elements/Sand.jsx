import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Sand = () => {
  const normalMapTexture = useTexture(
    "/textures/sandNormalMap.png",
    (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(5, 5);
    }
  );

  return (
    <mesh castShadow receiveShadow rotation-x={-Math.PI / 2} scale={100}>
      <planeGeometry computeTangents={() => { }} args={[1, 1, 32, 32]} />
      <meshLambertMaterial
        color={0xf0e68c}
        displacementMap={normalMapTexture}
        displacementScale={0.01}
        // displacementBias={0}
        normalMap={normalMapTexture}
      />
    </mesh>
  );
};

export default Sand;
