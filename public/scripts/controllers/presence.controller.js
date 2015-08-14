harborChannels.controller('PresenceController', [
  '$scope',
  'presence',
  function($scope, presence){
    $scope.channel = presence.subscribe('channel-1');
    $scope.randomize = function(){
      presence.update();
    }
  }
]);