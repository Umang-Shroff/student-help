import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Notes.css'
import { QRCode } from 'react-qrcode-logo';
import toast, { Toaster } from 'react-hot-toast';

const Notes = () => {
  const textRef = useRef(null);
  const handleCopy = () => {
    if(textRef.current){
      navigator.clipboard.writeText(textRef.current.innerText)
      .then(()=>{
        toast.success('Copied to clipboard');
      })
      .catch((err)=>{
        alert("Failed to copy : ",err);
      })
    }

  }

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const department = searchParams.get('department');
  const semester = searchParams.get('semester');
  const dept = department.toUpperCase();
  return (
  <div className="wrapper-div">
    <div className="background-shape shape1"></div>
    <div className="background-shape shape2"></div>
    <div className="background-shape shape3"></div>

    <div className="info">
      <div className="info-para">
        <p>Department: {dept}</p>
        <p>Semester: {semester}</p>
      </div>
      <div className="drive-link-container">
        <div ref={textRef} className="drive-link">(Google Drive Link)</div>
        <button className="cpy-btn" onClick={handleCopy}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
        </button>
        <Toaster 
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style:{
            border: '2px solid rgb(147 51 234)',
            padding: '16px',
            color: 'rgb(147 51 234)',
            marginBottom:'50px',
            fontWeight:'bold'
          },
          iconTheme: {
            primary: 'rgb(147, 51, 234)',
            secondary: '#FFFAEE',
          }
        }}/>
      </div>
      <QRCode
            value="Google Drive Link"
            quietZone={30}
            bgColor="transparent"
            fgColor="rgb(147 51 234)"
            qrStyle="dots"
            eyeRadius={[10, 10, 10, 10]}
            size={200}
        />
      
    </div>
  </div>
  );
};

export default Notes;
