import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),
  actions: {
    save() {
      console.log('+- save action in edit-form component');
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          //
          // This function gets called if the HTTP request succeeds
          //
          //
          // We are calling the save action passed down when rendering
          // the component: action=(action "save")
          //
          return this.save(friend);
        }, () => {
          //
          // This gets called if the HTTP request fails.
          //
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      console.log('+- cancel action in edit-form component');

      //
      // We are calling the cancel action passed down when rendering the
      // component: action=(action "cancel")
      //
      this.cancel();
    }
  }
});
