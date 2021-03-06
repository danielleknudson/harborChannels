// Presence mock.
harborChannels.factory('Presence', ['$filter', '$http', 'Auth', function ($filter, $http, Auth) {
  var capitalize = $filter('uppercase');
  var channels = {};
  return {
    // Subscribe to the channel.
    subscribe: function(channelName){
      var channel = channels[channelName];
      if(!channel){
        channel = channels[channelName] = [];
      }
      channel.push(Auth.currentUser);
      return channel;
    },
    
    // Unsubscribe from the channel.
    unsubscribe: function(channelName){
      delete channels[channelName];
    },
    
    // Adds or removes a random user to all current channels, for testing.
    update: function(){
      $http({
        method: 'GET',
        url: 'https://randomuser.me/api'
      }).then(function(response){
        var randomUser = response.data.results[0].user;
        var user = {
          firstName: capitalize(randomUser.name.first),
          lastName: capitalize(randomUser.name.last),
          username: randomUser.username,
          imageUrl: randomUser.picture.medium
        };
        
        _.forEach(channels, function(channel, channelName){
          if(Math.random() < 0.5){
            channel.push(user);
          }
          else if(channel.length > 1){
            channel.pop();
          }
        });
      });
    }
  };
}]);