import {Outlines, useGLTF} from '@react-three/drei'
import {useState} from "react";

export function Brain(props) {
  const { nodes, materials } = useGLTF('./models/brain.glb')
  const [hovered, setHovered] = useState(false)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BRAIN.geometry}
        material={materials['Brain pink']}
        onPointerEnter={(event) => {
          document.body.style.cursor = 'pointer'
          setHovered(true)
          event.stopPropagation()
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'auto'
          setHovered(false)
        }}
      >
        {hovered && <Outlines screenspace thickness={1} color="white"/>}
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/brain.glb')