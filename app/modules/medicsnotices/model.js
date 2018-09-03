import DS from 'ember-data';

export default DS.Model.extend({
    medicines: DS.hasMany('medicineinfos'),
    notices: DS.hasMany('notices'),
});