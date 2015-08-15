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
    $scope.scope.goHome = function () {
      Presence.unsubscribe();
      $location.url('/');
    };

    var init = function () {
      var url = $location.path();
      $scope.scope.channel = url.slice(9, url.length);
      $scope.scope.agents = Presence.subscribe($scope.scope.channel);
      $scope.scope.groupCapacity = Math.floor(Math.random() * 100);
      $scope.scope.spotsBooked = Math.floor(Math.random() * $scope.scope.groupCapacity);
      $scope.scope.spotsAvailable = $scope.scope.groupCapacity - $scope.scope.spotsBooked;
    };

    init();

    $interval(function () {
      Presence.update();
    }, 2000);
  }]);