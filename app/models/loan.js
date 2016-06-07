import DS from 'ember-data';

export default DS.Model.extend({
  notes: DS.attr('string', {defaultValue: ''}),
  returned: DS.attr('boolean'),
  friend: DS.belongsTo('friend'),
  article: DS.belongsTo('article'),
  createdAt: DS.attr('date')
});
