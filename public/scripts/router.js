harborChannels.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: '../views/home.html',
    })
    .when('/channel/:channel', {
      controller: 'ChannelController',
      templateUrl: '../views/channel.html',
    })
    .otherwise ({redirectTo: '/'});
});
