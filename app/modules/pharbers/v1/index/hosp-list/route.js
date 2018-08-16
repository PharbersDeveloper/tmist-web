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
    model() {
        this._super(...arguments);
        let model = this.modelFor('pharbers.v1.index');
        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "hosp_lst",
                "condition": {
                    "uuid": model.uuid
                }
            }
        };
        return this.get('ajax')
            .request('/api/proposal/hospital/lst', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    return res.result.data.attribute;
                } else {
                    return res.error.message;
                }
            })
    },
    afterModel(model, transition) {
        let list = model;
        let hosps = list.map((ele) => {
            return ele.id
        })
        let hospIdList = {
            "uuid": this.modelFor('pharbers.v1.index').uuid,
            "list": hosps
        }
        localStorage.setItem('hospList', JSON.stringify(hospIdList));
    },


});