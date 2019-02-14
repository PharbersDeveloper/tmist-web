import DS from 'ember-data';

export default DS.Model.extend({
    uuid: DS.attr(),
    hospitalbaseinfo: DS.hasMany('hospitalbaseinfo', { async: false }),
    repinputinfo: DS.hasMany('repinputinfo', { async: false }),
    managerinputinfo: DS.belongsTo('managerinputinfo', { async: false }),
});