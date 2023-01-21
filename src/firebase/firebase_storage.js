
import { getStorage } from "firebase/storage";
import FIREBASEAPP from "./firebaseapp";

var storage = getStorage(FIREBASEAPP);
export default storage;