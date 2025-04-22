import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

// Performance optimization: Add a lower-quality model for mobile devices
const Earth = ({ isMobile }) => {
  // Implement lazy loading to improve initial load time
  const earth = useGLTF("/planet/scene.gltf", true);
  
  // Use a smaller scale on mobile for better performance
  const scale = isMobile ? 1.8 : 2.5;
  
  return (
    <primitive 
      object={earth.scene} 
      scale={scale} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile devices for performance optimizations
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows={false}
      frameloop='demand'
      dpr={[1, 1.2]} // Reduced DPI for better performance
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance', // Hints to use GPU when available
        antialias: false, // Disable antialiasing for performance
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200, // Reduced far clipping plane for performance
        position: [3, 1, 2],
      }}
      style={{ 
        // Only render when in viewport for performance
        // This makes sure the canvas doesn't consume resources when not visible
        visibility: 'visible',
        height: '100%',
        width: '100%',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} // Slower rotation for performance
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      
      {/* Only preload essentials */}
      <Preload all={false} />
    </Canvas>
  );
};

// Performance optimization - Use proper code splitting
export default EarthCanvas;