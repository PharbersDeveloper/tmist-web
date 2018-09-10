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
    queryDrop(uuid) {
        let condi = {
            "token": this.get('cookies').read('user_token'),
            "timestamp": 1530689119000,
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "which",
                "condition": {
                    "uuid": uuid
                }
            }
        }
        return this.get('ajax').request('/api/report/which', this.getAjaxOpt(condi))
            .then((res) => {
                if (res.status === "ok") {
                    let result = res.result.data.attribute.which_values;
                    this.set('dropData', result);
                    this.controllerFor('pharbers.v1.index.reports').set('dropData', result)
                    return result;
                }
            })
    },
    queryCard(uuid) {
        let _column = "";
        let _drop = this.get('dropData');
        for (let i = 0, len = _drop.length; i < len; i++) {
            if (_drop[i].type === "index") {
                _column = _drop[i].columns_id;
            }
        }
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
                    "column_id": _column
                }
            }
        }
        return this.get('ajax').request('/api/report/total', this.getAjaxOpt(condi))
            .then((res) => {
                if (res.status === "ok") {
                    let card = res.result.data.attribute;
                    let _dropdata = this.dealDrop("index", this.get('dropData'));
                    card.component_data.unshift(_dropdata);
                    return card;
                }
            })
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
        let dealDone = {
            "key": "which-result",
            "values": {
                "current": current,
                "selected": drop
            }
        }
        return dealDone;
    },

    model(params) {
        let model = this.modelFor('pharbers.v1.index')
        this.controllerFor('pharbers.v1.index.reports').set('uuid', model.uuid)

        return new Promise((resolve, reject) => {
            this.queryDrop(model.uuid).then((result) => {
                this.queryCard(model.uuid).then((total) => {
                    resolve(total)
                })
            })
        })
    },

});