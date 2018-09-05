import DS from 'ember-data';

export default DS.Model.extend({
    component_name: DS.attr(),
    whichpage: DS.attr(),
    text: DS.attr(),
});