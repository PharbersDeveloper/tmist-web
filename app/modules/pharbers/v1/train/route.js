import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			'id': '1111',
			'name': "关卡01"
		}, {
			'id': '2222',
			'name': "关卡02"
		}]
	},
	init() {
		this._super(...arguments);
		this.train = [{
			'id': '1111',
			'name': "关卡01"
		}, {
			'id': '2222',
			'name': "关卡02"
		}];
	},
	actions: {
		simulation(id) {
			this.transitionTo('pharbers.v1.hospital')
		}
	}
});
