import DS from 'ember-data';

export default DS.Model.extend({
    history: DS.attr(),
    pre_target: DS.attr(),
    overview: DS.attr(),
    detail: DS.attr(),
    prod_category: DS.attr(),

});