import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    beforeModel(transition) {
        let talentController = this.controllerFor('pharbers.v1.talent-train.index');
        talentController.set('previousTransition', transition);
    },

    setupController(controller, model) {
        this._super(controller, model);
        // this.logger.log(model)
        controller.queryList(model.uuid);

    }

});
