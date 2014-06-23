 app.config(['$translateProvider', function ($translateProvider) {
  // configures staticFilesLoader
  $translateProvider.useStaticFilesLoader({
    prefix: 'config/locales/locale-',
    suffix: '.json'
  });
  // load 'en' table on startup
  $translateProvider.preferredLanguage('en');
}]);

app.controller('controller', ['$translate', '$scope', function($translate, $scope){
  $scope.lang = 'en';

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
    $scope.lang = langKey;
  };

  $scope.isLand = function (lang) {
    if ($scope.lang == lang)
      return true;
    else 
      return false;
  }
}])  