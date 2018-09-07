import DS from 'ember-data';

export default DS.Model.extend({
    medicines: DS.hasMany('medicineinfo', { async: false }),
    notices: DS.hasMany('notice', { async: false }),
    major: DS.attr(),
    minor: DS.attr(),
});