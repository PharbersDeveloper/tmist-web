import DS from 'ember-data';

export default DS.Model.extend({
    pre_target: DS.attr('number'),
    prod_category: DS.attr('string'),
    overview: DS.attr(),
    history: DS.attr(),
    detail: DS.attr()
});