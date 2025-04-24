import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

// Performance optimization: Add a lower-quality model for mobile devices
const Earth = ({ isMobile }) => {
  const earth = useGLTF("/planet/scene.gltf", true);
  const modelRef = useRef();
  
  // Implement automatic rotation without relying on OrbitControls
  useFrame(({ clock }) => {
    if (modelRef.current) {
      // Rotate the earth model directly
      modelRef.current.rotation.y = clock.getElapsedTime() * 0.1; // Adjust speed as needed
    }
  });
  
  // Use a smaller scale on mobile for better performance
  const scale = isMobile ? 1.8 : 2.5;
  
  return (
    <primitive 
      ref={modelRef}
      object={earth.scene} 
      scale={scale} 
      position-y={0} 
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef();
  
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

  // Force the controls to update and ensure auto-rotation is enabled
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 0.5; 
    }
  }, []);

  return (
    <Canvas
      shadows={false}
      frameloop='always' 
      dpr={[1, 1.2]} 
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: false,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 1, 2],
      }}
      style={{ 
        visibility: 'visible',
        height: '100%',
        width: '100%',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={0.5} 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        
        {/* Add ambient light to ensure model is visible */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Suspense>
      
      <Preload all={false} />
    </Canvas>
  );
};

export default EarthCanvas;