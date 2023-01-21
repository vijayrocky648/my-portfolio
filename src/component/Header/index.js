import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import PROFILEPIC from "../../img/profilepic.jpg";
import HTML from "../../img/html.png";
import NODEJS from "../../img/javascript.png";
import REACT from "../../img/react.png";
import CSHARP from "../../img/c#.png";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BufferGeometry, Color, Vector3 } from "three";
import { Sparkles, Text } from "@react-three/drei";

const AddStar = () => {
  let shape = new THREE.CircleGeometry(0.03, 10, 10);
  let material = new THREE.MeshBasicMaterial();
  material.color = new THREE.Color("white");
  let mesh = new THREE.Mesh(shape, material);
  let [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(20));
  
  mesh.position.set(x, y, z);
  return mesh;
};


const HEADER = () => {
  const [star,setStar] = useState([]);
  
  useEffect(()=>{
     if(star.length==0){
      setStar(Array(80).fill().map(x=>AddStar()))
     }
  },[])
  const meshRef = useRef();

  const AddStarInScene = () => {
    const { scene } = useThree();
    if(scene.children.length<80){
      star.forEach((value) => {
        scene.add(value);
      });
    }
    
  };
 
  const MoveStarsInScene = ()=>{
    debugger;
    const {scene} = useThree()
    useFrame(({ clock })=>{
     
      scene.children.forEach((x)=>{
        if(x.geometry){
          if(x.position.y<5){
            x.position.y +=.02;
          }else{
            scene.remove(x);
            x.geometry.dispose();
            x.material.dispose();
            scene.add(AddStar())
          }
        }
        
      })
    })
  }
  function Caption({ children }) {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        position={[0, 0, -10]}
        lineHeight={0.8}
        font="/Ki-Medium.ttf"
        fontSize={width / 8}
        material-toneMapped={false}
        anchorX="center"
        anchorY="bottom"
        color={"red"}
        castShadow={"true"}
        letterSpacing="0"
        
         >
        {children}
      </Text>
    )
  }
  return (
    <div id="header">
      <div>
            <h5>Hello <span>I'm Vijay</span>
                <br />
                I'm a full-stack developer
            </h5>
            <button className="customButton">View my work</button>
        </div>

      <Canvas style={{backgroundColor:"black",zIndex:"-1",height:"100vh"}} id="animateCanvas" onCreated={({ gl }) => {
       
        gl.setClearColor(new THREE.Color('#020207'))
      }}>
        <group>
          <mesh ref={meshRef} position={new Vector3(0,0,0)}>
            <meshBasicMaterial
              attach="material"
              color="red"
              transparent
              opacity={0.5}
              roughness={1}
              metalness={0}
            ></meshBasicMaterial>
          </mesh>
          
           <AddStarInScene />
          <MoveStarsInScene/>
          <spotLight></spotLight>
        </group>
      </Canvas>
    </div>
  );
};
export default HEADER;
