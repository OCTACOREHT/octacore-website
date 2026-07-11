"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

// Particle field — 2000 points drifting in a sphere
function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const count = 1800

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#2382FF"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

// Wireframe floating octahedron (on-brand for OCTA)
function FloatingOctahedron({
  position,
  scale,
  rotSpeed,
  color,
}: {
  position: [number, number, number]
  scale: number
  rotSpeed: [number, number, number]
  color: string
}) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    mesh.current.rotation.x += rotSpeed[0]
    mesh.current.rotation.y += rotSpeed[1]
    mesh.current.rotation.z += rotSpeed[2]
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.15
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe opacity={0.25} transparent />
    </mesh>
  )
}

// Wireframe torus ring
function FloatingTorus({
  position,
  rotSpeed,
}: {
  position: [number, number, number]
  rotSpeed: [number, number, number]
}) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    mesh.current.rotation.x += rotSpeed[0]
    mesh.current.rotation.y += rotSpeed[1]
    mesh.current.position.y =
      position[1] + Math.cos(state.clock.elapsedTime * 0.35 + position[2]) * 0.12
  })

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[0.55, 0.04, 8, 32]} />
      <meshBasicMaterial color="#0030FF" wireframe opacity={0.3} transparent />
    </mesh>
  )
}

// Icosahedron (sphere-like geometry for variety)
function FloatingIcosahedron({
  position,
  scale,
  rotSpeed,
}: {
  position: [number, number, number]
  scale: number
  rotSpeed: [number, number, number]
}) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    mesh.current.rotation.x += rotSpeed[0]
    mesh.current.rotation.y += rotSpeed[1]
    mesh.current.rotation.z += rotSpeed[2]
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[1]) * 0.2
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#2382FF" wireframe opacity={0.18} transparent />
    </mesh>
  )
}

// Mouse parallax rig — wraps all scene objects
function CameraRig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()

  useFrame(() => {
    vec.set(mouse.x * 0.4, mouse.y * 0.25, camera.position.z)
    camera.position.lerp(vec, 0.04)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function SceneContent() {
  return (
    <>
      <CameraRig />
      <ParticleField />

      {/* Octahedra cluster — varying sizes & speeds */}
      <FloatingOctahedron position={[-3.5, 1.2, -2]} scale={0.55} rotSpeed={[0.003, 0.004, 0.001]} color="#2382FF" />
      <FloatingOctahedron position={[3.8, -0.8, -3]} scale={0.4} rotSpeed={[0.002, 0.005, 0.002]} color="#0030FF" />
      <FloatingOctahedron position={[-1.5, -2.2, -1.5]} scale={0.3} rotSpeed={[0.004, 0.002, 0.003]} color="#2382FF" />
      <FloatingOctahedron position={[2.2, 2.5, -2.5]} scale={0.65} rotSpeed={[0.001, 0.003, 0.004]} color="#0030FF" />
      <FloatingOctahedron position={[0.5, -3, -4]} scale={0.35} rotSpeed={[0.003, 0.003, 0.001]} color="#2382FF" />

      {/* Torus rings */}
      <FloatingTorus position={[4.5, 0.5, -3.5]} rotSpeed={[0.005, 0.003, 0]} />
      <FloatingTorus position={[-4, -1, -2]} rotSpeed={[0.003, 0.005, 0.001]} />
      <FloatingTorus position={[1.5, 3.2, -3]} rotSpeed={[0.004, 0.002, 0.002]} />

      {/* Icosahedra for variety */}
      <FloatingIcosahedron position={[-2.8, 2.8, -4]} scale={0.4} rotSpeed={[0.002, 0.004, 0.001]} />
      <FloatingIcosahedron position={[4, -2.5, -3]} scale={0.3} rotSpeed={[0.003, 0.002, 0.003]} />

      {/* Ambient blue point lights */}
      <pointLight position={[-4, 2, 2]} intensity={2} color="#0030FF" distance={8} />
      <pointLight position={[4, -1, 3]} intensity={1.5} color="#2382FF" distance={6} />
    </>
  )
}

export default function PremiumBackground3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <SceneContent />
    </Canvas>
  )
}
