document.getElementById("date").innerHTML = new Date().toDateString();
function changeText() {
    document.getElementById("Comments").innerHTML = "";
}
function capitalize() {
    var name = document.getElementsByClassName("input_name");
    name[0].value = name[0].value.toUpperCase();
    name[1].value = name[1].value.toUpperCase();
}