import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    cookies: inject(),
    getAjaxOpt(data) {
        return {
            method: 'POST',
            dataType: 'json',
            cache: false,
            data: JSON.stringify(data),
            contentType: 'application/json',
            Accpt: 'application/json'
        }
    },

    model(params) {
        let model = this.modelFor('pharbers.v1.index');

        let hospids = JSON.parse(localStorage.getItem('hospList'));
        this.controllerFor('pharbers.v1.index.hosp-list-detail').set('hospIdList', hospids.list)
        this.controllerFor('pharbers.v1.index.hosp-list-detail').set('totalRepresents', model.budgetInfo.manpower)
        this.controllerFor('pharbers.v1.index.hosp-list-detail').set('allBudget', model.budgetInfo.budget.total)
        this.controllerFor('pharbers.v1.index.hosp-list-detail').set('uuid', model.uuid)
        this.controllerFor('pharbers.v1.index.hosp-list-detail').set('hospid', params.hospid)

        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "hospital",
                "condition": {
                    "uuid": model.uuid,
                    "hospital_id": params.hospid
                }
            }
        };
        this.logger.log(condition)
        return this.get('ajax')
            .request('/api/proposal/hospital/detail', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    return res.result.data.attribute;
                } else {
                    return res.error.message
                }
            })
    }
});