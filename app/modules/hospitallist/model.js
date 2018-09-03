import DS from 'ember-data';

export default DS.Model.extend({
    overview: DS.attr(),
    medicines: DS.attr(),

});