import { useGLTF } from "@react-three/drei";

export function RocksAlgae(props) {
  const { nodes, materials } = useGLTF("./models/environment/rocks_algae.glb");
  return (
    <group scale={3} position-y={0.8} {...props} dispose={null}>
      <mesh
        geometry={nodes["Rock-pack-ver4"].geometry}
        material={materials["Texture-base.014"]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("./models/environment/rocks_algae.glb");
