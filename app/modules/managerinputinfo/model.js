import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    total_day: DS.attr('number'),
    used_day: computed('kpi_analysis', 'admin_work', 'team_meet', 'field_work', 'sales_train', function() {
        return Number(this.get('kpi_analysis') || 0) +
            Number(this.get('admin_work') || 0) +
            Number(this.get('team_meet') || 0) +
            Number(this.get('field_work') || 0) +
            Number(this.get('sales_train') || 0)
    }),
    kpi_analysis: DS.attr('number', { defaultValue: 0 }),
    admin_work: DS.attr('number', { defaultValue: 0 }),
    team_meet: DS.attr('number', { defaultValue: 0 }),
    field_work: DS.attr('number', { defaultValue: 0 }),
    sales_train: DS.attr('number', { defaultValue: 0 })
});