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
					"report_id": "5b4828e315899e014cb74e38"
				}
			}
		}
		this.get('ajax').request('/api/report/dests_goods', this.getAjaxOpt(condition))
			.then(({ status, result, error }) => {
				if (status === "ok") {
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
		this.overviewData = [];
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
				cellComponent: 'table-number-percent'
			}, {
				label: '当期销售额',
				valuePath: 'sales',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-thousands'
			}, {
				label: '销售增长',
				valuePath: 'sales_growth',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-percent'
			}, {
				label: 'EV值(%)',
				valuePath: 'ev_value',
				width: '80px',
				align: 'center',
				cellComponent: 'table-number-percent'
			}, {
				label: '份额(%)',
				valuePath: 'share',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-percent'
			}, {
				label: '份额增长(%)',
				valuePath: 'share_growth',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-percent'
			},
			{
				label: '指标',
				valuePath: 'target',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-thousands'
			},
			{
				label: '指标达成率(%)',
				valuePath: 'achieve_rate',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-percent'
			},
			{
				label: '销售贡献率(%)',
				valuePath: 'contri_rate',
				width: '90px',
				align: 'center',
				cellComponent: 'table-number-percent'
			},
		];
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
		tab() {
			this.toggleProperty('tabLi');
			this.hidden('tabLi');
		},
	}
});