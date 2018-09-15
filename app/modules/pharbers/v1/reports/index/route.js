import Route from '@ember/routing/route';

export default Route.extend({

    model() {

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

        return this.store.queryMultipleObject('/api/v1/reportLayout/0', 'report-layout', conditions)
    }
});