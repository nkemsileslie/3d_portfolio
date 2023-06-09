import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
      <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.58 : 0.60}
      position={isMobile ? [0, -2.55, -1.8] : [0, -2.55, -1.35]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the 'isMobile'
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    //Add the callback functio as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //Remove the listener when the component is unmonted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas 
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        {/* Rendering the computer here */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;