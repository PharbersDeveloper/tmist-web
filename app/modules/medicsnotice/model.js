import DS from 'ember-data';

export default DS.Model.extend({
    medicines: DS.hasMany('medicineinfo'),
    notices: DS.hasMany('notice'),
    major: DS.attr(),
    minor: DS.attr(),
});