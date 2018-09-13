import DS from 'ember-data';

export default DS.Model.extend({
    total_day: DS.attr(),
    used_day: DS.attr(),
    kpi_analysis: DS.attr({ defaultValue: "" }),
    admin_work: DS.attr({ defaultValue: "" }),
    team_meet: DS.attr({ defaultValue: "" }),
    field_work: DS.attr({ defaultValue: "" }),
    sales_train: DS.attr({ defaultValue: "" })
});