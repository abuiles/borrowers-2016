import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      this.transitionToRoute('friends.show', model);
    },
    cancel(model) {
      this.transitionToRoute('friends.show', model);
    }
  }
});
