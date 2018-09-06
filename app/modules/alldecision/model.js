import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr(),
    hospitallist: DS.hasMany('hospitallist'),
    hospitaldecison: DS.belongsTo('hospdecision', { async: true }),
    managerdecision: DS.belongsTo('mgrdecision', { async: true }),
});