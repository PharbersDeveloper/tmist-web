import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    total_day: DS.attr(),
    used_day:  computed('kpi_analysis', 'admin_work', 'team_meet', 'field_work', 'sales_train', function() {
        return Number(this.get('kpi_analysis') || 0) + 
                Number(this.get('admin_work') || 0) + 
                Number(this.get('team_meet') || 0)+ 
                Number(this.get('field_work') || 0)+ 
                Number(this.get('sales_train') || 0)
    }),
    kpi_analysis: DS.attr({ defaultValue: "" }),
    admin_work: DS.attr({ defaultValue: "" }),
    team_meet: DS.attr({ defaultValue: "" }),
    field_work: DS.attr({ defaultValue: "" }),
    sales_train: DS.attr({ defaultValue: "" })
});