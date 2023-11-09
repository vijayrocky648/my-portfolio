import { getStorage, ref, getDownloadURL } from "firebase/storage";

var PORTFOLIO_STORAGE = async (storage,url)=>{
   return await getDownloadURL(ref(storage, url))
}
export default PORTFOLIO_STORAGE;