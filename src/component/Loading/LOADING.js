
import { Canvas } from "@react-three/fiber";
import './index.css'
function LOADING() {
    
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        zIndex: 99,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <div class="lds-facebook"><div></div><div></div><div></div></div>
      
    </div>
  );
}

export default LOADING;
