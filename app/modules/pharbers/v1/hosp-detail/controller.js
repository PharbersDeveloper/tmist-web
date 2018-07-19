import Controller from '@ember/controller';
import {
	inject
} from '@ember/service';
import {
	computed
} from '@ember/object';
export default Controller.extend({
	cookies:inject(),
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
			dataType: 'json',
			cache: false,
			data: JSON.stringify(data),
			contentType: 'application/json',
			Accpt: 'application/json',
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
					// console.log(result.data.attribute);
					this.set(value, result.data.attribute)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	/**
	 * 查询医院详情
	 */
	queryDetail() {
		let condition = {
			"token": this.get('cookies').read('user_token'),
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "hosp_detail",
				"condition": {
					"proposal_id":"5b42fd43ed925c05565b5bdb",
        			"hospital_id": "5b43118fed925c05565b5bfc"
				}
			}
		};
		this.get('ajax').request('/api/proposal/hospital/detail', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error
			}) => {
				if (status === 'ok') {
					// console.info(result);
					this.set('medicines', result.data.attribute.medicines);
					// this.set('hospitalInfo', result.data.attribute.hospital);
				} else {
					this.set('errorMessage', error.message)
				}
			}, () => {})
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
				"type": "budget_progress",
				"condition": {
						"proposal_id":"5b42fd43ed925c05565b5bdb"
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
					"proposal_id":"5b42fd43ed925c05565b5bdb"
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
		this.queryDetail();
		this.queryBudget();
		this.queryManpower();
		this.hospitalInfo = {
			"id": "idididi",
			"name": "中日医院",
			"basicinfo": [{
				'key': '医院类型',
				"value": "综合",
			}, {
				'key': '医院等级',
				'value': '三甲'
			}, {
				'key': '病床数量',
				'value': 4562,
			}, {
				'key': '特色科室',
				'value': '皮肤科'
			}, {
				'key': '门诊人次/年',
				'value': 4612,
			}, {
				'key': '手术台数',
				'value': 68755
			}, {
				'key': '住院人数/年',
				'value': 1000,
			}],
			"news": {},
			"policy": {}
		};
		this.medicines = [{
				"id": "medicine000",
				"name": "口服抗生素",
				"marketpotential": 333444555,
				"potentialgrowth": 99,
				"previoussales": 555444,
				"previousgrowth": 99,
				"share": 12,
				"contributionrate": 4,
				"detail": {
					"id": "medicine000_detail",
					"value": [{
						"id": "霉素",
						"type": "口服抗生素",
						"treatmentarea": "抗生素",
						"selltime": "2000",
						"medicalinsurance": "甲类",
						"development": "首仿",
						"companyprice": 44
					}]
				},
				"history": {
					"id": "medicine000_history",
					"value": [{
						"time": "星期一",
						"representative": "小三",
						"timemanagement": "12天",
						"budgetallocation": 5000,
						"budgetratio": 5000,
						"indicator": 50000,
						"growth": 1.23,
						"achievementrate": 95
					}]
				},
				"competitionproducts": {
					"id": "medicine000_competitionproducts",
					"value": []
				}
			},
			{
				"id": "medicine001",
				"name": "口服护发素",
				"marketpotential": 333444555,
				"potentialgrowth": 99,
				"previoussales": 555444,
				"previousgrowth": 99,
				"share": 12,
				"contributionrate": 4,
				"detail": {
					"id": "medicine001_detail",
					"value": [{
						"id": "霉素",
						"type": "口服抗生素",
						"treatmentarea": "抗生素",
						"selltime": "2000",
						"medicalinsurance": "甲类",
						"development": "首仿",
						"companyprice": 44
					}]
				},
				"history": {
					"id": "medicine001_history",
					"value": [{
						"time": "星期一",
						"representative": "小三",
						"timemanagement": "12天",
						"budgetallocation": 5000,
						"budgetratio": 5000,
						"indicator": 50000,
						"growth": 1.23,
						"achievementrate": 95
					}]
				},
				"competitionproducts": {
					"id": "medicine001_competitionproducts",
					"value": []
				}
			},
			{
				"id": "medicine002",
				"name": "口服叶绿素",
				"marketpotential": 333444555,
				"potentialgrowth": 99,
				"previoussales": 555444,
				"previousgrowth": 99,
				"share": 12,
				"contributionrate": 4,
				"detail": {
					"id": "medicine002_detail",
					"value": [{
						"id": "霉素",
						"type": "口服抗生素",
						"treatmentarea": "抗生素",
						"selltime": "2000",
						"medicalinsurance": "甲类",
						"development": "首仿",
						"companyprice": 44
					}]
				},
				"history": {
					"id": "medicine002_history",
					"value": [{
						"time": "星期一",
						"representative": "小三",
						"timemanagement": "12天",
						"budgetallocation": 5000,
						"budgetratio": 5000,
						"indicator": 50000,
						"growth": 1.23,
						"achievementrate": 95
					}]
				},
				"competitionproducts": {
					"id": "medicine002_competitionproducts",
					"value": []
				}
			}
		];
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
			valuePath: 'indicator',
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
		this.columnsHospitalValue = [{
			time: '星期一',
			representative: '小三',
			timemanagement: 12,
			budgetallocation: 5000,
			budgetratio: 5000,
			indicator: 50000,
			growth: 123,
			achievementrate: 95,
		}, {
			time: '星期一',
			representative: '小三',
			timemanagement: 15,
			budgetallocation: 55000,
			budgetratio: 7000,
			indicator: 57000,
			growth: 1.5,
			achievementrate: 92,
		}, ];
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
		submit() {
			this.transitionToRoute('pharbers.v1.result.whole')
		},
		backHospList() {
			this.transitionToRoute('pharbers.v1.hospital')
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
		},
	}
});
