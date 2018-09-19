import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let req = this.store.createRecord('request', {
            res: 'assess_report',
        });
        req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
            key: 'id',
            val: '5b9f952fe53d3735f0007497',
        }))
        let conditions = this.store.object2JsonApi('request', req);
        return this.store.queryMultipleObject('/api/v1/assessReportLayout/0', 'evaluation_layout', conditions)
    },
    actions: {

    }
});