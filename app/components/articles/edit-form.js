import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed.notEmpty('model.name'),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          return this.save(friend);
        }, () => {
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      //
      // We are calling the cancel action passed down when rendering the
      // component: action=(action "cancel")
      //
      this.cancel(this.get('model'));
    }
  }
});
