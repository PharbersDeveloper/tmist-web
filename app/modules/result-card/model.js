import DS from 'ember-data';

export default DS.Model.extend({
    index: DS.attr('number'),
    title: DS.attr('string'),
    type: DS.attr('string'),
    value: DS.attr('number'),
    ext: DS.attr(),
});