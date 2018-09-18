import DS from 'ember-data';

export default DS.Model.extend({
    rep_name: DS.attr('string'),
    rep_image: DS.attr('string'),
    rep_describe: DS.attr('string'),
    rep_level: DS.attr('string'),
    age: DS.attr('number'),
    education: DS.attr('string'),
    profe_bg: DS.attr('string'),
    service_year: DS.attr('number'),
    entry_time: DS.attr('number'),
    business_exp: DS.attr('string'),
    advantage: DS.attr('string'),
    weakness: DS.attr('string'),
    sales_skills_val: DS.attr('number'),
    prod_knowledge_val: DS.attr('number'),
    motivation_val: DS.attr('number'),
    overall_val: DS.attr('number'),
});