app.controller('Pctrl', ['$timeout','ngProgress', function($timeout, ngProgress){
	ngProgress.start();
	$timeout(ngProgress.complete(), 3000);
}])