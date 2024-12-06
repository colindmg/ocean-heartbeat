import { useGLTF } from "@react-three/drei";

export function Coral(props) {
  const { nodes, materials } = useGLTF("./models/environment/coral.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.node_id73.geometry}
        material={materials.Material_96}
      />
    </group>
  );
}

useGLTF.preload("./models/environment/coral.glb");
