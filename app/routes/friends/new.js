import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  activate() {
    console.log('----- activate hook called -----');
  },
  deactivate() {
    console.log('----- deactivate hook called -----');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      // We grab the model from the controller
      //
      var model = controller.get('model');

      // Because we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the backend.
      //
      if (model.get('isNew')) {

        // We call DS#destroyRecord() which removes it from the store
        //
        model.destroyRecord();
      }
    }
  }
});
