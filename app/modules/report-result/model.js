import DS from 'ember-data';

export default DS.Model.extend({
    assess_report_id: DS.attr(),
    outcome: DS.attr(),
    report_id: DS.attr(),
});