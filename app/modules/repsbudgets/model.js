import DS from 'ember-data';

export default DS.Model.extend({
    major: DS.attr(),
    minor: DS.attr(),
    represents: DS.hasMany('representsinfo'),
    budgets: DS.hasMany('budgetinfo'),
});