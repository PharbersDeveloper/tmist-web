import Component from '@ember/component';
// import { computed } from '@ember/object';
export default Component.extend({
	tagName: '',
	budgetTip: false,
	humanTip: false,

	init() {
		this._super(...arguments);
		this.navText = {
			title: '通知',
			message: '信息库',
			analysis: '当前部署分析'
		};
		this.budget = {
			used: 0,
			total: 0,
		}
	},
	actions: {
		budget() {
			this.toggleProperty('budgetTip');
			this.hidden('humanTip');
		},
		human() {
			this.toggleProperty('humanTip');
			this.hidden('budgetTip');
		},
	}
});