import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function AnglerFish(props) {
  const fish = useRef();
  const limits = { x: 45, y: 6.5, z: 8 };

  useFrame((state, delta) => {
    const { x } = fish.current.position;
    const halfX = limits.x / 2;

    // Check boundaries and reposition fish if it reaches the edge
    if (x < -halfX || x > halfX) {
      fish.current.position.x = x < -halfX ? halfX : -halfX;
    }

    // Apply constant movement on the x-axis
    fish.current.position.x -= 0.03;

    // Apply cosine-based rotation on the y-axis
    fish.current.rotation.y += Math.cos(state.clock.getElapsedTime()) * delta;

    // Apply sine-based movement on the z-axis
    fish.current.position.z -= Math.cos(state.clock.getElapsedTime()) * delta;
  });

  const { nodes, materials } = useGLTF("./models/angler_fish.glb");
  return (
    <group rotation-y={2.6} ref={fish} {...props} dispose={null}>
      <mesh geometry={nodes["Node-Mesh"].geometry} material={materials.mat2} />
      <mesh
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.mat1}
      />
      <mesh
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.mat23}
      />
      <mesh
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.mat21}
      />
      <mesh
        geometry={nodes["Node-Mesh_4"].geometry}
        material={materials.mat12}
      ></mesh>
    </group>
  );
}

useGLTF.preload("./models/angler_fish.glb");
