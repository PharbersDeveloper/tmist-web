import Route from '@ember/routing/route';

export default Route.extend({
	setupController(controller, model) {
		this._super(controller, model);
		controller.queryDetail(model.uuid, model.hospid);
		controller.queryBudget(model.uuid);
		controller.queryManpower(model.uuid);
	},
	actions: {
		willTransition: function(transition) {
			console.info("fuck")
			if (!confirm("Are you sure you want to abandon progress?")) {
				//retry
				//abort
				transition.abort();
			} else {
				console.info(123)
				return true;
			}
		}
	}
});