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
        let model = this.modelFor('pharbers.v1.index')
        this.controllerFor('pharbers.v1.index.hosp-list-detail').set('uuid', model.uuid)
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
        return this.get('ajax')
            .request('/api/proposal/hospital/detail', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    return res.result.data.attribute;
                } else {
                    this.set('errorMes', res.error.message)
                }
            })
    }
});