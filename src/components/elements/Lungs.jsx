import { useState } from 'react'
import { Outlines, useGLTF } from '@react-three/drei'

export function Lungs(props) {
  const { nodes, materials } = useGLTF('./models/lungs.glb')
  const [hovered, setHovered] = useState(false)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kidney.geometry}
        material={materials.Mat}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
          setHovered(true)
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'auto'
          setHovered(false)
        }}
      >
        {hovered && <Outlines thickness={10} color="white" />}
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/lungs.glb')
