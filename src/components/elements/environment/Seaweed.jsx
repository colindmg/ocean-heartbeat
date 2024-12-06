import { useGLTF } from "@react-three/drei";

export function Seaweed(props) {
  const { nodes, materials } = useGLTF("./models/environment/seaweed.glb");
  return (
    <group scale={2} position-y={0.7} {...props} dispose={null}>
      <mesh geometry={nodes["Node-Mesh"].geometry} material={materials.mat9} />
      <mesh
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.mat11}
      />
      <mesh
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.mat10}
      />
    </group>
  );
}

useGLTF.preload("./models/environment/seaweed.glb");
