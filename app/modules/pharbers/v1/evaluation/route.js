import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        this.controllerFor('pharbers.v1.evaluation').set('evaluationid', params.evaid)
        let req = this.store.createRecord('request', {
            res: 'assess_report',
        });
        req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
            key: 'id',
            val: params.evaid,
        }))
        let conditions = this.store.object2JsonApi('request', req);
        return this.store.queryMultipleObject('/api/v1/assessReportLayout/0', 'evaluation_layout', conditions)
    },
    actions: {

    }
});