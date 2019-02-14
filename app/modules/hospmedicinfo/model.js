import DS from 'ember-data';

export default DS.Model.extend({
    prod_name: DS.attr('string'),
    pre_target: DS.attr('number'),
    prod_category: DS.attr('string'),
    total_budget: DS.attr('number'),
    overview: DS.attr(),
    history: DS.attr(),
    detail: DS.attr()
});