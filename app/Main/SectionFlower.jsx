import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SectionFlower = () => {
  useEffect(() => {
    const frameCount = 300; // Total number of frames
    const loadedImages = {}; // Cache for loaded images
    const buffer = 5; // Number of frames to preload before and after the current frame
    const canvas = document.querySelector("#image-sequence");
    const ctx = canvas?.getContext("2d");
    const playhead = { frame: 0 };

    if (!canvas || !ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    // Lazy-load a specific frame
    const loadImage = (frameIndex) => {
      if (loadedImages[frameIndex]) return loadedImages[frameIndex]; // If already loaded, return
      const img = new Image();
      img.src = `/imageSequence/image${frameIndex + 1}.webp`; // Adjust path as needed
      loadedImages[frameIndex] = img;
      return img;
    };

    // Unload frames outside the buffer to free memory
    const unloadFramesOutsideBuffer = (currentFrame) => {
      Object.keys(loadedImages).forEach((key) => {
        const frame = parseInt(key, 10);
        if (frame < currentFrame - buffer || frame > currentFrame + buffer) {
          delete loadedImages[frame]; // Remove image from cache
        }
      });
    };

    // Draw the current frame on the canvas
    const updateCanvas = () => {
      const frame = Math.round(playhead.frame);
      const img = loadedImages[frame];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // GSAP animation for the playhead
    gsap.to(playhead, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".flower",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: () => {
          const currentFrame = Math.round(playhead.frame);

          // Lazy-load current frame and buffer range
          for (
            let i = Math.max(0, currentFrame - buffer);
            i <= Math.min(frameCount - 1, currentFrame + buffer);
            i++
          ) {
            loadImage(i);
          }

          // Unload images outside the buffer
          unloadFramesOutsideBuffer(currentFrame);

          // Update canvas with the current frame
          updateCanvas();
        },
      },
    });

    // Preload the first few frames
    for (let i = 0; i < Math.min(frameCount, buffer); i++) {
      loadImage(i);
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="flower">
      <div className="flower-content">
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="flower-content-sequence">
          <canvas
            className="image-sequence-canvas"
            id="image-sequence"
            width="1920"
            height="1080"
          />
        </div>
      </div>
    </section>
  );
};
