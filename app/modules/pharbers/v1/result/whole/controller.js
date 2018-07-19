import Controller from '@ember/controller';
import {
	inject
} from '@ember/service';
import {
	computed
} from '@ember/object';

export default Controller.extend({
	cookies: inject(),
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
		// this.set('manpower', newManpower);
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
			"token": this.get('cookies').read('user_token'),
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "report_detail",
				"condition": {
					"report_id":"5b4828e315899e014cb74e38"
				}
			}
		};
		console.info(this.get('cookies').read('user_token'))
		// let url = '/api/scenario/budget/info';
		// let value = 'budget';
		// this.sendAjax(url, condition, value);

		this.get('ajax').request('/api/report/total', this.getAjaxOpt(condition))
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
	 * 查询表格数据
	 */
	queryTotal() {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			// "token": "bearerc82ae46113f5f344987d3328b985f82d",
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "report_detail",
				"condition": {
					"report_id":"5b4828e315899e014cb74e38"
				}
			}
		}
		this.get('ajax').request('/api/report/total', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					console.log('it is ok');
					console.info(result.data.attribute.overview);
					this.set('overviewData', result.data.attribute.overview);

					this.set('columnsHospitalValue', result.data.attribute.value)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	/**
	 *	查询人力
	 */
	queryManpower() {
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
					"report_id":"5b4828e315899e014cb74e38"
				}
			}
		}
		// let url = 'api/scenario/humans/info';
		// let value = 'manpower';
		// this.sendAjax(url, condition, value);

		this.get('ajax').request('/api/report/total', this.getAjaxOpt(condition))
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
				// this.set('outputType', result.export_data_type);
				// this.set('output', true);
			}, () => {})
	},
	init() {
		this._super(...arguments);
		this.queryTotal();
		this.manpower = [];
		this.budget = {};
		this.queryManpower();
		this.queryBudget();
		this.overviewData = [
			// 	{
			// 	"index": 0,
			// 	"title": "zhengti",
			// 	"type": "sales",
			// 	"value": 5467913,
			// 	"des": 'up',
			// }, {
			// 	"index": 1,
			// 	"title": 'baifeibi',
			// 	"type": 'percent',
			// 	"value": 12,
			// 	"ext": {
			// 		"change": "down", // down,stable,none
			// 	}
			// }, {
			// 	"index": 2,
			// 	"title": '表现最佳',
			// 	"type": 'info',
			// 	"value": "医院1-产品1",
			// 	"ext": {
			// 		"sub": {
			// 			"title": '份额',
			// 			"type": 'sales', // percent
			// 			"value": 6525423, // 12
			// 			"ext": {
			// 				"type": 'percent',
			// 				"change": "up", // down,stable,none
			// 				"value": 7,
			// 			}
			// 		}
			// 	}
			// }
		];
		this.columnsHospital = [{
				label: '产品名称',
				valuePath: 'brand_name',
				width: '100px',
				align: 'center',
				sorted: false,

			}, {
				label: '市场销售额',
				valuePath: 'potential',
				width: '100px',
				align: 'center',
			}, {
				label: '市场增长(%)',
				valuePath: 'market_growth',
				width: '100px',
				align: 'center',

			}, {
				label: '当期销售额',
				valuePath: 'sales',
				width: '100px',
				align: 'center',
			}, {
				label: '销售增长(%)',
				valuePath: 'sales_growth',
				width: '100px',
				align: 'center',
			}, {
				label: 'EV值(%)',
				valuePath: 'ev_value',
				width: '80px',
				align: 'center',
			}, {
				label: '份额(%)',
				valuePath: 'share',
				width: '80px',
				align: 'center',
			}, {
				label: '份额增长(%)',
				valuePath: 'share_change',
				width: '100px',
				align: 'center',
			}, {
				label: '指标',
				valuePath: 'target',
				width: '100px',
				align: 'center',
			},
			{
				label: '指标达成率(%)',
				valuePath: 'achieve_rate',
				width: '100px',
				align: 'center',
			},
			{
				label: '销售贡献率(%)',
				valuePath: 'contri_rate',
				width: '100px',
				align: 'center',
			}
		];
		this.columnsHospitalValue = [
			/**
				{
					'prod': '产品一',
					'market_sale': 123456,
					'market_growth': 12,
					'current_sales': 45175,
					'sales_growth': 16,
					'ev_value': 100,
					'share': 45,
					'share_growth': 9,
					'target': 5861,
					'achievement_rate': 47,
					'contribution_rate': 41,
				}, {
					'prod': '产品二',
					'market_sale': 54387,
					'market_growth': 135,
					'current_sales': 87345,
					'sales_growth': 68,
					'ev_value': 468,
					'share': 78,
					'share_growth': 41,
					'target': 579,
					'achievement_rate': 13,
					'contribution_rate': 96,
				}, {
					'prod': '产品三',
					'market_sale': 8321,
					'market_growth': 647,
					'current_sales': 56,
					'sales_growth': 786,
					'ev_value': 563,
					'share': 536,
					'share_growth': 786,
					'target': 53,
					'achievement_rate': 56,
					'contribution_rate': 34,
				}, {
					'prod': '产品四',
					'market_sale': 67456,
					'market_growth': 13422,
					'current_sales': 452,
					'sales_growth': 42,
					'ev_value': 45,
					'share': 656,
					'share_growth': 76,
					'target': 42435,
					'achievement_rate': 452,
					'contribution_rate': 657,
				}
			*/
		];
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
