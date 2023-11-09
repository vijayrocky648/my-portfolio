import { React, useState, useEffect } from 'react';
import SCANDOCS from '../../img/scandocs.jpg'
import MONEYPULSE from '../../img/moneypulse.jpg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { collection, getDocs } from 'firebase/firestore'

import './index.css'
import db from '../../firebase/firebaseconfig';
import storage from '../../firebase/firebase_storage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function PROJECT() {
    const firebaseData = collection(db, "Project")
    const [project, setProject] = useState([])
    const [modelInfo, setModelInfo] = useState([])
    useEffect(() => {
        const document =getDocs(firebaseData).then((document)=>{
            const data = document.docs.length > 0 && document.docs[0].data()
            setProject(data.Project)
        })
        
    }, [])
    return (

        <>
            <div className="row justify-content-center" id='project'>
                <h1 className="col-md-12 webHeader">&#11088;Project&#11088;</h1>
                <div className="col-md-3 " onClick={() => {
                    let projectInfos = project?.filter(x => x.id == 1)[0];

                    setModelInfo({ id: 1, isOpen: true, projectInfo: projectInfos })
                }
                }>
                    <div class="card">
                        <div className='projectImage'>

                            {/* <div className='projectInfo'>
                        <a href='#'>
                          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M23.948.042c-.413-.028-.817-.042-1.214-.042-8.6 0-13.497 6.557-15.278 11.833l4.727 4.727c5.428-1.944 11.817-6.66 11.817-15.168 0-.44-.017-.89-.052-1.35zm-11.277 14.178l-2.883-2.883c1.221-2.859 4.691-8.945 12.199-9.32-.251 5.775-4.041 9.932-9.316 12.203zm5.471 1.538c-.547.373-1.09.71-1.628 1.011-.187.891-.662 1.842-1.351 2.652-.002-.576-.162-1.156-.443-1.738-.495.225-.966.418-1.414.588.66 1.709-.012 2.971-.915 4.154 1.296-.098 2.656-.732 3.728-1.805 1.155-1.155 1.967-2.823 2.023-4.862zm-11.82-6.469c-.579-.28-1.158-.438-1.732-.441.803-.681 1.744-1.153 2.626-1.345.314-.552.667-1.097 1.039-1.633-2.039.055-3.708.867-4.864 2.023-1.071 1.071-1.706 2.433-1.804 3.728 1.184-.904 2.446-1.576 4.155-.914.173-.471.366-.944.58-1.418zm7.738.663c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c.391.392.391 1.024 0 1.415s-1.024.39-1.414-.001zm4.949-4.951c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.049 0 2.829.781.781 2.048.781 2.829 0 .78-.78.78-2.047-.001-2.829zm-1.908 1.911c-.273-.273-.273-.718 0-.99.271-.273.717-.273.99 0 .272.272.271.717 0 .99-.274.272-.718.272-.99 0zm-6.747 10.65c-1.492 3.81-5.803 6.208-10.354 6.438.219-4.289 2.657-8.676 6.64-10.153l.805.806c-4.331 2.755-4.653 5.346-4.665 6.575 1.268-.015 4.054-.344 6.778-4.464l.796.798z"/></svg>
                        </a>
                        
                    </div> */}
                            <img src={SCANDOCS} class="card-img-top" alt="..." />
                        </div>
                        <h5 class="card-title">Scandocs</h5>
                        {/* <div class="card-body">
                    
                    <p class="card-text">Scandocs, the most powerful document scanning and Pdf Creator app, is now available for Andriod. Precisely scan paper documents, business cards, receipts, and more using the camera on your Android Phone Share your documents as either images or PDFs</p>

                </div>
                <div class="card-footer customfooter">
                    <p class="card-text">Tech: Android Studio,Java</p>
                </div> */}
                    </div>
                </div>
                <div className="col-md-3 offset-lg-1" onClick={() => {
                    let projectInfos = project?.filter(x => x.id == 2)[0];

                    setModelInfo({ id: 2, isOpen: true, projectInfo: projectInfos })
                }
                }>
                    <div class="card ">
                        <div className='projectImage'>
                            <div className='projectInfo'>

                            </div>
                            <img src={MONEYPULSE} class="card-img-top" alt="..." />
                        </div>
                        <h5 class="card-title">Money Pulse</h5>

                    </div>
                </div>

            </div>
            <Popup open={modelInfo.isOpen} position="right center" modal nested onClose={() => { setModelInfo({ id: modelInfo.id, isOpen: false, projectInfo: [] }) }}>
                {



                    <>
                        <div className='w-100 custompopup' >
                            <img src={modelInfo.id==1?SCANDOCS:MONEYPULSE} class="img-fluid w-100" id='unage=='></img>
                        </div>
                        <div className='w-100 p-2 custompopup'>
                            <h2 >{modelInfo.projectInfo?.Description}</h2>
                            <h5 style={{ color: "gray" }}>{modelInfo.projectInfo?.Name}</h5>
                            <p>{modelInfo.projectInfo?.SubName}</p>
                        </div>
                        <div className='d-flex custompopup p-1' style={{ justifyContent: "space-between" }}>
                            <button style={{ backgroundColor: "#E60965", border: "none", outline: "none", color: "white" }}>View App</button>
                            <button
                                className="closebutton"
                                onClick={() => {
                                    console.log('modal closed ');
                                    setModelInfo({ id: modelInfo.id, isOpen: false, projectInfo: [] })
                                }}
                            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg></button>
                        </div>
                    </>



                }

            </Popup>
        </>
    );
}

export default PROJECT;