import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PinkCoral(props) {
    const { nodes, materials } = useGLTF('./models/coral_pink.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1533979519.geometry}
                material={materials.mat7}
            />
        </group>
    )
}

useGLTF.preload('./models/coral_pink.glb')