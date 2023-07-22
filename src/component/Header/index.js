import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BufferGeometry, Color, Vector3 } from "three";
import { Center, Text, Text3D } from "@react-three/drei";
import Texture from '../../img/texture.jpg'
import Texture2 from '../../img/texture2.jpg'
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
        if(x.type=="Mesh" && x.children.length==0){
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
  function AddSpotLight() {
    const { scene } = useThree();
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 1000, 100);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add(spotLight);
  }
  const texture = ()=>new THREE.TextureLoader().load(Texture)
  const MoveMyText = ()=>{
     console.log(materialRef)
     let movedown = true;
     let moveRight = true;
     const maxMovement = 0.20;
     const maxRightMovement = 0.25;
     useFrame((param)=>{
       
       if(materialRef.current.position.y<-1*maxMovement){
        movedown = false;
       }
       if(materialRef.current.position.y>0){
        movedown = true;
       }
       if(materialRef.current.rotation.y<0){
        moveRight = true;
       }
       if(materialRef.current.rotation.y>maxRightMovement){
        moveRight = false;
       }
       if(movedown){
         materialRef.current.position.y -= 0.001;
       }else{
         materialRef.current.position.y += 0.001;
       }

      //  if(moveRight){
      //    materialRef.current.rotation.y += 0.0001;
      //  }else{
      //    materialRef.current.rotation.y -= 0.0001;
      //  }
     })

  }
  return (
    <div id="header">
      <div>
        {/* <h5>
          Hello <span>I'm Vijay</span>
          <br />
          I'm a full-stack developer
        </h5> */}
        {/* <button className="customButton">View my work</button> */}
      </div>

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
        {/* <ambientLight intensity={0.5} /> */}
        {/* <spotLight
          position={[-2, -1, 10]}
          angle={0.15}
          penumbra={0}
          shadow-mapSize={[512, 512]}
          castShadow
        /> */}
        <mesh ref={meshRef} position={new Vector3(0, 0, 0)}>
       <Center ref={materialRef}>
        <Text3D
          position={[-4,0,0]}
          
          bevelSize={0.01}
          bevelThickness={0.1}
          height={0.1}
          lineHeight={0.8}
          letterSpacing={0.01}
          size={window.innerWidth<470?.3:.4}
          font="/Inter_Bold.json">
          {`Hello I'm Vijay`}
          <ambientLight/>
          <meshMatcapMaterial matcap={new THREE.TextureLoader().load(Texture)}/>
          {/* <meshNormalMaterial/> */}
        </Text3D>
        <Text3D
        position={[-4.5,-0.5,0]}
          
          bevelSize={0.01}
          bevelThickness={0.1}
          height={0.1}
          lineHeight={0.8}
          letterSpacing={0.01}
          size={window.innerWidth<470?.3:.4}
          font="/Inter_Bold.json">
          {`Fullstack Developer`}
          <ambientLight/>
          <meshMatcapMaterial matcap={new THREE.TextureLoader().load(Texture2)}/>
          {/* <meshNormalMaterial/> */}
        </Text3D>
        </Center>
       
          <AddStarInScene />
          <MoveStarsInScene /> 
          <MoveMyText/>
        </mesh>
      </Canvas>
    </div>
  );
};
export default HEADER;
