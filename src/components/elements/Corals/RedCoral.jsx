import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RedCoral(props) {
    const { nodes, materials } = useGLTF('./models/coral_red.glb')
    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.coral.geometry} material={materials.None} />
        </group>
    )
}

useGLTF.preload('./models/coral_red.glb')