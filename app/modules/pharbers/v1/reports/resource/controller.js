import Controller from '@ember/controller';

export default Controller.extend({
    queryConditions() {
        let reportid = this.get('reportid');
        let req = this.store.createRecord('request', {
            res: 'report',
        });

        let eqValues = [
            { type: 'eqcond', key: "id", val: reportid },
        ]

        eqValues.forEach((elem, index) => {
            req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                key: elem.key,
                val: elem.val,
            }))
        });

        let conditions = this.store.object2JsonApi('request', req);
        return conditions;
    },
    actions: {
        onclick(type, id) {
            this.transitionToRoute('pharbers.v1.reports.' + type);
        },

        getDropdawnData(component) {
            let alreadydata = this.store.peekAll('dropdown-layout');
            // if (alreadydata.length == 0) {
            this.store.queryMultipleObject('/api/v1/reportWhich/0', 'dropdown-layout', this.queryConditions())
                .then((dropdowndata) => {
                    component.set('data', dropdowndata);
                    component.set('currentRoute', 'resource');
                });
            // } else {
            //     component.set('data', alreadydata);
            //     component.set('currentRoute', '资源投入与产出');
            // }
        },

        getShowCard(component) {

            this.store.queryMultipleObject('/api/v1/cardsResource/0', 'report-card', this.queryConditions())
                .then((resultCardData) => {
                    component.set('data', resultCardData);
                });
        },
        getResultTable(component) {

            this.store.queryObject('/api/v1/tableResource/0', 'report-table-data', this.queryConditions())
                .then((result) => {
                    component.set('data', result);
                });
        }
    }
});