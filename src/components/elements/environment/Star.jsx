import {useGLTF} from '@react-three/drei'

export function Star(props) {
  const {nodes} = useGLTF('./models/environment/star.glb')
  return (
    <group scale={0.007} position-y={0.3} rotation-z={Math.PI / 2} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder3.geometry}
      >
        <meshStandardMaterial color={props.color || 'yellow'}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/environment/star.glb')