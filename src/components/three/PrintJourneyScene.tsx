import { useMemo, useRef, type ReactNode, type RefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const IVORY = '#faf6ee'
const IVORY_DEEP = '#e9ddc7'
const CHARCOAL = '#1c1a22'
const ROYAL = '#da0679'
const ROYAL_LIGHT = '#e75da8'
const ELECTRIC = '#0a4b96'
const SILVER = '#c9cdd6'

const STAGE_COUNT = 8
const SPREAD = 0.085

function stageWeight(progress: number, index: number) {
  const center = index / (STAGE_COUNT - 1)
  const d = Math.abs(progress - center)
  return THREE.MathUtils.clamp(1 - d / SPREAD, 0, 1)
}

/** Fades + lifts a stage's whole group in/out based on scroll progress; skips render when hidden. */
function Stage({
  index,
  progress,
  children,
}: {
  index: number
  progress: RefObject<number>
  children: ReactNode
}) {
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!group.current) return
    const w = stageWeight(progress.current, index)
    group.current.visible = w > 0.01
    group.current.scale.setScalar(0.82 + w * 0.18)
    group.current.position.y = (1 - w) * -0.35
    group.current.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        const mat = obj.material as THREE.Material & { opacity?: number }
        if (typeof mat.opacity === 'number') mat.opacity = w
      }
    })
  })

  return <group ref={group}>{children}</group>
}

function PaperStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  return (
    <Stage index={index} progress={progress}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.03, 1.7]} />
        <meshStandardMaterial color={IVORY} roughness={0.85} transparent />
      </mesh>
    </Stage>
  )
}

function PrintingStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  const left = useRef<THREE.Mesh>(null)
  const right = useRef<THREE.Mesh>(null)
  const ink = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const w = stageWeight(progress.current, index)
    if (left.current) left.current.rotation.z += delta * (0.6 + w)
    if (right.current) right.current.rotation.z -= delta * (0.6 + w)
    if (ink.current) {
      ink.current.position.x = THREE.MathUtils.lerp(-0.85, 0.85, THREE.MathUtils.clamp(w * 1.4, 0, 1))
    }
  })

  return (
    <Stage index={index} progress={progress}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.03, 1.7]} />
        <meshStandardMaterial color={IVORY} roughness={0.8} transparent />
      </mesh>
      <mesh ref={ink} position={[-0.85, 0.022, 0]} castShadow>
        <boxGeometry args={[0.5, 0.006, 1.68]} />
        <meshPhysicalMaterial color={ROYAL} emissive={ELECTRIC} emissiveIntensity={0.3} roughness={0.3} transparent />
      </mesh>
      <mesh ref={left} position={[-0.85, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 1.9, 24]} />
        <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.3} transparent />
      </mesh>
      <mesh ref={right} position={[0.85, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 1.9, 24]} />
        <meshStandardMaterial color={CHARCOAL} roughness={0.4} metalness={0.3} transparent />
      </mesh>
    </Stage>
  )
}

function BusinessCardStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  return (
    <Stage index={index} progress={progress}>
      <mesh rotation={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.05, 0.03, 0.62]} />
        <meshPhysicalMaterial color={CHARCOAL} roughness={0.3} clearcoat={0.7} transparent />
      </mesh>
      <mesh position={[-0.15, 0.02, -0.15]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[0.55, 0.001, 0.04]} />
        <meshStandardMaterial color={ROYAL_LIGHT} transparent />
      </mesh>
    </Stage>
  )
}

function WeddingStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  return (
    <Stage index={index} progress={progress}>
      <group rotation={[0, -0.4, 0]}>
        <mesh position={[-0.4, 0, 0]} rotation={[0, 0.55, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.02, 0.98]} />
          <meshStandardMaterial color={IVORY} roughness={0.55} transparent />
        </mesh>
        <mesh position={[0.4, 0, 0]} rotation={[0, -0.55, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.02, 0.98]} />
          <meshStandardMaterial color={IVORY} roughness={0.55} transparent />
        </mesh>
        <mesh position={[0.34, 0.02, -0.25]} rotation={[0, -0.55, 0]}>
          <boxGeometry args={[0.4, 0.001, 0.02]} />
          <meshStandardMaterial color={ROYAL} transparent />
        </mesh>
      </group>
    </Stage>
  )
}

function BrochureStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  return (
    <Stage index={index} progress={progress}>
      <mesh position={[-0.42, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.02, 1.1]} />
        <meshStandardMaterial color={SILVER} roughness={0.6} transparent />
      </mesh>
      <mesh position={[0.42, 0, 0]} rotation={[0, -0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.02, 1.1]} />
        <meshStandardMaterial color={IVORY} roughness={0.6} transparent />
      </mesh>
    </Stage>
  )
}

function BoxStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!mesh.current) return
    const w = stageWeight(progress.current, index)
    mesh.current.scale.y = THREE.MathUtils.lerp(0.05, 1, w)
    mesh.current.position.y = THREE.MathUtils.lerp(-0.45, 0, w)
  })

  return (
    <Stage index={index} progress={progress}>
      <mesh ref={mesh} rotation={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 0.85, 1]} />
        <meshStandardMaterial color={IVORY_DEEP} roughness={0.75} transparent />
      </mesh>
    </Stage>
  )
}

function BagStage({ index, progress }: { index: number; progress: RefObject<number> }) {
  const handle = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 0.24, 0.3, Math.PI, Math.PI * 2, false, 0)
    const points = curve.getPoints(24).map((p) => new THREE.Vector3(p.x, p.y, 0))
    return new THREE.CatmullRomCurve3(points)
  }, [])

  return (
    <Stage index={index} progress={progress}>
      <group rotation={[0, -0.3, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.8, 0.95, 0.36]} />
          <meshStandardMaterial color={ROYAL} roughness={0.55} transparent />
        </mesh>
        <mesh position={[0, 0.56, 0]}>
          <tubeGeometry args={[handle, 20, 0.028, 8, false]} />
          <meshStandardMaterial color={CHARCOAL} roughness={0.4} transparent />
        </mesh>
      </group>
    </Stage>
  )
}

function CameraRig({ progress }: { progress: RefObject<number> }) {
  useFrame(({ camera }) => {
    const p = progress.current
    camera.position.z = THREE.MathUtils.lerp(5.6, 4.4, p)
    camera.position.y = THREE.MathUtils.lerp(0.3, 0.55, p)
    camera.lookAt(0, 0, 0)
  })
  return null
}

function AmbientRing({ progress }: { progress: RefObject<number> }) {
  const ring = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.08
    if (ring.current) {
      const opacity = 0.12 + (1 - Math.abs(progress.current - 0.5) * 2) * 0.06
      const mat = ring.current.material as THREE.MeshBasicMaterial
      mat.opacity = THREE.MathUtils.clamp(opacity, 0.05, 0.2)
    }
  })
  return (
    <mesh ref={ring} position={[0, 0, -1.6]}>
      <ringGeometry args={[1.6, 1.63, 64]} />
      <meshBasicMaterial color={ROYAL_LIGHT} transparent opacity={0.12} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Scene({ progress }: { progress: RefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 5, 4]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, -1, 2]} intensity={9} color={ROYAL} />
      <pointLight position={[3, 2, -1]} intensity={7} color={ELECTRIC} />

      <CameraRig progress={progress} />
      <AmbientRing progress={progress} />

      <PaperStage index={0} progress={progress} />
      <PrintingStage index={1} progress={progress} />
      <BusinessCardStage index={2} progress={progress} />
      <WeddingStage index={3} progress={progress} />
      <BrochureStage index={4} progress={progress} />
      <BoxStage index={5} progress={progress} />
      <BagStage index={6} progress={progress} />
    </>
  )
}

/**
 * The signature scroll-driven story: a blank sheet becomes a business card, a wedding
 * invitation, a brochure, a packaging box and a branded bag — crossfading between stages
 * as `progress` (0..1, driven by a pinned GSAP ScrollTrigger in the parent section) advances.
 */
export default function PrintJourneyScene({ progress }: { progress: RefObject<number> }) {
  return (
    <Canvas shadows camera={{ position: [0, 0.3, 5.6], fov: 38 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
      <Scene progress={progress} />
    </Canvas>
  )
}
