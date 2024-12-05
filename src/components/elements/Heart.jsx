import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export function Heart(props) {
    const { nodes, materials } = useGLTF('./models/heart.glb')
    console.log(materials)
    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Heart.geometry} material={materials.Mat} />
        </group>
    )
}

useGLTF.preload('./models/heart.glb')