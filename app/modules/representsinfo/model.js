import DS from 'ember-data';

export default DS.Model.extend({
    rep_image: DS.attr('string'),
    intro: DS.attr('string'),
    overall_val: DS.attr('number'),
    entry_time: DS.attr('number'),
    profe_bg: DS.attr('string'),
    weakness: DS.attr('string'),
    rep_name: DS.attr('string'),
    advantage: DS.attr('string'),
    age: DS.attr('number'),
    sales_skills_val: DS.attr('number'),
    business_exp: DS.attr('string'),
    rep_level: DS.attr('string'),
    education: DS.attr('string'),
    prod_knowledge_val: DS.attr('number'),
    service_year: DS.attr('number'),
    repsbudgets: DS.belongsTo('repsbudgets'),
});