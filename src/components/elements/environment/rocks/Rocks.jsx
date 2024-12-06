import {useGLTF} from '@react-three/drei'

export function Rocks(props) {
  const {nodes} = useGLTF('./models/environment/rocks.glb')
  return (
    <group scale={15} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock_3.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/environment/rocks.glb')