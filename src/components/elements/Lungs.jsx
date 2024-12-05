import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lungs(props) {
  const { nodes, materials } = useGLTF('./models/lungs.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Kidney.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('./models/lungs.glb')
