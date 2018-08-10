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
        console.log(model);
        controller.queryDetail(model.uuid, model.hospid);
    },

    // getAjaxOpt(data) {
    //     return {
    //         method: 'POST',
    //         dataType: 'json',
    //         cache: false,
    //         data: JSON.stringify(data),
    //         contentType: 'application/json',
    //         Accpt: 'application/json'
    //     }
    // },
    // model(params) {
    //     let condition = {
    //         "token": "bearera67c2dc93dfc7ff2a19baefee72034f4",
    //         "timestamp": 1530689119000,
    //         "version": {
    //             "major": 1,
    //             "minor": 0
    //         },
    //         "data": {
    //             "type": "hospital",
    //             "condition": {
    //                 "uuid": params.uuid,
    //                 "hospital_id": params.hospid
    //             }
    //         }
    //     };
    //
    //     return this.get('ajax')
    //         .request('/api/proposal/hospital/detail', this.getAjaxOpt(condition))
    //         .then((res) => {
    //             if (res.status === "ok") {
    //                 // return res.result.data.attribute;
    //                 let results = res.result.data.attribute;
    //                 return results;
    //             } else {
    //                 this.set('errorMes', res.error.message)
    //             }
    //         })
    // }
});