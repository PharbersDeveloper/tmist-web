import DS from 'ember-data';

export default DS.Model.extend({
    proposal_name: DS.attr('string'),
    proposal_desc: DS.attr('string')
});