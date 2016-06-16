import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:loan']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('fullName joins first and last name', function(assert) {
  var model = this.subject({firstName: 'Syd', lastName: 'Barrett'});

  assert.equal(model.get('fullName'), 'Syd Barrett');

  Ember.run(function() {
    model.set('firstName', 'Geddy');
  });

  assert.equal(model.get('fullName'), 'Geddy Barrett', 'Updates fullName');
});

test('loans relationship', function(assert) {
  var klass  = this.subject({}).constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('loans');

  assert.equal(relationship.key, 'loans');
  assert.equal(relationship.kind, 'hasMany');
});
