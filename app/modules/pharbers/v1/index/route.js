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

        let budgetInfo = this.get('ajax').request('/api/proposal/budget/info', this.getAjaxOpt(condition));
        let managerRep = this.get('ajax').request('/api/proposal/rep/info', this.getAjaxOpt(condition));
        return Promise.all([budgetInfo, managerRep]).then(function(values) {
            let val = values[0].result.data.attribute;
            val.text = "提交执行";
            return {
                budgetInfo: val,
                managerRep: values[1].result.data.attribute,
                uuid: param.uuid
            }
        });
    },
    afterModel(model, transition) {
        this._super(...arguments);
        if(transition.targetName === 'pharbers.v1.index.index') {
            this.transitionTo('pharbers.v1.index.hosp-list')
        }
    },

});
