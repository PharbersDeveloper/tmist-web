import DS from 'ember-data';

export default DS.Model.extend({
    report_analysi_val: DS.attr(), // 报表分析与决策
    market_insight_val: DS.attr(), // 市场洞察力
    target_setting_val: DS.attr(), // 目标分级能力
    strategy_execution_val: DS.attr(), //  公司战略执行力
    resource_allocation_val: DS.attr(), // 资源分配与优化
    plan_deployment_val: DS.attr(), // 销售计划部署
    leadership_val: DS.attr(), // 领导力
    intor: DS.hasMany('evaluation_line_intro_data'),
});