document.getElementById("date").innerHTML = new Date().toDateString();
function changeText() {
    document.getElementById("Comments").innerHTML = "";
}
function capitalize() {
    var name = document.getElementsByClassName("inputName");
    name[0].value = name[0].value.toUpperCase();
    name[1].value = name[1].value.toUpperCase();
}
	var app = angular.module("angularApp", []);
	app.directive("myDirective", function() { return { template: "<p>These are the items in the list!</p>" };});
	app.controller("myControl", function($scope) { $scope.myName = names[0]; });