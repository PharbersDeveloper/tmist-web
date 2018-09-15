import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    total_day: DS.attr(),
    used_day: DS.attr(),
    // used_day: computed('kpi_analysis', 'admin_work','team_meet','field_work','sales_train', function() {
    //     // body
    //     return this.get('kpi_analysis');
    // }),
    kpi_analysis: DS.attr({ defaultValue: "", async: false }),
    admin_work: DS.attr({ defaultValue: "", async: false }),
    team_meet: DS.attr({ defaultValue: "", async: false }),
    field_work: DS.attr({ defaultValue: "", async: false }),
    sales_train: DS.attr({ defaultValue: "", async: false }),
});