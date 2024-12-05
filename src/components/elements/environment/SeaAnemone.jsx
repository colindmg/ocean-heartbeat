
import { useGLTF } from '@react-three/drei'

export function SeaAnemone(props) {
  const { nodes, materials } = useGLTF('./models/environment/sea-anemone.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Anemone.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('./models/environment/sea-anemone.glb')