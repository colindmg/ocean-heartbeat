import { useGLTF } from "@react-three/drei";

export function SeaAnemone(props) {
  const { nodes, materials } = useGLTF("./models/environment/sea_anemone.glb");
  return (
    <group scale={0.01} {...props} dispose={null}>
      <mesh geometry={nodes.Anemone.geometry} material={materials.Mat} />
    </group>
  );
}

useGLTF.preload("./models/environment/sea-anemone.glb");
