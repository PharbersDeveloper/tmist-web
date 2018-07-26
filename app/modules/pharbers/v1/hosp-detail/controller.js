import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
export default Controller.extend({
	cookies: inject(),
	ajax: inject(),
	budgetTip: false,
	humanTip: false,
	showBaseInfo: true, // 基本信息显示与否
	showNews: false, // 医院新闻动态显示与否
	showUsePolicy: false, // 用药政策/理念 显示与否
	targetIncrease: 0,
	budgetCompute: 0,
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
			dataType: 'json',
			cache: false,
			data: JSON.stringify(data),
			contentType: 'application/json',
			Accpt: 'application/json',
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
	 * 查询医院详情
	 */
	queryDetail(uuid, hospid) {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"version": { "major": 1, "minor": 0 },
			"data": {
				"type": "hosp_detail",
				"condition": {
					"uuid": uuid,
					"hospital_id": hospid
				}
			}
		};
		this.get('ajax').request('/api/proposal/hospital/detail', this.getAjaxOpt(condition))
			.then(({ status, result, error }) => {
				if (status === 'ok') {
					this.set('hospitalInfo', result.data.attribute.hospital);
					this.set('medicines', result.data.attribute.medicines);
				} else { this.set('errorMessage', error.message) }
			}, () => {})
	},
	/**
	 *	查询budget
	 */
	queryBudget(uuid) {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "budget_progress",
				"condition": {
					"uuid": uuid
				}
			}
		};
		let url = '/api/proposal/budget/info';
		let value = 'budget';
		this.sendAjax(url, condition, value);

	},

	/**
	 *	查询人力
	 */
	queryManpower(uuid) {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
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
		this.budget = {};
		this.manpower = [];
		this.columnsHospital = [{
			label: '时间',
			valuePath: 'time',
			width: '80px',
			align: 'center',
			className: 'testname',
			sortable: true,
			sorted: true,
		}, {
			label: '负责代表',
			valuePath: 'representative',
			width: '80px',
			align: 'center',
		}, {
			label: '时间分配',
			valuePath: 'timemanagement',
			width: '80px',
			align: 'center',

		}, {
			label: '预算分配',
			valuePath: 'budgetallocation',
			width: '80px',
			align: 'center',
		}, {
			label: '预算比例',
			valuePath: 'budgetratio',
			width: '80px',
			align: 'center',
		}, {
			label: '指标设定',
			valuePath: 'target',
			width: '80px',
			align: 'center',
		}, {
			label: '指标增长',
			valuePath: 'growth',
			width: '80px',
			align: 'center',
		}, {
			label: '指标达成率',
			valuePath: 'achievementrate',
			width: '100px',
			align: 'center',
		}];
		this.columnsHospitalValue = [];
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
		submit() {
			this.transitionToRoute('pharbers.v1.result.whole')
		},
		backHospList() {
			const model = this.get("model")
			this.transitionToRoute('pharbers.v1.hospital', model.pid, model.uuid)
		},
		changeTabsInfo() {
			this.set('showBaseInfo', true);
			this.set('showNews', false);
			this.set('showUsePolicy', false);
		},
		changeTabsNews() {
			this.set('showBaseInfo', false);
			this.set('showNews', true);
			this.set('showUsePolicy', false);
		},
		changeTabsPolicy() {
			this.set('showBaseInfo', false);
			this.set('showNews', false);
			this.set('showUsePolicy', true);
		}
	}
});