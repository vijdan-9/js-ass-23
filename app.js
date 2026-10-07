function showQuestion() {
    document.getElementById("questionBox").
    style.display = "block";
}
// Q2
function changePicture() {
    document.getElementById("myPicture").style.borderRadius = "50px";
    document.getElementById("myPicture").style.border = "5px lightblue solid";
    document.getElementById("myPicture").style.width = "300px";
}

function normalPicture() {
    document.getElementById("myPicture").style.borderRadius = "0px";
    document.getElementById("myPicture").style.border = "none";
    document.getElementById("myPicture").style.width = "300px";
}

