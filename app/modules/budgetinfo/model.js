import DS from 'ember-data';

export default DS.Model.extend({
    used_days: DS.attr('number'),
    name: DS.attr('string'),
    image: DS.attr('string'),
    total_days: DS.attr('number'),
});