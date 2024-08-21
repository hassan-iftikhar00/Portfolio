import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.65}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // adding event listener for changing in screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // set initial value of isMobile (what the screen size is atm)
    setIsMobile(mediaQuery.matches);

    // function to handle changes to screen size
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // added a funtion as a listner to the changes to media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // removed the listner using return
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={Math.PI} groundColor="black" />
        <pointLight intensity={Math.PI} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
        />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
