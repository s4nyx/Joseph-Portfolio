/* eslint-disable react/jsx-key */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lazy load Item3
const LazyItem3 = dynamic(() => import("./Coins").then((mod) => mod.Item3), {
  ssr: false,
});

export default function Animation() {
  return (
    <Canvas
      style={{
        pointerEvents: "auto",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
      camera={{ position: [2, 0, 10], fov: 35 }}
      dpr={window.devicePixelRatio > 1.5 ? 1.5 : 1} // Adjust device pixel ratio
      gl={{ powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
          <LazyItem3 />
        </Float>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enableRotate={true}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
}
