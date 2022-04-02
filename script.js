//expression image
async function uploadImage() {
    const imgFile = document.getElementById('myFileUpload').files[0]
    // create an HTMLImageElement from a Blob
    const img = await faceapi.bufferToImage(imgFile)
    document.getElementById('myImg').src = img.src
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    
    const image = document.querySelector('img');
    const canvas = faceapi.createCanvasFromMedia(image);
    const detection = await faceapi.detectAllFaces(image)
                                    .withFaceLandmarks()
                                    .withFaceExpressions();

    const dimensions = {
        width: image.width,
        height: image.height
    };

    const resizedDimensions = faceapi.resizeResults(detection, dimensions);

    document.body.append(canvas);

    faceapi.draw.drawDetections(canvas, resizedDimensions);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDimensions);
    faceapi.draw.drawFaceExpressions(canvas, resizedDimensions);
    console.log(detection)
};




//face detection video
// window.onload = () => {
//     detect();
//   };
  
//   async function detect() {
//     const canvas = document.querySelector("canvas");
//     const context = canvas.getContext("2d");
//     const faceDetector = new FaceDetector({ fastMode: true });
//     const mediaStream = await navigator.mediaDevices.getUserMedia({
//       video: { facingMode: "environment" }
//     });
  
//     const video = document.createElement("video");
//     video.srcObject = mediaStream;
//     video.autoplay = true;
//     video.onloadedmetadata = () => {
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//     };
  
//     function render() {
//         faceDetector
//         .detect(video)
//         .then((faces) => {
//           context.clearRect(0, 0, canvas.width, canvas.height);
//           context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
//           context.strokeStyle = "#FFFF00";
//           context.lineWidth = 5;
          
//            faces.forEach((face) => {
//              const { top, left, width, height } = face.boundingBox;
//              context.beginPath();
//              context.rect(left, top, width, height);
//              context.stroke();
//            });
//         })
//         .catch(console.error);
//     }
  
//     (function renderLoop() {
//       requestAnimationFrame(renderLoop);
//       render();
//     })();
//   }
