import Controller from '@ember/controller';
import {
	inject
} from '@ember/service';
export default Controller.extend({
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
			"token": "token123456789",
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "report_detail",
				"condition": {
					"scenario_id": "scenario_id"
				}
			}
		}
		this.get('ajax').request('/api/report/resource_in_out', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is ok');
					// console.info(result.data.attribute);
					this.set('overviewData', result.data.attribute.res_io.overview);
					this.set('columnsResourceValue', result.data.attribute.res_io.value)
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
			valuePath: 'hospital',
			width: '90px',
			align: 'center',
		}, {
			label: '产品名称',
			valuePath: 'prod',
			width: '90px',
			align: 'center',
		}, {
			label: '分配代表',
			valuePath: 'rep',
			width: '90px',
			align: 'center',
		}, {
			label: '时间(%)',
			valuePath: 'time',
			width: '90px',
			align: 'center',
		}, {
			label: '预算分配',
			valuePath: 'budget',
			width: '90px',
			align: 'center',
		}, {
			label: '市场潜力',
			valuePath: 'market_potential',
			width: '90px',
			align: 'center',

		}, {
			label: '潜力增长(%)',
			valuePath: 'potential_growth',
			width: '90px',
			align: 'center',
		}, {
			label: '销售额',
			valuePath: 'current_sales',
			width: '90px',
			align: 'center',
		}, {
			label: '销售增长(%)',
			valuePath: 'sales_growth',
			width: '90px',
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
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contribution_rate',
			width: '90px',
			align: 'center',
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