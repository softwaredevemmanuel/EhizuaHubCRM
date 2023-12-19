import React, { useRef, useState } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePicture = () => {
    if (videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Set canvas dimensions to match video dimensions
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      // Draw the current frame from the video onto the canvas
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      // Capture the image as a data URL
      const capturedDataURL = canvas.toDataURL('image/png');
      setCapturedImage(capturedDataURL);
    }
  };

  return (
    <div>
      <button onClick={openCamera}>Open Camera</button>
      <button onClick={takePicture}>Take Picture</button>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
      <video ref={videoRef} autoPlay playsInline muted style={{ display: 'block', marginTop: '10px' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default CameraCapture;
