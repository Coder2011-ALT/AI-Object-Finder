let status1;
let object_name;

function setup() {
  canvas = createCanvas(450, 420);
  canvas.position(500, 300);

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, width / 2, height);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(video, 0, 0, width, height);
}

function start() {
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting Objects";
  object_name = document.getElementById("object_name").value;
}

function modelLoaded() {
  console.log("Model Loaded!");
  status1 = true;
}
