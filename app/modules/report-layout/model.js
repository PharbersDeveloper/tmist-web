import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr('string'),
    dropdown: DS.belongsTo('dropdown-layout', { async: true }),
    resultcard: DS.belongsTo('report-card-layout'),
    resulttable: DS.belongsTo('report-table-layout'),
});