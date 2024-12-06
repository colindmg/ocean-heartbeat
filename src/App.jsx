import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import LoaderHome from "./components/LoaderHome";
import Overlay from "./components/overlay/Overlay";

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
        <Experience />
      </Canvas>

      {/* LOADER HOME */}
      <LoaderHome />

      {/* OVERLAY */}
      <Overlay />
    </>
  );
}

export default App;
