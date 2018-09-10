import DS from 'ember-data';

export default DS.Model.extend({
    intro: DS.attr(),
    total_days: DS.attr('number'),
    used_days: DS.attr('number'),
    repInfo: DS.belongsTo('representative', { async: false }),
});