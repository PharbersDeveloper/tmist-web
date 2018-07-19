import Controller from '@ember/controller';
import {
	inject
} from '@ember/service';

export default Controller.extend({
	cookies: inject(),
	ajax: inject(),
	budgetTip: false,
	humanTip: false,
	tabLi: false,
	targetIncrease: 0,
	budget: 0,

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
	 * 查询表格数据
	 */
	queryHospital() {
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
		}
		this.get('ajax').request('/api/report/dests_goods', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is ok');
					// console.info(result.data.attribute);
					this.set('overviewData', result.data.attribute.overview);
					this.set('columnsHospitalValue', result.data.attribute.value)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	init() {
		this._super(...arguments);
		this.queryHospital();
		this.overviewData = [
			/**
				{
					"index": 0,
					"title": "zhengti",
					"type": "sales",
					"value": 5467913,
					"des": 'up',
				}, {
					"index": 1,
					"title": 'baifeibi',
					"type": 'percent',
					"value": 12,
					"ext": {
						"change": "down", // down,stable,none
					}
				}, {
					"index": 2,
					"title": '表现最佳',
					"type": 'info',
					"value": "医院1-产品1",
					"ext": {
						"sub": {
							"title": '份额',
							"type": 'sales', // percent
							"value": 6525423, // 12
							"ext": {
								"type": 'percent',
								"change": "up", // down,stable,none
								"value": 7,
							}
						}
					}
				}
			*/
		];
		this.columnsHospital = [{
				label: '医院名称',
				valuePath: 'hosp_name',
				width: '90px',
				align: 'center',
			}, {
				label: '产品名称',
				valuePath: 'brand_name',
				width: '90px',
				align: 'center',
			}, {
				label: '市场潜力',
				valuePath: 'potential',
				width: '90px',
				align: 'center',

			}, {
				label: '市场增长(%)',
				valuePath: 'market_growth',
				width: '90px',
				align: 'center',
			}, {
				label: '当期销售额',
				valuePath: 'sales',
				width: '90px',
				align: 'center',
			}, {
				label: '销售增长',
				valuePath: 'sales_growth',
				width: '90px',
				align: 'center',
			}, {
				label: 'EV值(%)',
				valuePath: 'ev_value',
				width: '80px',
				align: 'center',
			}, {
				label: '份额(%)',
				valuePath: 'share',
				width: '90px',
				align: 'center',
			}, {
				label: '份额增长(%)',
				valuePath: 'share_growth',
				width: '90px',
				align: 'center',
			},
			{
				label: '指标',
				valuePath: 'target',
				width: '90px',
				align: 'center',
			},
			{
				label: '指标达成率(%)',
				valuePath: 'achieve_rate',
				width: '90px',
				align: 'center',
			},
			{
				label: '销售贡献率(%)',
				valuePath: 'contri_rate',
				width: '90px',
				align: 'center',
			},
		];
		this.columnsHospitalValue = [
		// 	{
		// 	'hospital': 'aaa',
		// 	'prod': 'ccc',
		// 	'market_potential': 4444,
		// 	'market_growth': 444,
		// 	'current_sales': 444,
		// 	'sales_growth': 444,
		// 	'ev_value': 444,
		// 	'share': 444,
		// 	'share_growth': 444,
		// 	'target': 444,
		// 	'achievement_rate': 44,
		// 	'contribution_rate': 44
		// }
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
