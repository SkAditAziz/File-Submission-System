var app = angular.module("angApp",[]);
var collectionDate1 = '2021-05-05T12:45:00'; 
var collectionDate2 = '2021-05-05T12:59:00'; 

app.controller('myCtrl', function($scope, $interval) {
    $scope.getDate1 = new Date(collectionDate1);
    $scope.getDate2 = new Date(collectionDate2);
    $scope.today = new Date();
    
    $scope.diff1 = ($scope.getDate1 - $scope.today)/1000;
    console.log($scope.diff1);
    $scope.diff2 = ($scope.getDate2 - $scope.today)/1000;
    console.log($scope.diff2);

    //$scope.diffinsec = getDate1
    $scope.counter = Math.round($scope.diff2);   
    $interval(function(){$scope.counter--},1000);
});

app.filter('counter', [function() {
    return function(seconds) {
        return new Date(0,0,0).setSeconds(seconds);
    };
}])

app.filter('inMilliseconds', function() {
    return function(x) {
              
        return new Date(x).getTime();
    };
});