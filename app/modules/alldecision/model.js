import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr(),
    // hospitaldecison: DS.belongsTo('hospdecision', { async: true }),
    // managerdecision: DS.belongsTo('madecision', { async: true }),
});