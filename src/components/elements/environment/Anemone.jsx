import { useGLTF } from "@react-three/drei";

export function Anemone(props) {
  const { nodes, materials } = useGLTF("./models/environment/anemone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube004_Cube011.geometry}
        material={materials["Material.011"]}
      />
    </group>
  );
}

useGLTF.preload("./models/environment/anemone.glb");
