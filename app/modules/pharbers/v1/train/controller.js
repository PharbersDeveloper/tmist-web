import Controller from '@ember/controller';
// import styles from './styles';
import {
	inject
} from '@ember/service';
import {
	later
} from '@ember/runloop';
const {
	keys
} = Object;
// import $ from 'jquery';

export default Controller.extend({
	ajax: inject(),
	cookies: inject(),
	// styles,

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

	/**
	 * 查询关卡
	 */
	queryTrains() {
		let condition = {
			"token": "token123456789",
			"timestamp": 1530689119000,
			"version": {
				"major": 1,
				"minor": 0
			},
			"data": {
				"type": "checkpoints",
				"condition": {
					name: "前"
				}
			}
		}

		this.get('ajax').request('/api/checkpoint/query/multi', this.getAjaxOpt(condition))
			.then(({
				status,
				result,
				error,
			}) => {
				if (status === "ok") {
					// console.log('it is train');
					// console.info(result);
					this.set('checkpoints', result.data.attribute)
				} else {
					this.set('errorMessage', error.message);
				}
				// this.set('outputType', result.export_data_type);
				// this.set('output', true);
			}, () => {})
	},


	init() {
		this._super(...arguments);
		this.queryTrains();

		// this.queryMarkets();
		// this.queryUserInfo();
		// this.startDate = new Date('2018-01');
		// this.endDate = new Date();
		// this.outputStartData = new Date('2018-01');
		// this.outputEndData = new Date();
		// this.outputType = [];
	},

	actions: {

		logut() {
			// let cookies = this.get('cookies');
			keys(this.get('cookies').read()).forEach(item => {
				window.console.info(item);
				this.get('cookies').clear(item, {
					path: '/'
				})
			});
			later(this, () => {
				window.location = "/";
			}, 1000)
		}

	}
});