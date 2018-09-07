import DS from 'ember-data';

export default DS.Model.extend({
    patients_payment_capacity: DS.attr('string'),
    hosp_level: DS.attr('string'),
    surgery_yearly: DS.attr('number'),
    hosp_name: DS.attr('string'),
    academic_influence: DS.attr('string'),
    focus_department: DS.attr('string'),
    department: DS.attr('string'),
    hosp_category: DS.attr('string'),
    academic_acceptance_rate: DS.attr('string'),
    drug_intake: DS.attr('string'),
    init_time: DS.attr('number'),
    client_grade: DS.attr('string'),
    inpatient_yearly: DS.attr('number'),
    patients_distribution_department: DS.attr('string'),
    hosp_image: DS.attr('string'),
    outpatient_yearly: DS.attr('number'),
    beds: DS.attr('number'),
    featured_outpatient: DS.attr('string'),
    // medicines: DS.hasMany('hospmedicinfo'),
    // signrep: DS.belongsTo('hosprep'),
});