app.controller('Pctrl', ['$scope', '$timeout','ngProgress', function($scope, $timeout, ngProgress){
    $scope.name = 'Lars';
    $scope.show = false;

    $scope.color = ngProgress.color();
    $scope.height = ngProgress.height();

    ngProgress.color('#d95d50');
    ngProgress.start();
    console.log("ngProgress.start();");
    $timeout(function(){
        ngProgress.complete();
        $scope.show = true;
    }, 800);
    
}])






