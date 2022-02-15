// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);


// When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
}

let image = document.querySelector(".image");
let item = document.getElementById("item");
let confidence = document.getElementById("confidence");
let gallery = document.getElementById("gallery");

async function getResults() {
    let results = await classifier.classify(image);
    gallery.style.display = "block";
    item.innerText = "Item - " + results[0].label;
    confidence.innerText =  "Confidence Level - " + results[0].confidence.toFixed(2) * 100 + "%";
    btn.addEventListener("click", () =>{
        console.log('Dit is de niwee'+ results[0].label)
        console
        speak(results[0].label)
    })
    
}

function imageUpload(files) {
    image.src = URL.createObjectURL(files[0]);
    setTimeout(getResults, 50);
}

let synth = window.speechSynthesis

function speak(text) {
    console.log("test")
    if (synth.speaking) {
        console.log('still speaking...')
        return
    }
    if (text !== '') {
        let utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)
    }
}