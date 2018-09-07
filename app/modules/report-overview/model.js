import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr('string'),
    dropdown: DS.belongsTo('dropdowndata', { async: true }),
    // hospitaldecison: DS.belongsTo('hospdecision', { async: true }),
    // resultcard: DS.belongsTo('result-card-data'),
    // resulttable: DS.belongsTo('result-table-data'),
    // dropdown: DS.attr(),
    resultcard: DS.belongsTo('result-card'),
    resulttable: DS.belongsTo('result-table-data'),
});