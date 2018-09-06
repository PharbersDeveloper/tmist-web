import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    actions: {
        getDropdawnData(component) {
            let req = this.store.createRecord('request', {
                res: 'user',
            });

            let eqValues = [
                { type: 'eqcond', key: 'email', val: 'a' },
                { type: 'eqcond', key: 'password', val: 'p' },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryMultipleObject('/api/report/which', 'dropdowndata', conditions)
                .then((dropdowndata) => {
                    component.set('currentRoute', 'index');
                    component.set('data', dropdowndata);
                });
        },
        getShowCard(component) {
            let req = this.store.createRecord('request', {
                res: 'user',
            });

            let eqValues = [
                { type: 'eqcond', key: 'email', val: 'a' },
                { type: 'eqcond', key: 'password', val: 'p' },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryMultipleObject('/api/report/cards/index', 'result-card', conditions)
                .then((resultCardData) => {
                    component.set('data', resultCardData);
                });
        },
        getResultTable(component) {
            let req = this.store.createRecord('request', {
                res: 'user',
            });

            let eqValues = [
                { type: 'eqcond', key: 'email', val: 'a' },
                { type: 'eqcond', key: 'password', val: 'p' },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryObject('/api/report/table/index', 'result-table-data', conditions)
                .then((result) => {
                    component.set('data', result);
                });
        }
    }
    // ajax: inject(),
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
    // queryTotal(uuid) {
    //     let condition = {
    //         "token": "bearera67c2dc93dfc7ff2a19baefee72034f4",
    //         "timestamp": 1530689119000,
    //         "version": {
    //             "major": 1,
    //             "minor": 0
    //         },
    //         "data": {
    //             "type": "which",
    //             "condition": {
    //                 "uuid": uuid
    //             }
    //         }
    //     }
    //     this.get('ajax')
    //         .request('/api/report/which', this.getAjaxOpt(condition))
    //         .then((res) => {
    //             if (res.status === "ok") {
    //                 let result = res.result.data.attribute;
    //                 return result;
    //             }
    //         }).then((res2) => {
    //             this.get('ajax')
    //                 .request('')
    //         })
    //
    // }
});