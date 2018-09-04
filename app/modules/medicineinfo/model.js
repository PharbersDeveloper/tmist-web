import DS from 'ember-data';

export default DS.Model.extend({
    avatar: DS.attr('string'),
    class: DS.attr('string'),
    name: DS.attr('string'),
    missionValue: DS.attr('number'),
    feature: DS.attr('string'),
    heal: DS.attr(),
    department: DS.attr(),
    desc: DS.attr('string')
});