import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import Book3D from "./Book3D";

export default function NotFoundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 30 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Environment preset="studio" environmentIntensity={0.5} />
      <Float rotationIntensity={2} floatIntensity={2}>
        <Book3D />
      </Float>
      <OrbitControls />
    </Canvas>
  );
}
