var app = angular.module("angApp",[]);

app.controller("datecontroller", function($scope){
    var collectionDate1 = '2021-05-04T09:00:00'; 
    $scope.getDate1 = new Date(collectionDate1);

    var collectionDate2 = '2021-05-04T10:00:00'; 
    $scope.getDate2 = new Date(collectionDate2);
})

app.controller('TimeCtrl', function($scope, $interval) {
    var tick = function() {
      $scope.clock = Date;
    }
    tick();
    $interval(tick, 1000);
});

app.controller('myCtrl', function($scope, $interval) {  
     $scope.counter = 3600;   
     $interval(function(){console.log($scope.counter--)},1000);
});
app.filter('counter', [function() {
    return function(seconds) {
        return new Date(0, 0, 0).setSeconds(seconds);
    };
}])