import {useGLTF, useAnimations} from '@react-three/drei'
import {useRef} from 'react'

export function Fish(props) {
  const group = useRef()
  const {nodes, materials, animations} = useGLTF('./models/fish.glb')
  const {actions} = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root}/>
          </group>
          <group name="ClownFish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="ClownFish_1"
              geometry={nodes.ClownFish_1.geometry}
              material={materials.Outline}
              skeleton={nodes.ClownFish_1.skeleton}
            />
            <skinnedMesh
              name="ClownFish_2"
              geometry={nodes.ClownFish_2.geometry}
              material={materials.Body}
              skeleton={nodes.ClownFish_2.skeleton}
            />
            <skinnedMesh
              name="ClownFish_3"
              geometry={nodes.ClownFish_3.geometry}
              material={materials.Stripes}
              skeleton={nodes.ClownFish_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/fish.glb')