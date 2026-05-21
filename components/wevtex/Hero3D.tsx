"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Icosahedron, Float, Environment, Sparkles, Stars, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Component to rotate elements continuously
function RotatingGroup({ children, speed = 1, axis = [0, 1, 0] }: { children: React.ReactNode, speed?: number, axis?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += axis[0] * delta * speed;
      groupRef.current.rotation.y += axis[1] * delta * speed;
      groupRef.current.rotation.z += axis[2] * delta * speed;
    }
  });
  return <group ref={groupRef}>{children}</group>;
}

export function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={5} color="#f0631f" />
        <directionalLight position={[-10, -10, -5]} intensity={4} color="#d94a1a" />
        <pointLight position={[0, 0, 5]} intensity={4} color="#ffd9b8" distance={10} />
        
        {/* Background Digital Space */}
        <Stars radius={10} depth={50} count={1500} factor={4} saturation={1} fade speed={1} />

        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
          
          {/* Inner Glowing Core - Pure Energy */}
          <Sphere args={[1.2, 32, 32]}>
            <meshBasicMaterial color="#ff5500" transparent opacity={0.7} blending={THREE.AdditiveBlending} />
          </Sphere>

          {/* Main Liquid Metallic Body - Ultra Glossy Obsidian */}
          <Sphere args={[1.9, 128, 128]}>
            <MeshDistortMaterial 
              color="#0d0401" 
              attach="material" 
              distort={0.45} 
              speed={2.0} 
              roughness={0.1}
              metalness={1}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </Sphere>
          


          {/* High-Tech Rings - Gyroscopic System */}
          <RotatingGroup speed={0.6} axis={[1, 0.5, 0]}>
            <Torus args={[2.8, 0.008, 16, 100]}>
              <meshBasicMaterial color="#ff6a00" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
            </Torus>
            {/* Tiny satellite */}
            <mesh position={[2.8, 0, 0]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#ffffff" blending={THREE.AdditiveBlending} />
            </mesh>
          </RotatingGroup>

          <RotatingGroup speed={0.4} axis={[-0.5, 1, 0]}>
            <Torus args={[3.2, 0.005, 16, 100]}>
              <meshBasicMaterial color="#ffffff" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
            </Torus>
            {/* Tiny satellite */}
            <mesh position={[-3.2, 0, 0]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#ff6a00" blending={THREE.AdditiveBlending} />
            </mesh>
          </RotatingGroup>

          <RotatingGroup speed={0.3} axis={[0, 0.5, 1]}>
            <Torus args={[3.6, 0.003, 16, 100]}>
              <meshBasicMaterial color="#ff3300" transparent opacity={0.5} blending={THREE.AdditiveBlending} />
            </Torus>
            {/* Tiny satellite */}
            <mesh position={[0, 3.6, 0]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#ffffff" blending={THREE.AdditiveBlending} />
            </mesh>
          </RotatingGroup>
        </Float>

        {/* Magical floating particles */}
        <Sparkles count={500} scale={10} size={3} speed={0.8} opacity={0.8} color="#ff6a00" />
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
