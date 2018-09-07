import DS from 'ember-data';

export default DS.Model.extend({
    medicines: DS.hasMany('medicine', { async: false }),
    notices: DS.hasMany('notice', { async: false }),
});