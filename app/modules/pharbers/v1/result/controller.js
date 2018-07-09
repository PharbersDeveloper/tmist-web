import Controller from '@ember/controller';
import {
	inject
} from '@ember/service';
import {
	computed
} from '@ember/object';

export default Controller.extend({
	ajax: inject(),
	budgetTip: false,
	humanTip: false,
	tabLi: false,
	targetIncrease: 0,
	budget: 0,
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
			this.set(hiddenProperty, true)
		}
	},
	getAjaxOpt(data) {
		return {
			method: 'POST',
			dataType: 'json',
			cache: false,
			data: JSON.stringify(data),
			contentType: 'application/json',
			Accpt: 'application/json',
		}
	},
	/**
	 *	查询budget
	 */
	queryBudget() {
		let condition = {
			"token": "token123456789",
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "budget_progress",
				"condition": {
					"scenario_id": "scenario_id"
				}
			}
		};
		// let url = '/api/scenario/budget/info';
		// let value = 'budget';
		// this.sendAjax(url, condition, value);

		this.get('ajax').request('/api/scenario/budget/info', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					this.set('budget', result.data.attribute)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {});

	},

	/**
	 *	查询人力
	 */
	queryManpower() {
		let condition = {
			"token": "token123456789",
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "budget_progress",
				"condition": {
					"scenario_id": "scenario_id"
				}
			}
		}
		// let url = 'api/scenario/humans/info';
		// let value = 'manpower';
		// this.sendAjax(url, condition, value);

		this.get('ajax').request('/api/scenario/humans/info', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.info(result.data.attribute);
					this.set('manpower', result.data.attribute)
				} else {
					this.set('errorMessage', error.message);
				}

			}, () => {})
	},
	init() {
		this._super(...arguments);
		this.manpower = [];
		this.budget = {};
		this.queryManpower();
		this.queryBudget();
	},
	actions: {
		budget() {
			// console.log('budget');
			this.toggleProperty('budgetTip');
			this.hidden('humanTip');
		},
		human() {
			// console.log('human');
			this.toggleProperty('humanTip');
			this.hidden('budgetTip');
		},
		tab() {
			// console.log('tabLi');
			this.toggleProperty('tabLi');
			this.hidden('tabLi');
		},

	}
});