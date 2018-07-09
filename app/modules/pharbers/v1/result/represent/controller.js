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
	queryRepTarget() {
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
		this.get('ajax').request('/api/report/repr_ind_resource', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is ok');
					// console.info(result.data.attribute);
					this.set('overviewData', result.data.attribute.rep_ind_resources.overview);

					this.set('columnsRepreValue', result.data.attribute.rep_ind_resources.value)
				} else {
					this.set('errorMessage', error.message);
				}
			}, () => {})
	},
	init() {
		this._super(...arguments);
		this.queryRepTarget();
		this.overviewData = [];
		this.columnsRepre = [{
			label: '代表名称',
			valuePath: 'rep',
			width: '100px',
			align: 'center',
		}, {
			label: '负责指标',
			valuePath: 'target',
			width: '120px',
			align: 'center',
		}, {
			label: '销售额',
			valuePath: 'current_sales',
			width: '120px',
			align: 'center',
		}, {
			label: '指标达成(%)',
			valuePath: 'indicator_achievement',
			width: '100px',
			align: 'center',
		}, {
			label: '预算比例(%)',
			valuePath: 'target_rate',
			width: '120px',
			align: 'center',
		}, {
			label: '销售贡献率(%)',
			valuePath: 'contribution_rate',
			width: '120px',
			align: 'center',
		}, {
			label: '工作天数',
			valuePath: 'workdays',
			width: '100px',
			align: 'center',
		}, {
			label: '奖金',
			valuePath: 'reward',
			width: '100px',
			align: 'center',
		}, {
			label: '能力值1',
			valuePath: 'ability',
			width: '100px',
			align: 'center',
		}, {
			label: '能力值变化',
			valuePath: 'ability_change',
			width: '100px',
			align: 'center',
		}, ];
		this.columnsRepreValue = [{
			'rep': 'aa',
			'target': 333,
			'current_sales': 333,
			'indicator_achievement': 33,
			'target_rate': 33,
			'contribution_rate': 33,
			'workdays': 333,
			'reward': 33,
			'ability': 3333,
			'ability_change': '+3',
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