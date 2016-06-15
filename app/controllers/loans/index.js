import Ember from 'ember';

export default Ember.Controller.extend({
  save(loan) {
    return loan.save();
  },
  contentDidChange: Ember.observer('model.[]', function() {
    console.log('Called when we add or removed a loan.');
  }),
  stateDidChange: Ember.observer('model.@each.returned', function() {
    console.log('Called when the state property change for any of the loans.');
  })
});
