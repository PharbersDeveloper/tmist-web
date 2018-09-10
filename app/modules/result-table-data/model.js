import DS from 'ember-data';

export default DS.Model.extend({
    columns: DS.attr(),
    columnsValue: DS.attr()
});