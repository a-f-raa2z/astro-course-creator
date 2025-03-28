
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";
import type { Mesh } from "three";

interface PlanetProps {
  progress: number; // 0 to 100
}

function PlanetMesh({ progress }: { progress: number }) {
  const meshRef = useRef<Mesh>(null);
  
  // Rotate the planet
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  // Calculate how much of the planet should be "filled"
  const fillProgress = MathUtils.clamp(progress / 100, 0, 1);
  
  return (
    <>
      {/* Base planet */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial 
          color="#0A1128" 
          roughness={0.8} 
          metalness={0.2}
        />
      </Sphere>
      
      {/* Progress overlay */}
      <Sphere args={[2.01, 64, 64]} scale={[1, fillProgress, 1]} position={[0, -2 + fillProgress * 2, 0]}>
        <meshStandardMaterial 
          color="#5A3687" 
          roughness={0.6} 
          metalness={0.3}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.1, 32, 32]}>
        <meshStandardMaterial 
          color="#9B87F5" 
          transparent
          opacity={0.15}
        />
      </Sphere>
    </>
  );
}

const Planet = ({ progress }: PlanetProps) => {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
        />
        <PlanetMesh progress={progress} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
          {Math.round(progress)}% Complete
        </div>
        <p className="text-purple-300 mt-2">Journey to cosmic knowledge</p>
      </div>
    </div>
  );
};

export default Planet;
