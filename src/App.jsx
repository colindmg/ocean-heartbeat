import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, WaterEffect } from "@react-three/postprocessing";

function App() {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <OrbitControls />

        <EffectComposer>
          <WaterEffect factor={0.75} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
