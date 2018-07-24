import Route from '@ember/routing/route';

export default Route.extend({
	setupController(controller, model) {
		this._super(controller, model);
		controller.queryDetail(model.uuid, model.hospid);
		controller.queryBudget(model.uuid);
		controller.queryManpower(model.uuid);
	},

});