import DS from 'ember-data';

export default DS.Model.extend({
    major: DS.attr(),
    minor: DS.attr(),
    report_id: DS.attr(),
    hospitalbaseinfo: DS.hasMany('hospitalbaseinfo', { async: false }),
    representative: DS.hasMany('repinputinfo', { async: false }),
    managerinputinfo: DS.belongsTo('managerinputinfo', { async: false }),
});