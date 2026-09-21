import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const PALETTE = {
  ivory: '#faf6ee',
  charcoal: '#1c1a22',
  royal: '#da0679',
  royalLight: '#e75da8',
  electric: '#0a4b96',
  silver: '#c9cdd6',
}

function CenterRoller() {
  const ring = useRef<THREE.Mesh>(null)
  const core = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.x += delta * 0.18
    if (ring.current) ring.current.rotation.y += delta * 0.1
    if (core.current) core.current.rotation.y -= delta * 0.25
  })

  return (
    <group>
      <mesh ref={ring} castShadow receiveShadow>
        <torusGeometry args={[1.35, 0.18, 32, 96]} />
        <meshPhysicalMaterial
          color={PALETTE.electric}
          roughness={0.15}
          metalness={0.4}
          clearcoat={1}
          transmission={0.35}
          thickness={0.6}
          ior={1.3}
        />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.62, 1]} />
        <meshPhysicalMaterial
          color={PALETTE.royal}
          roughness={0.2}
          metalness={0.6}
          emissive={PALETTE.royalLight}
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  )
}

function PaperStack({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.1}>
      <group position={position} rotation={[0.15, 0.4, -0.05]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, i * 0.035, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.1, 0.03, 1.45]} />
            <meshStandardMaterial color={PALETTE.ivory} roughness={0.85} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function BusinessCard({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} rotationIntensity={0.7} floatIntensity={1.3}>
      <mesh position={position} rotation={[0.3, 0.9, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.88, 0.03, 0.52]} />
        <meshPhysicalMaterial color={PALETTE.charcoal} roughness={0.3} clearcoat={0.6} />
      </mesh>
    </Float>
  )
}

function WeddingCard({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1}>
      <group position={position} rotation={[0.1, -0.5, 0.05]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.04, 0.98]} />
          <meshStandardMaterial color={PALETTE.ivory} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.025, -0.22]}>
          <boxGeometry args={[0.5, 0.01, 0.02]} />
          <meshStandardMaterial color={PALETTE.royalLight} metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

function Brochure({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={[0.2, 0.3, -0.15]}>
        <mesh position={[-0.28, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.56, 0.02, 0.8]} />
          <meshStandardMaterial color={PALETTE.silver} roughness={0.6} />
        </mesh>
        <mesh position={[0.28, 0, 0]} rotation={[0, -0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.56, 0.02, 0.8]} />
          <meshStandardMaterial color={PALETTE.ivory} roughness={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

function PackagingBox({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh position={position} rotation={[0.25, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 0.75, 0.85]} />
        <meshStandardMaterial color={PALETTE.ivory} roughness={0.75} />
      </mesh>
    </Float>
  )
}

function ShoppingBag({ position }: { position: [number, number, number] }) {
  const handle = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 0.22, 0.28, Math.PI, Math.PI * 2, false, 0)
    const points = curve.getPoints(24).map((p) => new THREE.Vector3(p.x, p.y, 0))
    return new THREE.CatmullRomCurve3(points)
  }, [])

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.1}>
      <group position={position} rotation={[0.1, -0.3, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.85, 0.32]} />
          <meshStandardMaterial color={PALETTE.royal} roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <tubeGeometry args={[handle, 20, 0.025, 8, false]} />
          <meshStandardMaterial color={PALETTE.charcoal} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

function Mug({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={[0, 0.4, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.34, 0.3, 0.62, 32]} />
          <meshStandardMaterial color={PALETTE.ivory} roughness={0.4} />
        </mesh>
        <mesh position={[0.36, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.16, 0.045, 16, 32, Math.PI]} />
          <meshStandardMaterial color={PALETTE.ivory} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

function Pen({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={position} rotation={[0, 0, Math.PI / 3.4]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.045, 0.045, 1.05, 20]} />
          <meshPhysicalMaterial color={PALETTE.charcoal} roughness={0.25} clearcoat={0.8} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.58, 0]}>
          <coneGeometry args={[0.045, 0.14, 20]} />
          <meshStandardMaterial color={PALETTE.silver} metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const reducedMotion = useReducedMotion()
  const { viewport } = useThree()

  useFrame((state) => {
    if (!group.current) return
    if (reducedMotion) {
      group.current.rotation.y = 0
      group.current.rotation.x = 0
      return
    }
    const targetY = (state.pointer.x * viewport.width) / 40
    const targetX = (-state.pointer.y * viewport.height) / 60
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    group.current.rotation.z += reducedMotion ? 0 : 0.0006
  })

  return <group ref={group}>{children}</group>
}

function Scene() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const density = isMobile ? 'low' : isTablet ? 'medium' : 'full'

  const items: { key: string; el: React.ReactNode }[] = [
    { key: 'paper', el: <PaperStack position={[-2.5, 0.3, -0.6]} /> },
    { key: 'business', el: <BusinessCard position={[2.6, 0.9, 0.2]} /> },
    { key: 'wedding', el: <WeddingCard position={[-2.1, -1.1, 0.8]} /> },
    { key: 'brochure', el: <Brochure position={[2.3, -0.8, -0.4]} /> },
    { key: 'box', el: <PackagingBox position={[0.2, -1.7, 1.1]} /> },
    { key: 'bag', el: <ShoppingBag position={[3.1, 0.1, -1.2]} /> },
    { key: 'mug', el: <Mug position={[-3.1, 1.3, -0.2]} /> },
    { key: 'pen', el: <Pen position={[0.6, 1.9, 0.6]} /> },
  ]

  const visible = density === 'full' ? items : density === 'medium' ? items.slice(0, 6) : items.slice(0, 4)

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.4}
        castShadow={density !== 'low'}
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, -2, -3]} intensity={12} color={PALETTE.royal} />
      <pointLight position={[5, 3, -2]} intensity={10} color={PALETTE.electric} />

      <ParallaxRig>
        <CenterRoller />
        {visible.map((item) => (
          <group key={item.key}>{item.el}</group>
        ))}
      </ParallaxRig>

      {density !== 'low' && (
        <ContactShadows position={[0, -2.3, 0]} opacity={0.35} scale={12} blur={2.6} far={4} color="#1c1a22" />
      )}
    </>
  )
}

/** Hero 3D scene — floating printed products orbiting a central "print roller", with subtle mouse parallax. */
export default function HeroScene() {
  const isMobile = useIsMobile()

  return (
    <Canvas
      shadows
      dpr={[1, isMobile ? 1.4 : 2]}
      camera={{ position: [0, 0.6, 8.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  )
}
