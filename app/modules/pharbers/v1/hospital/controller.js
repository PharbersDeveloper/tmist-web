import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
	cookies: inject(),
	ajax: inject(),
	currentMonth: 1,
	budgetPerc: computed('budget', function() {
		let budget = this.get('budget');
		let percent = (budget.used) / (budget.total) * 100;
		return percent;
	}),
	manpowerPerc: computed('manpower', function() {
		let manpower = this.get('manpower');
		let newManpower = [];
		for (let i = 0, len = manpower.length; i < len; i++) {
			let percentObject = {};
			percentObject.name = manpower[i].name;
			percentObject.used = manpower[i].used;
			percentObject.total = manpower[i].total;
			percentObject.percent = ((manpower[i].used / manpower[i].total) * 100).toFixed(0);
			newManpower.push(percentObject);
		}
		return newManpower;
	}),
	hidden(hiddenProperty) {
		if (this.get(hiddenProperty)) {
			this.set(hiddenProperty, false)
		}
	},
	getAjaxOpt(data) {
		return {
			method: 'POST',
			dataType: "json",
			cache: false,
			data: JSON.stringify(data),
			contentType: "application/json",
			Accpt: "application/json",
		}
	},
	sendAjax(url, condition, value) {
		this.get('ajax').request(url, this.getAjaxOpt(condition))
			.then(({ status, result, error }) => {
				if (status === "ok") {
					this.set(value, result.data.attribute)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	/**
	 * 查询医院列表
	 */
	queryHospList(uuid) {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"version": { "major": 1, "minor": 0 },
			"data": {
				"type": "hosp_lst",
				"condition": {
					"uuid": uuid
				}
			}
		}
		this.get('ajax').request('/api/proposal/hospital/lst', this.getAjaxOpt(condition))
			.then(({ status, result, error }) => {
				if (status === "ok") {
					this.set('currentMonth', result.data.attribute.currentMonth)
					this.set('hospitalList', result.data.attribute.hospitals)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	/**
	 *	查询budget
	 */
	queryBudget(uuid) {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"version": { "major": 1, "minor": 0 },
			"data": {
				"type": "budget_progress",
				"condition": {
					"uuid": uuid
				}
			}
		};
		let url = 'api/proposal/budget/info';
		let value = 'budget';
		this.sendAjax(url, condition, value);
	},
	/**
	 *	查询人力
	 */
	queryManpower(uuid) {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"version": { "major": 1, "minor": 0 },
			"data": {
				"type": "budget_progress",
				"condition": {
					"uuid": uuid
				}
			}
		}
		let url = 'api/proposal/humans/info';
		let value = 'manpower';
		this.sendAjax(url, condition, value);
	},
	init() {
		this._super(...arguments);
		this.hospitalList = [];
		this.budget = {};
		this.manpower = [];
	},

	actions: {
		budget() {
			this.toggleProperty('budgetTip');
			this.hidden('humanTip');
		},
		human() {
			this.toggleProperty('humanTip');
			this.hidden('budgetTip');
		}
	}
});