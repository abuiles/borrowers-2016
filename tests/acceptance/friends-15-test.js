import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends', {
  beforeEach() {
    //
    // Mirage makes the variable server avaialble in our tests.
    //
    // We can use server.create('model-name') to create 1 entry in the
    // mock server or use createList to create many.
    //
    //
    server.createList('friend', '10');
  }
});

test('0.792900456901513 /friends', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');
    //
    // This will fail since we are creating 10 friends, fix it :)
    //
    assert.equal(
      find('table tbody tr').length,
      10,
      '10 friends'
    );
  });
});

test('0.5170611913498 /friends 2', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');
    //
    // This will fail since we are creating 10 friends, fix it :)
    //
    assert.equal(
      find('table tbody tr').length,
      10,
      '10 friends'
    );
  });
});
