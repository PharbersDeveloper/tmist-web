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
    dealDrop(type, data) {
        let drop = data;
        let index = 0;
        let current = "";
        for (let i = 0, len = drop.length; i < len; i++) {
            if (drop[i].type === type) {
                index = i;
            }
        }
        // current = drop.splice(index, 1)[0].text;
        current = drop[index].text;
        drop.slice(index, index + 1)
        return {
            "key": "which-result",
            "values": {
                "current": current,
                "selected": drop
            }
        }
    },
    model(params) {
        // let model = this.modelFor('pharbers.v1.index.reports');
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
                "type": "represent-ability",
                "condition": {
                    "uuid": uuid,
                    "column_id": params.id
                }
            }
        }
        return this.get('ajax').request('/api/report/rep_ability', this.getAjaxOpt(condi))
            .then((res) => {
                if (res.status === "ok") {
                    let card = res.result.data.attribute;
                    let _dropdata = this.dealDrop("represent-ability", dropData);
                    card.component_data.unshift(_dropdata);
                    return card;
                }
            })
    }
});