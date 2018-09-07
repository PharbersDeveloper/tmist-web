import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        onclick(type,id) {
            this.transitionToRoute('pharbers.v1.reports.'+type);
        },
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
                    component.set('currentRoute', 'represent-target');
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

            this.store.queryMultipleObject('/api/report/cards/represent-target', 'result-card', conditions)
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

            this.store.queryObject('/api/report/table/represent-target', 'result-table-data', conditions)
                .then((result) => {
                    component.set('data', result);
                });
        }
    }
});
