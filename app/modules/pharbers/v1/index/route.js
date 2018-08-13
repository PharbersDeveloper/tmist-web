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
    model(param) {
        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "hosp_lst",
                "condition": {
                    "uuid": param.uuid
                }
            }
        };

         return this.get('ajax')
            .request('/api/proposal/budget/info', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    let val = res.result.data.attribute;
                    val.text = "提交执行";
                    val.uuid = param.uuid;
                    return val
                } else {
                    return res.error.message
                }
            })

    },
    afterModel(model, transition) {
        this._super(...arguments);
        if(transition.targetName === 'pharbers.v1.index.index') {
            this.transitionTo('pharbers.v1.index.hosp-list')
        }
    },

});
