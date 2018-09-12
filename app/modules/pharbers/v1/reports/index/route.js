import Route from '@ember/routing/route';

export default Route.extend({

    model() {
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

        return this.store.queryMultipleObject('/api/report/total', 'report-overview', conditions)
    }
});