import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['reportid', 'evaluationid'],
    getMonth() {
        let d = new Date();
        return d.getMonth() + 1;
    },
    init() {
        this._super(...arguments);
        this.title = this.getMonth() + "月部署计划";
    },
    actions: {
        checkReport() {
            this.transitionToRoute('pharbers.v1.evaluation', this.get('evaluationid'));
        },
    }
});