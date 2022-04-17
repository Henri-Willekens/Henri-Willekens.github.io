    var cImg;
    let happy = 0;
    let angry = 0;
    let neutral = 0;
    let amountOfPeople = 0;
    var model;
    var emotion_labels = ["angry", "disgust", "fear", "happy", "sad", "surprise", "neutral"];
    var emotion_colors = ["#ff0000", "#00a800", "#ff4fc1", "#ffe100", "#306eff", "#ff9d00", "#7c7c7c"];
    let scoreThreshold = 0.5;
    let minConfidence = 0.7;
    let sizeType = 'lg';
    var offset_x = 10;
    var offset_y = 30;
    loadModel('../models/mobilenetv1_models/model.json')

    function logThis(message) {
        // if we pass an Error object, message.stack will have all the details, otherwise give us a string
        if (typeof message === 'object') {
          message = message.stack || objToString(message);
        }
      
        console.log(message);
      
        // create the message line with current time
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var dateTime = date + ' ' + time + ' ';
      
        //insert line
        document.getElementById('logger').insertAdjacentHTML('afterbegin', dateTime + message);
      }

    // create model
    async function createModel(path) {
        let model_tmp = await tf.loadModel(path)
        return model_tmp
    }

    // load models
    async function loadModel(path) {
        var lbl = document.getElementById("status");
        lbl.innerText = "Model Loading ..."
        model = await createModel(path)

        lbl.innerText = "Model Loaded !"
    }
    // show seleted image
    function preview_image(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById('output_image');

            output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
        var c1 = document.getElementById('output_image')
        cImg = c1
    }
    // convert image to model input format
    function preprocess(imgData) {
        return tf.tidy(() => {
            let tensor = tf.fromPixels(imgData).toFloat();

            tensor = tensor.resizeBilinear([100, 100])

            tensor = tf.cast(tensor, 'float32')
            const offset = tf.scalar(255.0);
            // Normalize the image 
            const normalized = tensor.div(offset);
            //We add a dimension to get a batch shape 
            const batched = normalized.expandDims(0)
            return batched
        })
    }
    // use chrome face detector 
    async function detect() {
        if (window.FaceDetector == undefined) {
            console.error('Face Detection not supported');
            return;
        }
        var emo = document.getElementById("result_emotion");
        emo.innerHTML = " Waiting... "
        var faceDetector = new FaceDetector();

        var inputImgEl = document.getElementById("output_image")
        const {
            width,
            height
        } = inputImgEl
        //        console.log(width, height)
        let out_canvas = document.getElementById('overlay');
        out_canvas.width = width
        out_canvas.height = height
        let ctx = out_canvas.getContext("2d");
        let scale = 1;
        ctx.drawImage(inputImgEl,
            0, 0, inputImgEl.naturalWidth, inputImgEl.naturalHeight,
            0, 0, out_canvas.width, out_canvas.height);

        scale = out_canvas.width / inputImgEl.naturalWidth;

        console.time('detect');
        return faceDetector.detect(inputImgEl)
            .then(faces => {
                //                console.log(faces);
                // Draw the faces on the <canvas>.

                EmotionClassify(faces, scale)

                console.timeEnd('detect');
            })
            .catch((e) => {
                console.error("Boo, Face Detection failed: " + e);
            });
    }
    // recognize cropped images
    function EmotionClassify(faces, scale) {
        var emo = document.getElementById("result_emotion");
        if (faces.length != 0) {
            let out_canvas = document.getElementById('overlay');
            let ctx = out_canvas.getContext("2d");
            ctx.lineWidth = 2;
            ctx.font = "15px Arial"
            for (var i = 0; i < faces.length; i++) {
                var item = faces[i].boundingBox;
                ctx.beginPath();
                let s_x = Math.floor((item.x - offset_x / 2) * scale);
                let s_y = Math.floor((item.y - offset_y / 2) * scale);
                let s_w = Math.floor((item.width + offset_x) * scale);
                let s_h = Math.floor((item.height + offset_y) * scale);

                //                    let face = document.createElement('canvas');
                let cT = out_canvas.getContext("2d").getImageData(s_x, s_y, s_w, s_h);
                //                    cT.drawImage(inputImgEl, s_x, s_y, s_w, s_h, 0, 0, s_w, s_h)
                                //console.log(cT)
                cT = preprocess(cT);
                z = model.predict(cT)
                let index = z.argMax(1).dataSync()[0]
                let label = emotion_labels[index];
                    //console.log(label)
                let countex = console.count([label]);
                amountOfPeople++
                logThis(label + "\n");
                if (label == "happy") {
                    happy++
                }
                if (label == "angry") {
                    angry++
                }
                ctx.strokeStyle = emotion_colors[index];
                ctx.rect(s_x, s_y, s_w, s_h);
                ctx.stroke();
                ctx.fillStyle = emotion_colors[index];
                ctx.fillText(label, s_x, s_y);
                ctx.closePath();
            }
////
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	//exportEnabled: true,
	title:{
		text: "Range chart"
	},
	axisY: {
		title: "happy - angry",
	},
	axisX: {
		valueFormatString: "YYYY/MM/DD HH:mm:ss"
	},
	data: [
	{
		type: "rangeArea",
		xValueFormatString: "YYYY/MM/DD HH:mm:ss", 
		toolTipContent: " <span style=\"color:#4F81BC\">{x}</span><br><b>Happy</b> {y[0]}<br><b> Angry</b> {y[1]}",
		dataPoints: [
            { x: new Date(2022,03,9), y:[33, 12]},
            { x: new Date(2022,03,10), y:[48, 14]},
            { x: new Date(2022,03,11), y:[34, 10]},
            { x: new Date(2022,03,12), y:[36, 13]},
            { x: new Date(2022,03,13), y:[42, 25]},
            { x: new Date(2022,03,14), y:[58, 26]},
            { x: new Date(2022,03,15), y:[30, 14]},
			{ x: new Date(), y:[happy, angry]}
		]
	}]
});
chart.render();
///
            emo.innerHTML = i + " mensen gedecteerd in dit plaatje"
            logThis('New image! In totaal zijn '+ happy + " mensen blij van de " + amountOfPeople + "\n")
        } else {
            console.log('NO FACE')
            emo.innerHTML = "Result :  NO FACE !!!"
        }

    }
    async function runModel() {
        document.getElementById("output_image").style.display='none';
        console.log(cImg)
        if (cImg) {
            let cT = preprocess(cImg)
            await detect()
        } else {
            alert('Please select an image file')
        }
    }
    function copyFunction() {
      const copyText = document.getElementById("myInput").textContent;
      const textArea = document.createElement('textarea');
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
    }
    
    document.getElementById('button').addEventListener('click', copyFunction);

