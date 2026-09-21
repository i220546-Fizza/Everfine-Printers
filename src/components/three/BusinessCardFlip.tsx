import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const CHARCOAL = '#1c1a22'
const IVORY = '#faf6ee'
const ROYAL_LIGHT = '#e75da8'
const ELECTRIC = '#0a4b96'

function Card() {
  const group = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [tapped, setTapped] = useState(false)
  const reducedMotion = useReducedMotion()

  useFrame((state, delta) => {
    if (!group.current) return
    const target = hovered || tapped ? Math.PI : 0
    group.current.rotation.y += (target - group.current.rotation.y) * Math.min(delta * 3.2, 1)
    if (!reducedMotion) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.06
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.05 + 0.08
    }
  })

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setTapped((v) => !v)}
    >
      {/* Front */}
      <mesh position={[0, 0, 0.011]} castShadow receiveShadow>
        <boxGeometry args={[1.75, 0.02, 1.02]} />
        <meshPhysicalMaterial color={CHARCOAL} roughness={0.3} clearcoat={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[-0.5, 0.021, -0.3]}>
        <boxGeometry args={[0.55, 0.001, 0.06]} />
        <meshStandardMaterial color={ROYAL_LIGHT} />
      </mesh>
      <mesh position={[-0.5, 0.021, -0.15]}>
        <boxGeometry args={[0.4, 0.001, 0.04]} />
        <meshStandardMaterial color={IVORY} />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0, -0.011]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.75, 0.02, 1.02]} />
        <meshPhysicalMaterial color={IVORY} roughness={0.5} clearcoat={0.4} />
      </mesh>
      <mesh position={[0, -0.021, -0.08]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.7, 0.001, 0.045]} />
        <meshStandardMaterial color={ELECTRIC} />
      </mesh>
      <mesh position={[0, -0.021, 0.05]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.5, 0.001, 0.03]} />
        <meshStandardMaterial color={CHARCOAL} transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

/** A business card that flips between front and back on hover. */
export default function BusinessCardFlip() {
  return (
    <Canvas shadows camera={{ position: [0, 0.9, 2.6], fov: 32 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 3]} intensity={1.3} castShadow />
      <pointLight position={[-2, 1, 1]} intensity={6} color={ROYAL_LIGHT} />
      <Card />
    </Canvas>
  )
}
