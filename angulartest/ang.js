var app = angular.module("angApp",[]);
app.controller("datecontroller", function($scope){
    var collectionDate1 = '2021-05-04T09:00:00'; 
    $scope.getDate1 = new Date(collectionDate1);

    var collectionDate2 = '2021-05-04T10:00:00'; 
    $scope.getDate2 = new Date(collectionDate2);
})