import { Outlines, useGLTF } from '@react-three/drei'
import { useState } from 'react'

export function Heart(props) {
    const { nodes, materials } = useGLTF('./models/heart.glb')
    const [hovered, setHovered] = useState(false)
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Heart.geometry}
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

useGLTF.preload('./models/heart.glb')