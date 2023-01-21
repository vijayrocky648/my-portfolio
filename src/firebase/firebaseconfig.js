import { getFirestore } from 'firebase/firestore';
import FIREBASEAPP from './firebaseapp';



 const db = getFirestore(FIREBASEAPP);
 export default db;
