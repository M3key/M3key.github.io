function check() {
var numerouno = document.Mpop.numerouno.value;
var numerodos = document.Mpop.numerodos.value;
var numerotres = document.Mpop.numerotres.value;
var correct = 0;

if (numerouno == "Patrick Ewing") {
    correct++;
}

if (numerodos == "Sharon") {
    correct++;
}

if (numerotres == "Footage") {
    correct++;
}

 var messages = ["Movie buff hall of fame", "not that much of movie goer aye?", "seriously bro do better"];
 var gifimages = ["img/win.gif", "img/soso.gif", "img/fail.gif"];

 var range;

 if (correct < 1) {
     range = 2;
 }

 if (correct > 0 && correct < 3) {
     range = 1;
 }

if (correct > 2) {
    range = 0;
}

document.getElementById("after_submit").style.visibility = " visible";


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = gifimages[range];
}