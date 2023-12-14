noseX = 0;
noseY = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nariz x " + results[0].pose.nose.x + " nariz y " + results[0].pose.nose.y)
    }
}

function modelLoaded() {
    window.alert("Modelo carregado!")
    console.log("Modelo carregado!")
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function take_selfie() {
    save("Foto.png");
}