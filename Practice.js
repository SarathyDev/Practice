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
            var indexVariable, characs, mytxt = "";
            for (indexVariable = 0; indexVariable < x.length; indexVariable++) {
                characs = x[indexVariable];
                if(indexVariable % 3 == 0) {
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
    