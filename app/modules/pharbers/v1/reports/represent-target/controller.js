import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        onclick(type, id) {
            this.transitionToRoute('pharbers.v1.reports.' + type);
        },

        getDropdawnData(component) {
            let req = this.store.createRecord('request', {
                res: 'report',
            });

            let eqValues = [
                { type: 'eqcond', key: "id", val: '5b643430e53d3732b00047ea' },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryMultipleObject('/api/v1/reportWhich/0', 'dropdown-layout', conditions)
                .then((dropdowndata) => {
                    component.set('currentRoute', 'represent-target');
                    component.set('data', dropdowndata);
                });
        },
        getShowCard(component) {
            let req = this.store.createRecord('request', {
                res: 'report',
            });

            let eqValues = [
                { type: 'eqcond', key: "id", val: '5b643430e53d3732b00047ea' },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryMultipleObject('/api/v1/cardsRepresentTarget/0', 'report-card', conditions)
                .then((resultCardData) => {
                    component.set('data', resultCardData);
                });
        },
        getResultTable(component) {
            let req = this.store.createRecord('request', {
                res: 'report',
            });

            let eqValues = [
                { type: 'eqcond', key: "id", val: '5b643430e53d3732b00047ea' },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryObject('/api/v1/tableRepresentTarget/0', 'report-table-data', conditions)
                .then((result) => {
                    component.set('data', result);
                });
        }
    }
});