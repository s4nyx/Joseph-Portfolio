import { useLayoutEffect, useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { useLenis } from "lenis/react";

export default function Loading() {
  const { progress, loaded, total } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Tracks the initial loading phase
  const lenis = useLenis();

  // Handle the initial loading phase
  useEffect(() => {
    if (initialLoad) {
      lenis?.stop(); // Only stop lenis during the initial load
    }
  }, [lenis, initialLoad]);

  useLayoutEffect(() => {
    if (progress === 100) {
      setFadeOut(true);
      lenis?.start();
      setInitialLoad(false);
    }
  }, [progress, lenis, initialLoad]);
  return (
    <div className={`initial-loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-image-box">
        <img
          src="/images/loading.gif"
          className="loading-image"
          alt="Loading Image"
        />
      </div>
    </div>
  );
}
