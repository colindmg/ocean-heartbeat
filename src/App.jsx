import { Canvas } from "@react-three/fiber";
import Experiment from "./components/Experiment";

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
        <Experiment />
      </Canvas>
    </>
  );
}

export default App;
