import DS from 'ember-data';

export default DS.Model.extend({
    representative: DS.belongsTo('representative', { async: false }),
    hospmedicinfos: DS.hasMany('hospmedicinfo', { async: false }),
    hospital: DS.belongsTo('hospital', { async: false })

});