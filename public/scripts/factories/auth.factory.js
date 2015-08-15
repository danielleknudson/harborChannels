// Auth mock.
harborChannels.factory('Auth', [function(){
  return {
    currentUser: {
      firstName: 'ME',
      lastName: 'JEAN',
      username: 'kellyjean',
      imageUrl: "http://api.randomuser.me/portraits/med/women/39.jpg"
    }
  };
}]);