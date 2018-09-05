import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr('string'),
    // dropdown: DS.belongsTo('dropdown-data'),
    // resultcard: DS.belongsTo('result-card-data'),
    // resulttable: DS.belongsTo('result-table-data'),
    dropdown: DS.attr(),
    resultcard: DS.attr(),
    resulttable: DS.attr(),
});