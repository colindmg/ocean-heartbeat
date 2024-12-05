import { useGLTF } from '@react-three/drei'

export function Rocks(props) {
    const { nodes, materials } = useGLTF('./models/environment/rocks.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rock_3.geometry}
                material={materials.Stone_Dark}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
        </group>
    )
}

useGLTF.preload('./models/environment/rocks.glb')