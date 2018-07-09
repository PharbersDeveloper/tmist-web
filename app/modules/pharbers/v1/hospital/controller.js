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
		// this.set('manpower', newManpower);
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
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is ok');
					// console.info(result);
					this.set(value, result.data.attribute)
				} else {
					this.set('errorMessage', error.message);
				}
				// this.set('outputType', result.export_data_type);
				// this.set('output', true);
			}, () => {})
	},
	/**
	 * 查询医院列表
	 */
	queryHospList() {
		let condition = {
			"token": "token123456789",
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "hosp_lst",
				"condition": {
					"scenario_id": "scenario_id"
				}
			}
		}

		this.get('ajax').request('/api/scenario/hospital/lst', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is ok');
					this.set('currentMonth', result.data.attribute.currentMonth)
					this.set('hospitalList', result.data.attribute.hospitalList)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
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
		let url = '/api/scenario/budget/info';
		let value = 'budget';
		this.sendAjax(url, condition, value);
		/**
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
		*/
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
		let url = 'api/scenario/humans/info';
		let value = 'manpower';
		this.sendAjax(url, condition, value);
		/**
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
						// this.set('outputType', result.export_data_type);
						// this.set('output', true);
					}, () => {})
		*/
	},
	init() {
		this._super(...arguments);
		this.hospitalList = [
			/**
					{
					'hospid': '111',
					'name': '中日医院',
					'level': '综合/三甲', // 类型/等级
					'department': '皮肤科', //特色科室
					'bed': 1000, // 病床数量
					'outpatient': 1234545, // 门诊人次/年
					'surgery': 1000, // 手术台数/年

					'representive': {
						'name': '校长',
						'avatar': '/assets/images/hosp_seller.png'
					}, // 负责代表
					'medicines': [{
						'id': 'ddd',
						'name': '口服抗生素', // 药品名称
						'potential': '54,561,334', // 药品潜力
						'previoussales': '554,687', //上期销售额
						'contributionrate': '5%', // 贡献率
						'share': '12%' //份额
					}]
				}
			*/
		];
		this.queryHospList();
		this.budget = {
			/**
				'total': 800000,
				'used': 60000,
				'percentage': 75,
			*/
		};
		this.queryBudget();
		this.manpower = [
			/**
					{
					'name': '代表一',
					'total': 30,
					'used': 20,
					'percentage': 67,
				}, {
					'name': '代表二',
					'total': 30,
					'used': 29,
					'percentage': 96,
				}, {
					'name': '代表三',
					'total': 30,
					'used': 20,
					'percentage': 67,
				}, {
					'name': '代表四',
					'total': 30,
					'used': 15,
					'percentage': 50,
				}, {
					'name': '代表五',
					'total': 30,
					'used': 10,
					'percentage': 33,
				}
			*/
		];
		this.queryManpower();
	},
	actions: {
		// body
		budget() {
			// console.log('budget');
			this.toggleProperty('budgetTip');
			this.hidden('humanTip');
		},
		human() {
			// console.log('human');
			// this.queryManpower();
			this.toggleProperty('humanTip');
			this.hidden('budgetTip');
		},
		hospDetail() {
			this.transitionToRoute('pharbers.v1.hosp-detail')
		}
	}
});