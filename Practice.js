document.getElementsByClassName("date")[0].innerHTML = new Date().toDateString();
document.getElementsByClassName("zoomDate")[0].innerHTML = new Date().toDateString();
function changeText() {
    document.getElementById("Comments").innerHTML = "";
}