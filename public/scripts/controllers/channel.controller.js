harborChannels.controller('ChannelController', [
  '$scope',
  '$location',
  '$interval',
  'Presence',
  'Auth',
  function ($scope, $location, $interval, Presence, Auth) {
    $scope.scope = {};
    $scope.scope.thisUser = Auth.currentUser;
    $scope.scope.agents = null;
    var init = function () {
      var url = $location.path();
      $scope.scope.channel = url.slice(9, url.length);
      $scope.scope.agents = Presence.subscribe($scope.scope.channel);
    };

    init();

    $interval(function () {
      Presence.update();
      console.log($scope.scope.agents);
    }, 2000);
  }]);