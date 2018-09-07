import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    desc: DS.attr('string'),
    scenario_id: DS.attr('string')
});