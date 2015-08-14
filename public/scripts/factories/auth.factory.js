// Auth mock.
harborChannels.factory('Auth', [function(){
  return {
    currentUser: {
      name: 'Kelly User',
      username: 'kelly',
      imageUrl: "http://api.randomuser.me/portraits/med/women/39.jpg"
    }
  };
}]);