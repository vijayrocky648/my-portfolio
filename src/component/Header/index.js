import React, { Suspense, useEffect, useRef, useState } from "react";
import "./header.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BufferGeometry, Color, Vector3 } from "three";
import { Center, Html, Text, Text3D, useProgress } from "@react-three/drei";
import Texture from "../../img/texture.jpg";
import Texture2 from "../../img/texture2.jpg";
const fargmentSharder = `void main(){
  gl_FragColor = vec4(1,6,1,1);
}`;
const vertexShader = `void main(){
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
const AddStar = () => {
  let shape = new THREE.CircleGeometry(0.03, 10, 10);
  let material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fargmentSharder,
  });
  material.color = new THREE.Color("white");
  let mesh = new THREE.Mesh(shape, material);
  let [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(20));

  mesh.position.set(x, y, z);
  return mesh;
};

const HEADER = () => {
  const materialRef = useRef();
  const [star, setStar] = useState([]);
  const loadManager = new THREE.LoadingManager();

  useEffect(() => {
    if (star.length == 0) {
      setStar(
        Array(100)
          .fill()
          .map((x) => AddStar())
      );
    }
  }, []);
  const meshRef = useRef();

  const AddStarInScene = () => {
    const { scene } = useThree();
    if (scene.children.length < 100) {
      star.forEach((value) => {
        scene.add(value);
      });
    }
  };

  const MoveStarsInScene = () => {
    const { scene } = useThree();

    useFrame(({ clock }) => {
      scene.children.forEach((x) => {
        if (x.type == "Mesh" && x.children.length == 0) {
          if (x.geometry) {
            if (x.position.y < 5) {
              x.position.y += 0.02;
            } else {
              scene.remove(x);
              x.geometry.dispose();
              x.material.dispose();
              scene.add(AddStar());
            }
          }
        }
      });
    });
  };

  const MoveMyText = () => {
    let movedown = true;
    let moveRight = true;
    const maxMovement = 0.2;
    const maxRightMovement = 0.25;
    useFrame((param) => {
      const position = materialRef.current?.position;
      const rotation = materialRef.current?.rotation;

      if (position == null || rotation == null) {
        return;
      }

      if (position?.y < -1 * maxMovement) {
        movedown = false;
      }
      if (position.y > 0) {
        movedown = true;
      }
      if (rotation.y < 0) {
        moveRight = true;
      }
      if (rotation.y > maxRightMovement) {
        moveRight = false;
      }
      if (movedown) {
        position.y -= 0.001;
      } else {
        position.y += 0.001;
      }
    });
  };
  return (
    <div id="header">
      <Canvas
        style={{
          zIndex: "-1",
          height: "100vh",
        }}
        id="animateCanvas"
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("#0f2027"));
        }}
      >
        <mesh ref={meshRef} position={new Vector3(0, 0, 0)}>
          
            <Center ref={materialRef}>
              <Text3D
                position={[-4.1, 0, 0]}
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.9}
                letterSpacing={0.01}
                size={window.innerWidth < 470 ? 0.2 : 0.4}
                font="/Inter_Bold.json"
              >
                {`Hello I'm Vijay`}
                <ambientLight />
                <meshMatcapMaterial
                  matcap={new THREE.TextureLoader().load(Texture)}
                />
              </Text3D>
              <Text3D
                position={[-4.5, -0.5, 0]}
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.8}
                letterSpacing={0.01}
                size={window.innerWidth < 470 ? 0.2 : 0.4}
                font="/Inter_Bold.json"
              >
                {`Fullstack Developer`}
                <ambientLight />
                <meshMatcapMaterial
                  matcap={new THREE.TextureLoader().load(Texture2)}
                />
              </Text3D>

            </Center>
          
          <AddStarInScene />
          <MoveStarsInScene />
          <MoveMyText />
        </mesh>
      </Canvas>
    </div>
  );
};
export default HEADER;
