import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  loan: null, // passed-in
  init() {
    this._super(...arguments);
    this.addObserver('loan.returned', this, this.stateChanged);
  },
  stateChanged() {
    console.log('OMG Expensive operation because loan state changed');
  }
});
