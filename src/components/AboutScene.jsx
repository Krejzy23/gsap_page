import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AboutScene() {
  const mesh = useRef();
  const originalPositions = useRef();
  const ripples = useRef([]);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(35, 35, 60, 60);
    const pos = geo.attributes.position;
    pos.setUsage(THREE.DynamicDrawUsage);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const random =
        Math.sin(x * 1.7) * 0.4 +
        Math.cos(y * 1.3) * 0.4 +
        (Math.random() - 0.5) * 0.6;

      pos.setZ(i, random);
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();

    originalPositions.current = pos.array.slice();

    return geo;
  }, []);

  /* CLICK HANDLER (R3F pointer system) */
  const handleClick = (e) => {
    const local = mesh.current.worldToLocal(e.point.clone());

    ripples.current.push({
      x: local.x,
      y: local.y,
      start: performance.now(),
    });
  };

  useFrame((state) => {
    if (!mesh.current) return;

    const t = state.clock.elapsedTime;
    const now = performance.now();

    const pos = geometry.attributes.position;
    const base = originalPositions.current;

    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;

      const baseX = base[ix];
      const baseY = base[ix + 1];
      const baseZ = base[ix + 2];

      /* breathing */
      const wave =
        Math.sin(baseX * 0.5 + t * 0.8) * 0.25 +
        Math.cos(baseY * 0.6 + t * 0.6) * 0.25;

      /* ripple */
      let rippleEffect = 0;

      ripples.current.forEach((ripple) => {
        const dx = baseX - ripple.x;
        const dy = baseY - ripple.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const elapsed = (now - ripple.start) * 0.002;
        const waveRadius = elapsed * 4;
        const diff = dist - waveRadius;

        if (Math.abs(diff) < 1.2) {
          rippleEffect += Math.sin(diff * 5) * Math.exp(-elapsed * 0.4) * 1.2;
        }
      });

      const targetZ = baseZ + wave + rippleEffect;
      const currentZ = pos.getZ(i);

      pos.setZ(i, THREE.MathUtils.lerp(currentZ, targetZ, 0.15));
    }

    pos.needsUpdate = true;

    /* cinematic drift */
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      5 + Math.sin(t * 0.15) * 1.5,
      0.02
    );
    state.camera.updateProjectionMatrix();

    ripples.current = ripples.current.filter((r) => now - r.start < 4000);
  });

  return (
    <>
      <color attach="background" args={["#050507"]} />

      <directionalLight position={[10, 15, 10]} intensity={1.3} />
      <ambientLight intensity={0.35} />

      <mesh
        ref={mesh}
        geometry={geometry}
        rotation={[-0.8, 0.2, 0]}
        onPointerDown={handleClick}
      >
        <meshPhysicalMaterial
          color="#637284"
          roughness={0.25}
          metalness={0.7}
          // transmission={0.5}
          thickness={1.2}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.4}
          wireframe
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
