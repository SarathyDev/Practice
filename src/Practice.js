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
app.directive("myDirective", function () { return { template: "<div>These are the names in the list = </div>" }; });
app.controller("degreeController", function ($scope) {
    $scope.degreeList = ['BE', 'B.Tech', 'BSc', 'MS', 'MSc']
});
app.controller("tableAngSort", function ($scope) {
    $scope.database = {
        Sarathy: { name: 'Sarathy', rollNumber: 9, city: 'Union City' },
        Arthi: { name: 'Arthi', rollNumber: 6, city: 'Coimbatore' },
        Gautham: { name: 'Gautham', rollNumber: 17, city: 'Union City' },
        Edwin: { name: 'Edwin', rollNumber: 16, city: 'Thrissur' },
        Sarangapani: { name: 'Sarangapani', rollNumber: 46, city: 'Chennai' }
    }
    $scope.reverseOrder = false;
    $scope.orderByMethod = function (constraint) {
        $scope.selectedOrder = constraint;
        ($scope.reverseOrder) ? ($scope.reverseOrder = false) : ($scope.reverseOrder = true);
    };
});
app.filter('customFormat', function () {
    return function (x) {
        var counter, characs, mytxt = "";
        for (counter = 0; counter < x.length; counter++) {
            characs = x[counter];
            if (counter % 3 == 0) {
                characs = characs.toUpperCase();
            }
            mytxt += characs;
        }
        return mytxt;
    };
});
app.controller('nameController', function ($scope) {
    $scope.nameList = ['Sarathy', 'Gautham', 'Arthi', 'Edwin'];
});
app.controller('headingTimeController', function ($scope, $timeout) {
    $scope.displayText = "HTML practice page";
    $timeout(function () { $scope.displayText = "Welcome to my practice page" }, 2000);
});
app.controller('siteController', function ($scope, $http) {
    $http.get("file:///Users/Sarathy/Documents/HTML/Practice.html")
        .then(function (response) {
            $scope.statuscode = response.status;
        });
});
app.controller('timerController', function ($scope, $interval) {
    $scope.timer = 0;
    $interval(function () { $scope.timer += 1; }, 1000);
});
