harborChannels.controller('ChannelController', [
  '$scope',
  '$location',
  'Presence',
  function ($scope, $location, Presence) {
    console.log(Presence);
    $scope.scope = {};
    $scope.scope.goHome = function () {
      Presence.unsubscribe();
      $location.url('/');
    };

    var init = function () {
      $scope.scope.groupCapacity = Math.floor(Math.random() * 100);
      $scope.scope.spotsBooked = Math.floor(Math.random() * $scope.scope.groupCapacity);
      $scope.scope.spotsAvailable = $scope.scope.groupCapacity - $scope.scope.spotsBooked;
      console.log('presence factory', Presence);
    };

    init();
  }]);