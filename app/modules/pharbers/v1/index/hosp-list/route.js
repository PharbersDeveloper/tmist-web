import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    setupController(controller, model) {
        this._super(controller, model);
        controller.queryList(model.uuid);
    }

});