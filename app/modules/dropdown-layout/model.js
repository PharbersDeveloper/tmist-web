import DS from 'ember-data';

export default DS.Model.extend({
    whichpage: DS.attr(),
    text: DS.attr(),
});