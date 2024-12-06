import {useGLTF} from '@react-three/drei'

export function Shell(props) {
  const {nodes, materials} = useGLTF('./models/environment/shell.glb')
  return (
    <group position-y={0.4} scale={0.02} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Geo_SandDollar.geometry}
        material={materials['Mesh_SandDollar:lambert2SG']}
      />
    </group>
  )
}

useGLTF.preload('./models/environment/shell.glb')