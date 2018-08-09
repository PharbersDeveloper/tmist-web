import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        checkReport(text) {
            this.transitionToRoute('pharbers.v1.evaluation')
        },
        talent() {
            this.transitionToRoute('pharbers.v1.talent-train')
        }
    }
});