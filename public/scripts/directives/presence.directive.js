harborChannels.directive('ngPresence', function () {
  return {
    restrict: 'E', // invoked with <ng-presence></ng-presence>
    require: '^ngModel',
    template: '<h1>{{ scope.channel }}</h1> \
            <div class="agents"> \
              <span>Agents in this channel</span> \
              <ul> \
                <li class="agent" ng-repeat="agent in scope.agents | limitTo:10"> \
                  <img ng-src="{{agent.imageUrl}}" /> \
                  <p>{{ agent.firstName }}</p> \
                </li> \
              </ul> \
            </div>',
    scope: {
          ngModel: '='
    },
    controller: ['$scope', '$interval', '$location', 'Presence', function ($scope, $interval, $location, Presence) {
      var url = $location.path();
      $scope.scope = {};
      $scope.scope.channel = url.slice(9, url.length);
      $scope.scope.agents = Presence.subscribe($scope.scope.channel);
      $interval(function () {
        Presence.update();
      }, 2000);
    }],
  };
});