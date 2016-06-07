import Ember from 'ember';

export default Ember.Controller.extend({
  backToIndex(friend) {
    this.transitionToRoute('loans.index', friend);
  }
});
