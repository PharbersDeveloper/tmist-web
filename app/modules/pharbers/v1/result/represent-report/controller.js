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
	queryRepresent() {
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
		this.get('ajax').request('/api/report/rep_goods', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is ok');
					// console.info(result.data.attribute);
					this.set('overviewData', result.data.attribute.overview);
					this.set('columnsRepreReportValue', result.data.attribute.value)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	init() {
		this._super(...arguments);
		this.queryRepresent();
		this.overviewData = [];
		this.columnsRepreReport = [{
			label: '代表名称',
			valuePath: 'rep',
			width: '150px',
			align: 'center',
		}, {
			label: '产品名称',
			valuePath: 'brand_name',
			width: '150px',
			align: 'center',
		}, {
			label: '当期销售额',
			valuePath: 'sales',
			width: '150px',
			align: 'center',
		}, {
			label: '销售增长',
			valuePath: 'sales_growth',
			width: '150px',
			align: 'center',
		}, {
			label: '指标',
			valuePath: 'target',
			width: '150px',
			align: 'center',
		}, {
			label: '指标达成率(%)',
			valuePath: 'achieve_rate',
			width: '150px',
			align: 'center',
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contri_rate',
			width: '150px',
			align: 'center',
		}, ];
		this.columnsRepreReportValue = [{
			'rep': 'aa name',
			'prod': 'bb 01',
			'current_sales': 1111,
			'sales_growth': 1111,
			'target': 1111,
			'achievement_rate': 11,
			'contribution_rate': 11
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
