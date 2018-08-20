import Route from '@ember/routing/route';

export default Route.extend({
	// setupController(controller, model) {
	// 	this._super(controller, model);
	// 	controller.queryHospList(model.uuid);
	// 	controller.queryBudget(model.uuid);
	// 	controller.queryManpower(model.uuid);
	// },
	actions: {
		hospDetail(hospid) {
			this.transitionTo('pharbers.v1.hosp-detail',
				this.controller.model.pid, this.controller.model.uuid, hospid)
		}
	}
});
