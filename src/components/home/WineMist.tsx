import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 120
const AREA = { x: 14, y: 9, z: 6 }

interface Particle {
  base: THREE.Vector3
  speed: number
  phase: number
  scale: number
}

// precomputed once at module load — keeps render pure and particle layout stable
const PARTICLES: Particle[] = Array.from({ length: COUNT }, () => ({
  base: new THREE.Vector3(
    (Math.random() - 0.5) * AREA.x,
    (Math.random() - 0.5) * AREA.y,
    (Math.random() - 0.5) * AREA.z,
  ),
  speed: 0.12 + Math.random() * 0.25, // slow rise
  phase: Math.random() * Math.PI * 2,
  scale: 0.5 + Math.random() * 0.9,
}))

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef = useRef<THREE.Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const displacement = useRef({ x: 0, y: 0 })

  const particles = PARTICLES

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const sz = new Float32Array(COUNT)
    particles.forEach((p, i) => {
      pos[i * 3] = p.base.x
      pos[i * 3 + 1] = p.base.y
      pos[i * 3 + 2] = p.base.z
      sz[i] = p.scale
    })
    return { positions: pos, sizes: sz }
  }, [particles])

  // soft round sprite texture
  const texture = useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    g.addColorStop(0, 'rgba(235,212,138,1)')
    g.addColorStop(0.4, 'rgba(201,162,39,0.65)')
    g.addColorStop(1, 'rgba(201,162,39,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, size, size)
    return new THREE.CanvasTexture(canvas)
  }, [])

  useFrame((state) => {
    const points = pointsRef.current
    if (!points) return
    const t = state.clock.elapsedTime
    const attr = points.geometry.getAttribute('position') as THREE.BufferAttribute

    // cursor parallax with lerp decay — displacement, never base position
    displacement.current.x += (pointer.current.x * 0.9 - displacement.current.x) * 0.04
    displacement.current.y += (pointer.current.y * 0.5 - displacement.current.y) * 0.04

    for (let i = 0; i < COUNT; i++) {
      const p = particles[i]
      // slow upward float, wrap around
      let y = p.base.y + ((t * p.speed) % AREA.y)
      if (y > AREA.y / 2) y -= AREA.y
      const sway = Math.sin(t * 0.4 + p.phase) * 0.35
      attr.setXYZ(i, p.base.x + sway, y, p.base.z)
    }
    attr.needsUpdate = true

    if (groupRef.current) {
      groupRef.current.position.x = displacement.current.x
      groupRef.current.position.y = displacement.current.y
    }

    const mat = points.material as THREE.PointsMaterial
    mat.opacity = 0.55 + Math.sin(t * 0.8) * 0.15
  })

  return (
    <group ref={groupRef}>
      <points
        ref={pointsRef}
        onPointerMove={(e) => {
          pointer.current.x = (e.pointer.x ?? 0) * 0.6
          pointer.current.y = (e.pointer.y ?? 0) * 0.4
        }}
      >
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        </bufferGeometry>
        <pointsMaterial
          map={texture}
          color="#C9A227"
          size={0.28}
          sizeAttenuation
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </points>
    </group>
  )
}

/** "Wine mist" — floating golden particles for the hero (only used there). */
export default function WineMist() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <Particles />
    </Canvas>
  )
}
