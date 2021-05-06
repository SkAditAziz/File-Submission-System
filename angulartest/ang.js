var app = angular.module("angApp",[]);
var collectionDate1 = '2021-05-06T13:24:00'; 
var collectionDate2 = '2021-05-07T13:24:55';

app.controller('myCtrl', function($scope, $interval) {
    $scope.getDate1 = new Date(collectionDate1);
    $scope.getDate2 = new Date(collectionDate2);
    $scope.today = new Date();
    
    $scope.diff1 = ($scope.getDate1 - $scope.today)/1000;
    $scope.diff2 = ($scope.getDate2 - $scope.today)/1000;

    $scope.counter = Math.round($scope.diff2);   
    $interval(function(){
            $scope.counter--;
    },1000);

    var validFormats = ['txt','doc','png','pdf'];
    $scope.setFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.theFile = element.files[0];
            $scope.FileMessage = '';
            var filename = $scope.theFile.name;
            console.log(filename.length)
            var index = filename.lastIndexOf(".");
            var file_extension = filename.substring(index+1, filename.length);
            console.log(file_extension)
            if (validFormats.indexOf(file_extension.toLowerCase()) != -1)
            {
                console.log('File Uploaded sucessfully');
            }
            else {
                $scope.theFile = '';
                    var fmsg = "wrong";
                    $scope.FileMessage = 'Please upload a valid type of file!!';
            }

        });
    };
});

app.directive("selectNgFiles", function() {
    return {
      require: "ngModel",
      link: function postLink(scope,elem,attrs,ngModel) {
        elem.on("change", function(e) {
          var files = elem[0].files;
          ngModel.$setViewValue(files);
        })
      }
    }
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