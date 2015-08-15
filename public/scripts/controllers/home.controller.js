harborChannels.controller('HomeController', ['$scope', '$location', function ($scope, $location) {
  $scope.scope = {};
  $scope.scope.activities = [
    'hiking',
    'parasailing',
    'sailing',
    'scubadiving',
    'hangliding',
    'kite surfing',
    'surfing',
    'snorkeling',
    'kayaking',
    'whale watching',
  ];
  $scope.scope.goToChannel = function (channel) {
    $location.url('/channel/' + channel);
  };
}]);