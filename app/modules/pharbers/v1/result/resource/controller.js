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
	queryResource() {
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
		this.get('ajax').request('/api/report/reso_allocation', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					this.set('overviewData', result.data.attribute.overview);
					this.set('columnsResourceValue', result.data.attribute.value)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	init() {
		this._super(...arguments);
		this.queryResource();
		this.overviewData = [];

		this.columnsResource = [{
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
			label: '分配代表',
			valuePath: 'rep_name',
			width: '90px',
			align: 'center',
		}, {
			label: '时间(%)',
			valuePath: 'time',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-percent'
		}, {
			label: '预算分配',
			valuePath: 'budget',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-thousands'
		}, {
			label: '市场潜力',
			valuePath: 'potential',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-thousands'
		}, {
			label: '潜力增长(%)',
			valuePath: 'market_growth',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-percent'
		}, {
			label: '销售额',
			valuePath: 'sales',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-thousands'
		}, {
			label: '销售增长(%)',
			valuePath: 'sales_growth',
			width: '90px',
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
			valuePath: 'share_change',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-percent'
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contri_rate',
			width: '90px',
			align: 'center',
			cellComponent: 'table-number-percent'
		}, ];
		this.columnsResourceValue = [{
			'hospital': 'aa name',
			'prod': 'cc 01',
			'rep': 'cc',
			'time': 22,
			'budget': 2222,
			'market_potential': 222,
			'potential_growth': 22,
			'current_sales': 222,
			'sales_growth': 22,
			'share': 222,
			'share_growth': 22,
			'contribution_rate': 22
		}];
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