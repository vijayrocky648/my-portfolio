import { Canvas } from "@react-three/fiber";
import "./index.css";
function Loading() {
  return (
    <div className="baseloader">
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    </div>
  );
}

export default Loading;
