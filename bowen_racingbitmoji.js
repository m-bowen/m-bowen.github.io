///variables
var bodyX = -60;
var bodyY = 300;

var bunnyX = -70;
var bunnyY = 0;

var frogX = 0;
var frogY = 200;

var bunnySpeed;
var frogSpeed;
var bitmojiSpeed;


///Running Speed Set
bunnySpeed = random(1-5);
frogSpeed = random(1-5);
bitmojiSpeed = random(1-5);


///Race
draw = function() {
    background(255,255,255);
    bunnyX = bunnyX - bunnySpeed;
    frogX = frogX - frogSpeed;
    bodyX = bodyX - bitmojiSpeed;
    
    ///bunny

fill(255,255,255);
stroke(0,0,0);
var eyeS = 20;
var teeth = 15;
ellipse(bunnyX + 50, bunnyY - 30, 60, 120);  // left ear
ellipse(bunnyX + 140, bunnyY - 30, 60, 120);  // right ear

fill(255,255,255);
stroke(0,0,0);
ellipse(bunnyX + 100, bunnyY + 70, 150, 150);    // face

fill(0, 0, 0);
ellipse(bunnyX + 70, bunnyY + 50, eyeS, eyeS);  // left eye
ellipse(bunnyX + 130, bunnyY + 50, eyeS, eyeS);  // right eye

line(bunnyX + 50, bunnyY + 100, bunnyX + 150, bunnyY + 100);   // mouth

noFill();
rect(bunnyX + 85, bunnyY + 100, 15, teeth); // left tooth
rect(bunnyX + 105, bunnyY + 100, 15, teeth); // right tooth

///my bitmoji 

///head main
noStroke();
fill(236, 188, 180);
ellipse(bodyX + 99, bodyY + 46, 108,138);

///nose
stroke(0, 0, 0); 
curve(bodyX + 312, bodyY - 119, bodyX + 95, bodyY + 47, bodyX + 103, bodyY + 48, bodyX - 81, bodyY + 25);

noStroke();
fill(255, 255, 255);
arc(bodyX + 155, bodyY + 102, 43, 60, -201, -79);
arc(bodyX + 41, bodyY + 94, 43, 60, -201, 51);

///hair
fill(92, 54, 34);
arc(bodyX + 58, bodyY+ 41, 42, 60, -239, -81);
arc(bodyX + 141, bodyY + 41, 42, 60, -443, -301);
rect(bodyX + 60, bodyY - 8, 83, 25);

///eyes
fill(184, 141, 55);
ellipse(bodyX + 80, bodyY + 39, 11, 9);

fill(184, 141, 55);
ellipse(bodyX + 116, bodyY + 39, 11, 9);

fill(0, 0, 0);
ellipse(bodyX + 80, bodyY + 39, 2,2);
ellipse(bodyX +116, bodyY + 39, 2,2);

///smile
fill(255,255,255);
arc(bodyX + 98, bodyY + 71, 47, 20, 1, 180);

///bottom of hat
fill(0, 43, 255);
rect(bodyX + 51, bodyY - 7, 93, 19); 

///middle of hat
fill(192,192,192);
rect(bodyX + 51, bodyY- 25,93,19);

///patriots text
fill(255, 0, 0);
textSize(15);
text("PATRIOTS", bodyX + 62, bodyY - 10); 

///top of hat
arc(bodyX + 98, bodyY - 24, 92, 67, -180, 0);

///pom pom
arc(bodyX + 98, bodyY - 57, 49, 53, -201, 20);

///eyebrows
fill(181,101,29);
rect(bodyX + 71, bodyY + 25, 15, 4);
rect(bodyX + 108, bodyY + 25, 15, 4);

///jacket body
fill(0, 0, 128);
rect(bodyX + 41, bodyY + 112, 117, 110);

///jacket collar
fill(255,211,0);
arc(bodyX + 89, bodyY + 111, 67, 20, 83, 230);
arc(bodyX + 118, bodyY + 112, 67, 20, -70, 109);

///initials
textSize(45); 
text("MB", bodyX + 66, bodyY + 167);

var x = 200;
var y = 250;

///frog

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball

fill(0, 0, 0);
ellipse(frogX, frogY, 108, 50);

rect(frogX - 55, frogY - 50, 10, 10);
rect(frogX + 45, frogY - 52, 10, 10);
    
};
