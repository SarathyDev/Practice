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
	app.directive("myDirective", function() { return { template: "<div>These are the names in the list = </div>" };});
    app.controller("tableAngSort", function($scope) { 
        $scope.database = [
            {name:'Sarathy', rollNumber:9},
            {name:'Arthi', rollNumber:6},
            {name:'Gautham', rollNumber:17},
            {name:'Edwin', rollNumber:16}
        ]
        $scope.orderByMethod = function (constraint) {$scope.selectedOrder=constraint;};
    });
    app.filter('customFormat', function() {
        return function(x) {
            var counter, characs, mytxt = "";
            for (counter=0; counter<x.length; counter++) {
                characs = x[counter];
                if(counter % 3 == 0) {
                    characs = characs.toUpperCase();
                }
                mytxt += characs;
            }
            return mytxt;
        };
    });
    app.controller('nameController', function($scope) {
        $scope.nameList = ['Sarathy', 'Gautham', 'Arthi', 'Edwin']; 
    });
    app.controller('headingTimeController', function($scope, $timeout) {
        $scope.displayText = "HTML practice page";
        $timeout(function() {$scope.displayText = "Welcome to my practice page"}, 2000);
    });