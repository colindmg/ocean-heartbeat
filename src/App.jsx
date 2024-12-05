import { Canvas } from "@react-three/fiber";
import Experiment from "./components/Experience";

function App() {
  return (
    <>
      <Canvas
        shadows
        
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Experiment />
      </Canvas>
    </>
  );
}

export default App;
