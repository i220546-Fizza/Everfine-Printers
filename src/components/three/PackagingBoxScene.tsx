import { useRef, type RefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const IVORY = '#faf6ee'
const IVORY_DEEP = '#e9ddc7'
const ROYAL = '#da0679'
const CHARCOAL = '#2a2732'
const ELECTRIC = '#0a4b96'

const SIZE = 0.95
const HALF = SIZE / 2

function Wall({
  hinge,
  axis,
  closedAngle,
  openAngle,
  progressStart,
  progressEnd,
  progress,
  color = IVORY,
}: {
  hinge: [number, number, number]
  axis: 'x' | 'z'
  closedAngle: number
  openAngle: number
  progressStart: number
  progressEnd: number
  progress: RefObject<number>
  color?: string
}) {
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!group.current) return
    const span = Math.max(progressEnd - progressStart, 0.0001)
    const p = THREE.MathUtils.clamp((progress.current - progressStart) / span, 0, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    const angle = THREE.MathUtils.lerp(closedAngle, openAngle, eased)
    if (axis === 'x') group.current.rotation.x = angle
    else group.current.rotation.z = angle
  })

  return (
    <group ref={group} position={hinge}>
      <mesh position={[0, axis === 'x' ? -HALF : 0, axis === 'z' ? HALF : 0]} castShadow receiveShadow>
        <boxGeometry args={[SIZE, SIZE, 0.02]} />
        <meshStandardMaterial color={color} roughness={0.75} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function ProductInside({ progress }: { progress: RefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!mesh.current) return
    const p = THREE.MathUtils.clamp((progress.current - 0.55) / 0.3, 0, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    mesh.current.scale.setScalar(THREE.MathUtils.lerp(0.001, 1, eased))
    mesh.current.position.y = THREE.MathUtils.lerp(-0.1, 0.15, eased)
    mesh.current.rotation.y = eased * Math.PI * 0.6
  })

  return (
    <mesh ref={mesh} position={[0, -0.1, 0]} castShadow>
      <icosahedronGeometry args={[0.32, 0]} />
      <meshPhysicalMaterial color={ELECTRIC} roughness={0.25} metalness={0.4} clearcoat={0.8} />
    </mesh>
  )
}

function Lid({ progress }: { progress: RefObject<number> }) {
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!group.current) return
    const p = THREE.MathUtils.clamp((progress.current - 0.7) / 0.3, 0, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    group.current.rotation.x = THREE.MathUtils.lerp(0, -2.4, eased)
  })

  return (
    <group ref={group} position={[0, HALF, HALF]}>
      <mesh position={[0, 0, -HALF]} castShadow receiveShadow>
        <boxGeometry args={[SIZE, 0.02, SIZE]} />
        <meshStandardMaterial color={ROYAL} roughness={0.6} side={THREE.DoubleSide} />
      </mesh>
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
    progress.current += (target - progress.current) * Math.min(delta * 1.1, 1)
  })

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 5, 4]} intensity={1.35} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, -1, 2]} intensity={9} color={ROYAL} />

      <group rotation={[0.55, 0.75, 0]} position={[0, -0.15, 0]}>
        {/* Base */}
        <mesh position={[0, -HALF, 0]} receiveShadow castShadow>
          <boxGeometry args={[SIZE, 0.02, SIZE]} />
          <meshStandardMaterial color={CHARCOAL} roughness={0.7} />
        </mesh>

        {/* Four side walls hinge open from lying flat to upright */}
        <Wall hinge={[0, -HALF, -HALF]} axis="x" closedAngle={-Math.PI / 2} openAngle={0} progressStart={0} progressEnd={0.3} progress={progress} color={IVORY} />
        <Wall hinge={[0, -HALF, HALF]} axis="x" closedAngle={Math.PI / 2} openAngle={0} progressStart={0.05} progressEnd={0.35} progress={progress} color={IVORY} />
        <Wall hinge={[-HALF, -HALF, 0]} axis="z" closedAngle={Math.PI / 2} openAngle={0} progressStart={0.1} progressEnd={0.4} progress={progress} color={IVORY_DEEP} />
        <Wall hinge={[HALF, -HALF, 0]} axis="z" closedAngle={-Math.PI / 2} openAngle={0} progressStart={0.15} progressEnd={0.45} progress={progress} color={IVORY_DEEP} />

        <ProductInside progress={progress} />
        <Lid progress={progress} />
      </group>
    </>
  )
}

/** A flat sheet folds into a box, the lid opens, and a product appears inside — plays once in view. */
export default function PackagingBoxScene({ active }: { active: boolean }) {
  return (
    <Canvas shadows camera={{ position: [0, 0.4, 4], fov: 36 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
      <Scene active={active} />
    </Canvas>
  )
}
