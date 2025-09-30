import { Center, Instance, Instances, useTexture } from "@react-three/drei";
import {
  GroupProps,
  MeshMatcapMaterialProps,
  useFrame,
} from "@react-three/fiber";
import React, { useRef, useMemo, forwardRef, memo } from "react";
import { CylinderGeometry, Group, MeshMatcapMaterial } from "three";

const radius = 3;
const count = 8;

const Item = memo((props: GroupProps) => {
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <group {...props}>
      <group ref={ref} rotation={[0, Math.PI / count, Math.PI / 2]}>
        <Instance />
      </group>
    </group>
  );
});

Item.displayName = "Item";

export const Item3 = () => {
  const groupRef = useRef<Group>(null!);

  const geometry = useMemo(() => new CylinderGeometry(1, 1, 0.1, 64), []);
  const material = useMemo(() => <CustomMaterial />, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const delta = clock.getDelta();
      groupRef.current.rotation.z -= delta * 0.5; // Scale rotation speed by delta time
    }
  });

  return (
    <Center>
      <group>
        <group scale={0.6} ref={groupRef}>
          <Instances geometry={geometry}>
            {material}
            {Array.from({ length: count }).map((_, index) => (
              <Item
                position={[
                  radius *
                    Math.cos((index * 2 * Math.PI) / count + Math.PI / 4),
                  radius *
                    Math.sin((index * 2 * Math.PI) / count + Math.PI / 4),
                  0,
                ]}
                rotation={[0, 0, (index * 2 * Math.PI) / count]}
                key={index}
              />
            ))}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

export const CustomMaterial = forwardRef<
  MeshMatcapMaterial,
  MeshMatcapMaterialProps
>((props, ref) => {
  // Load the "3.jpeg" texture directly
  const texture = useTexture("/images/1.jpeg");

  return <meshMatcapMaterial {...props} ref={ref} matcap={texture} />;
});

CustomMaterial.displayName = "CustomMaterial";
