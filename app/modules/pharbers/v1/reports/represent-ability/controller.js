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
        changeReportPage(type, id) {
            this.transitionToRoute('pharbers.v1.reports.' + type);
        },

        getDropdawnData(component) {
            let alreadydata = this.store.peekAll('dropdown-layout');
            this.store.queryMultipleObject('/api/v1/reportWhich/0', 'dropdown-layout', this.queryConditions())
                .then((dropdowndata) => {
                    component.set('data', dropdowndata);
                    component.set('currentRoute', 'represent-ability');
                });
        },

        getShowCard(component) {
            this.store.queryMultipleObject('/api/v1/cardsRepresentAbility/0', 'report-card', this.queryConditions())
                .then((resultCardData) => {
                    component.set('data', resultCardData);
                });
        },

        getResultTable(component) {
            this.store.queryObject('/api/v1/tableRepresentAbility/0', 'report-table-data', this.queryConditions())
                .then((result) => {
                    component.set('data', result);
                });
        }
    }
});