import { useGLTF } from '@react-three/drei'

export function Kelp(props) {
    const { nodes, materials } = useGLTF('./models/environment/kelp.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.node_id61.geometry}
                material={materials['02___Default']}
            />
        </group>
    )
}

useGLTF.preload('./models/environment/kelp.glb')