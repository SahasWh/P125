leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.position(450, 180);

    canvas = createCanvas(500, 500);
    canvas.position(1000, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
}}

function draw() {
    background("white");

    textSize(difference);
    fill("#00ff0a");
    text('Sahas',50,250);

    document.getElementById("Font_size").innerHTML = "Font Size Of The Text Will Be = " + difference + "px";
}