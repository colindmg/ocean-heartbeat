import { Canvas } from "@react-three/fiber";
import Experiment from "./components/Experience";
import LoaderHome from "./components/LoaderHome";

function App() {
  return (
    <>
      {/* R3F */}
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

      {/* LOADER HOME */}
      <LoaderHome />
    </>
  );
}

export default App;
