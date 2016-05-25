import Ember from 'ember';

export default Ember.Controller.extend({
  save(model) {
    console.log('save action called in articles new');
    this.transitionToRoute('articles.show', model);
  },
  cancel() {
    console.log('cancel action called in articles new');
    this.transitionToRoute('articles.index');
  }
});
