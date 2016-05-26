import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function() {
    this.route('new');

    this.route('show', {
      path: ':friend_id'
    }, function() {
      this.route('loans', {resetNamespace: true}, function() {
      });
    });

    this.route('edit', {
      path: ':friend_id/edit'
    });
  });
  this.route('articles', function() {
    this.route('new');

    this.route('show', {
      path: ':article_id'
    });

    this.route('edit', {
      path: ':article_id/edit'
    });
  });
});

export default Router;
