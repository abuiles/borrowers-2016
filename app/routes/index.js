import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model()  {
    return request('/friends').then(function(data){
      return {
        friendsCount: data.data.length
      };
    });
  }
});
