import {useGLTF} from '@react-three/drei'

export function BigRocks(props) {
  const {nodes} = useGLTF('./models/environment/big_rocks.glb')
  return (
    <group position-y={0.7} scale={20} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.group1988159041.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group337471551.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group765248285.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group697255115.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group821822121.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group1383753236.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group1230782801.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.group295268605.geometry}>
        <meshStandardMaterial color={'#b7b7b7'}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/environment/basic stone 3.glb')