import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr(),
    alldecision: DS.belongsTo('alldecision'),
});