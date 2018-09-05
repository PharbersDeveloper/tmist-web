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
        let model = this.modelFor('pharbers.v1.index.reports');
        let uuid = this.controllerFor('pharbers.v1.index.reports').get('uuid');
        let dropData = this.controllerFor('pharbers.v1.index.reports').get('dropData');
        let condi = {
            "token": this.get('cookies').read('user_token'),
            "timestamp": 1530689119000,
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "index",
                "condition": {
                    "uuid": uuid,
                    "column_id": params.id
                }
            }
        }
        return model;
        // this.logger.log(model);
        return this.get('ajax').request('/api/report/total', this.getAjaxOpt(condi))
            .then((res) => {
                if (res.status === "ok") {
                    let card = res.result.data.attribute;
                    let _dropdata = this.dealDrop("index", dropData);
                    card.component_data.unshift(_dropdata);
                    return card;
                }
            })
    }
});