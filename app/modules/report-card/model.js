import DS from 'ember-data';

export default DS.Model.extend({
    index: DS.attr('number'),
    title: DS.attr('string'),
    form: DS.attr('string'),
    value: DS.attr(),
    ext: DS.attr(),
});