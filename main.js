objects = "";

function preload() {
    song = loadSound("luke_combs_fast_car.mp3");
    song.play();
    song.volume(1);
    song.rate(1);
}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status: Objects Detected";
}

function draw() {
    image(video, 0, 0, 800, 800);



       if(Status != "") {

        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected"; 

            fill("#0346ff");
            percent = floor(objects[i].confidence * 100);
            noFill();
            text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
            stroke("#0346ff");
            rect(objects[i].x,  objects[i].y,  objects[i].width, objects[i].height);

            if(results[i].label == "cat") {
                document.getElementById("status").innerHTML = "Status : Cat is shown";   
                song.volume(0);
                song.rate(0);
               }
               else{
                   document.getElementById("status").innerHTML = "Status : Cat is not shown";   
                   song.volume(1);
                   song.rate(1);
               }
        }
    }
}

function modelloaded() {
    console.log("Hi");
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }
    
}