import * as THREE from "three";
// import { CustomShaderMaterial } from "three-custom-shader-material/vanilla";

// const sandMaterial = new CustomShaderMaterial({});

const Sand = () => {
  return (
    <mesh receiveShadow rotation-x={Math.PI / 2} position-y={-3} scale={100}>
      <planeGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="yellow" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Sand;
