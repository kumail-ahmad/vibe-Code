import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Custom Shader Material for Embroidered Silk Fabric Wave
const SilkPlane: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttribute = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);

      // Organic fabric wave noise simulation
      const z =
        Math.sin(x * 1.5 + time * 0.8) * 0.15 +
        Math.cos(y * 1.5 + time * 0.6) * 0.15 +
        Math.sin((x + y) * 2.0 + mousePos.x * 2) * 0.08;

      positionAttribute.setZ(i, z);
    }
    positionAttribute.needsUpdate = true;

    // Subtle gentle tilt towards mouse
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mousePos.x * 0.15, 0.05);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mousePos.y * 0.15, 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[-0.2, 0, 0]}>
      <planeGeometry args={[6, 4.5, 64, 64]} />
      <meshStandardMaterial
        color="#E9AEB8"
        roughness={0.45}
        metalness={0.2}
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export const TextileDisplacementScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  return (
    <section id="textile" className="relative min-h-screen w-full py-24 px-6 bg-[#2B2928] text-[#FFF9F7] overflow-hidden flex flex-col justify-center">
      {/* Editorial Title Overlay */}
      <div className="max-w-7xl mx-auto w-full z-20 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C5A059] block mb-3 font-semibold">
            SCENE III · MATERIAL & TEXTURE
          </span>
          <h2 className="text-4xl md:text-7xl font-serif-editorial font-light text-[#FFF9F7]">
            The Floating Textile
          </h2>
        </div>
        <p className="max-w-md text-sm font-sans-editorial text-[#FFF9F7]/70 font-light leading-relaxed">
          Move your cursor across the silk matrix to examine how hand-spun threads react to light, motion, and tension before tailored cutting.
        </p>
      </div>

      {/* Main Interactive Canvas / Transition Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        {/* Left Three.js WebGL Fabric Viewport */}
        <div className="lg:col-span-7 relative h-[450px] w-full rounded-3xl overflow-hidden border border-[#E9AEB8]/20 bg-[#232120] shadow-2xl">
          {hasWebGL ? (
            <Canvas
              camera={{ position: [0, 0, 4.2], fov: 50 }}
              onError={() => setHasWebGL(false)}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF9F7" />
              <pointLight position={[-5, -5, -2]} intensity={0.8} color="#C5A059" />
              <SilkPlane />
            </Canvas>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2B2928] to-[#B96C7A]/20">
              <span className="text-xs font-mono text-[#C5A059]">SILK MATRIX SIMULATION</span>
            </div>
          )}

          {/* Canvas Interactive Instruction Tag */}
          <div className="absolute bottom-4 left-4 bg-[#2B2928]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#E9AEB8]/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-widest text-[#F6D8DC] uppercase">
              INTERACTIVE FABRIC DISPLACEMENT
            </span>
          </div>
        </div>

        {/* Right Authentic She Temple Macro Embroidery Photography Transition */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200"
              alt="Authentic She Temple Zari Embroidery Detail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] block mb-1">
                TRANSITION TO REAL CRAFT
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#FFF9F7]">
                Emerald Velvet & Hand-Stitching
              </h3>
              <p className="text-xs font-sans-editorial text-[#F6D8DC]/80 font-light mt-1">
                Zari thread intertwined with pale rose silk motifs on heavy cotton velvet.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

