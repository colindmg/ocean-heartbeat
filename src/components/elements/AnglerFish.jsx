
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AnglerFish(props) {
  const { nodes, materials } = useGLTF('./models/angler_fish.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_2'].geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_3'].geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_4'].geometry}
        material={materials.mat12}
      />
    </group>
  )
}

useGLTF.preload('./models/angler_fish.glb')
