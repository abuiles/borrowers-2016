import Ember from 'ember';

export default Ember.Component.extend({
  //
  // By default the store is not injected into components, so we use
  // the "inject.service" helper to make it avaible.
  //
  store: Ember.inject.service(),
  articles: Ember.computed({
    get() {
      //
      // Since we are using Ember.inject.service, we need to call the
      // store using the get helper
      //
      return this.get('store').findAll('article');
    }
  }).readOnly()
});
