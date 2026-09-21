import { useMemo, useRef, type RefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const IVORY = '#faf6ee'
const IVORY_DEEP = '#e9ddc7'
const ROYAL = '#5a2ad1'
const ROYAL_LIGHT = '#7b4ef0'
const CHARCOAL = '#2a2732'

function Envelope({ progress }: { progress: RefObject<number> }) {
  const flap = useRef<THREE.Group>(null)

  const flapShape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(-1.05, 0)
    shape.lineTo(1.05, 0)
    shape.lineTo(0, -0.85)
    shape.closePath()
    return shape
  }, [])

  useFrame(() => {
    if (!flap.current) return
    const p = THREE.MathUtils.clamp(progress.current / 0.35, 0, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    flap.current.rotation.x = THREE.MathUtils.lerp(0, -2.55, eased)
  })

  return (
    <group position={[0, -0.35, 0]}>
      <mesh position={[0, 0, -0.02]} receiveShadow>
        <boxGeometry args={[2.15, 0.04, 1.5]} />
        <meshStandardMaterial color={IVORY_DEEP} roughness={0.8} />
      </mesh>
      <group ref={flap} position={[0, 0.02, 0.75]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow>
          <shapeGeometry args={[flapShape]} />
          <meshStandardMaterial color={ROYAL} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  )
}

function CardHinge({ progress }: { progress: RefObject<number> }) {
  const cardGroup = useRef<THREE.Group>(null)
  const left = useRef<THREE.Group>(null)
  const right = useRef<THREE.Group>(null)

  useFrame(() => {
    const slideP = THREE.MathUtils.clamp((progress.current - 0.3) / 0.35, 0, 1)
    const slideEased = 1 - Math.pow(1 - slideP, 3)
    if (cardGroup.current) {
      cardGroup.current.position.y = THREE.MathUtils.lerp(-0.3, 0.65, slideEased)
      cardGroup.current.position.z = THREE.MathUtils.lerp(0.1, 0.55, slideEased)
      cardGroup.current.rotation.x = THREE.MathUtils.lerp(0.15, -0.05, slideEased)
    }

    const foldP = THREE.MathUtils.clamp((progress.current - 0.62) / 0.38, 0, 1)
    const foldEased = 1 - Math.pow(1 - foldP, 3)
    const angle = THREE.MathUtils.lerp(Math.PI * 0.98, 0.36, foldEased)
    if (left.current) left.current.rotation.y = angle
    if (right.current) right.current.rotation.y = -angle
  })

  return (
    <group ref={cardGroup}>
      <group ref={left}>
        <mesh position={[-0.42, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.84, 1.15, 0.015]} />
          <meshStandardMaterial color={IVORY} roughness={0.55} />
        </mesh>
      </group>
      <group ref={right}>
        <mesh position={[0.42, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.84, 1.15, 0.015]} />
          <meshStandardMaterial color={IVORY} roughness={0.55} />
        </mesh>
        <mesh position={[0.42, 0.15, 0.012]}>
          <planeGeometry args={[0.5, 0.05]} />
          <meshStandardMaterial color={ROYAL_LIGHT} />
        </mesh>
        <mesh position={[0.42, 0, 0.012]}>
          <planeGeometry args={[0.6, 0.02]} />
          <meshStandardMaterial color={CHARCOAL} />
        </mesh>
        <mesh position={[0.42, -0.18, 0.012]}>
          <planeGeometry args={[0.42, 0.02]} />
          <meshStandardMaterial color={CHARCOAL} transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  )
}

function Scene({ active }: { active: boolean }) {
  const progress = useRef(0)
  const reducedMotion = useReducedMotion()

  useFrame((_, delta) => {
    const target = active ? 1 : 0
    if (reducedMotion) {
      progress.current = target
      return
    }
    progress.current += (target - progress.current) * Math.min(delta * 1.4, 1)
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, 1, 2]} intensity={8} color={ROYAL} />
      <group rotation={[0.1, -0.35, 0]}>
        <Envelope progress={progress} />
        <CardHinge progress={progress} />
      </group>
    </>
  )
}

/** Envelope opens, invitation card slides out and unfolds — plays once the section scrolls into view. */
export default function WeddingCardScene({ active }: { active: boolean }) {
  return (
    <Canvas shadows camera={{ position: [0, 0.6, 4.2], fov: 38 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
      <Scene active={active} />
    </Canvas>
  )
}
