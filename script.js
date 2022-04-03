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
    i = 0
    gezicht = detection[i].expressions;
    i++
    console.log(gezicht);
    
    anger = 1
    disgust = 2
    fear = 3
    enjoy = 4
    neut = 5
    sadge = 6
    surp = 7
    var chart = new CanvasJS.Chart("chartContainer",
              {
          
              data: [
              {
               type: "scatter",
               dataPoints: [
          
               { x: anger, y: gezicht.angry },
               { x: disgust, y: gezicht.disgusted },
               { x: fear, y: gezicht.fearful },
               { x: enjoy, y: gezicht.happy },
               { x: neut, y: gezicht.neutral },
               { x: sadge, y: gezicht.sad},
               { x: surp, y: gezicht.surprised }
            ]
        }
        ]
      });
     
     chart.render();
     };