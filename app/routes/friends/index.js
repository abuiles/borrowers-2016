import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //
    // We use now store.query and pass include in the options
    //
    return this.store.query('friend', { include: 'loans,loans.article' });
  }
});
