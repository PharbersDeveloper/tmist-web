import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        this.controllerFor('pharbers.v1.reports').set('reportid', params.reportid);
        this.controllerFor('pharbers.v1.reports').set('evaluationid', params.evaluationid);
    }
});