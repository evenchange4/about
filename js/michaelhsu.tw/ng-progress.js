app.controller('Pctrl', ['$scope', '$timeout','ngProgress', function($scope, $timeout, ngProgress){
    $scope.name = 'Lars';
    $scope.show = false;

    $scope.color = ngProgress.color();
    $scope.height = ngProgress.height();

    ngProgress.start();
    console.log("ngProgress.start();");
    $timeout(function(){
        ngProgress.complete();
        $scope.show = true;
    }, 1000);

    $scope.setWidth = function(new_width, $event) {
        ngProgress.set(new_width);
        $event.preventDefault();
    }

    $scope.startProgress = function($event) {
        $event.preventDefault();
        ngProgress.start();
    }

    $scope.count = function($event) {
        $event.preventDefault();
        ngProgress.set(ngProgress.status() + 9);
    }

    $scope.new_color = function(color, $event) {
        $event.preventDefault();
        ngProgress.color(color);
    }

    $scope.new_height = function(new_height, $event) {
        $event.preventDefault();
        ngProgress.height(new_height);
    }

    $scope.completeProgress = function($event) {
        $event.preventDefault();
        ngProgress.complete();
    }

    $scope.stopProgress = function($event) {
        $event.preventDefault();
        ngProgress.stop();
    }

    $scope.resetProgress = function($event) {
        ngProgress.reset();
        $event.preventDefault();
    }
}])






