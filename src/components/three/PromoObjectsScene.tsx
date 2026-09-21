import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

const IVORY = '#faf6ee'
const CHARCOAL = '#1c1a22'
const ROYAL = '#da0679'
const ELECTRIC = '#0a4b96'
const SILVER = '#c9cdd6'

function Mug() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35
  })
  return (
    <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.7}>
      <group ref={group} position={[-1.5, 0, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.44, 0.9, 40]} />
          <meshPhysicalMaterial color={IVORY} roughness={0.35} clearcoat={0.5} />
        </mesh>
        <mesh position={[0.52, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.24, 0.065, 16, 32, Math.PI]} />
          <meshStandardMaterial color={IVORY} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.05, 0.45]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.35, 0.01]} />
          <meshStandardMaterial color={ROYAL} />
        </mesh>
      </group>
    </Float>
  )
}

function Pen() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.25
  })
  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.9}>
      <group position={[0, 0.1, 0.4]} rotation={[0, 0, Math.PI / 2.6]}>
        <group ref={group}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.075, 0.075, 1.7, 24]} />
            <meshPhysicalMaterial color={CHARCOAL} roughness={0.2} clearcoat={0.9} metalness={0.3} />
          </mesh>
          <mesh position={[0, 0.95, 0]}>
            <coneGeometry args={[0.075, 0.22, 24]} />
            <meshStandardMaterial color={SILVER} metalness={0.8} roughness={0.15} />
          </mesh>
          <mesh position={[0, -0.2, 0.077]}>
            <boxGeometry args={[0.03, 0.7, 0.005]} />
            <meshStandardMaterial color={ELECTRIC} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

function Bag() {
  const group = useRef<THREE.Group>(null)
  const handle = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 0.28, 0.34, Math.PI, Math.PI * 2, false, 0)
    const points = curve.getPoints(24).map((p) => new THREE.Vector3(p.x, p.y, 0))
    return new THREE.CatmullRomCurve3(points)
  }, [])

  useFrame((state) => {
    if (group.current) group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.9) * 0.09
  })

  return (
    <Float speed={1.1} rotationIntensity={0.1} floatIntensity={0.6}>
      <group ref={group} position={[1.6, -0.05, -0.2]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.95, 1.15, 0.42]} />
          <meshStandardMaterial color={ROYAL} roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.05, 0.22]}>
          <boxGeometry args={[0.6, 0.5, 0.01]} />
          <meshStandardMaterial color={IVORY} />
        </mesh>
        <mesh position={[0, 0.68, 0]}>
          <tubeGeometry args={[handle, 20, 0.032, 8, false]} />
          <meshStandardMaterial color={CHARCOAL} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

/** Mug rotates slowly, pen spins gently, and a shopping bag sways — a small always-on promo showcase. */
export default function PromoObjectsScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0.5, 5.4], fov: 38 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 4]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, 1, 2]} intensity={8} color={ROYAL} />
      <pointLight position={[3, 2, -1]} intensity={6} color={ELECTRIC} />
      <Mug />
      <Pen />
      <Bag />
      <ContactShadows position={[0, -0.75, 0]} opacity={0.32} scale={8} blur={2.4} far={3} color="#1c1a22" />
    </Canvas>
  )
}
