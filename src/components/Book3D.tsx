import { useTexture } from "@react-three/drei";
import { MeshStandardMaterial, NearestFilter, LinearFilter } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

export default function Book3D() {
  const texture = useTexture("/404.jpg", (texture) => {
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.anisotropy = 16;
  });

  const frontCoverMaterials = [
    new MeshStandardMaterial({ color: "black" }), // right
    new MeshStandardMaterial({ color: "black" }), // left
    new MeshStandardMaterial({ color: "black" }), // top
    new MeshStandardMaterial({ color: "black" }), // bottom
    new MeshStandardMaterial({ map: texture, roughness: 0.4, metalness: 0.3 }), // front
    new MeshStandardMaterial({ color: "black" }), // back
  ];

  return (
    <group rotation={[degToRad(-30), degToRad(-20), 0]}>
      <mesh position-z={0.5 * 0.5 - 0.025} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.05, 3.1, 0.05]} />
        <primitive object={frontCoverMaterials} attach="material" />
      </mesh>
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 0.4]} />
        <meshPhysicalMaterial
          color="white"
          roughness={0.8}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <mesh position-z={-0.5 * 0.5 + 0.025} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.05, 3.1, 0.05]} />
        <meshPhysicalMaterial
          color="black"
          roughness={0.8}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <mesh position-x={-2.05 * 0.5} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 3.1, 0.5]} />
        <meshPhysicalMaterial
          color="black"
          roughness={0.8}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </group>
  );
}
