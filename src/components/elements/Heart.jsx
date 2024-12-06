import { useGSAP } from "@gsap/react";
import { Outlines, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useState } from "react";
import { heart } from "../../content";
import useExperience from "../../stores/useExperience";

gsap.registerPlugin(useGSAP);

export function Heart(props) {
  const { nodes, materials } = useGLTF("./models/heart.glb");
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  const selectedObject = useExperience((state) => state.selectedObject);
  const showDetails = useExperience((state) => state.showDetails);
  const hideDetails = useExperience((state) => state.hideDetails);
  const areDetailsVisible = useExperience((state) => state.areDetailsVisible);

  useGSAP(() => {
    if (selectedObject === heart) {
      gsap.to(meshRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1,
        ease: "power4.out",
      });
    } else {
      gsap.to(meshRef.current.scale, {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [selectedObject]);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials.Mat}
        onClick={() => {
          if (areDetailsVisible) {
            hideDetails();
          } else {
            showDetails();
          }
        }}
        onPointerEnter={(event) => {
          document.body.style.cursor = "pointer";
          setHovered(true);
          event.stopPropagation();
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "auto";
          setHovered(false);
        }}
      >
        {hovered && <Outlines screenspace thickness={1} color="white" />}
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/heart.glb");
