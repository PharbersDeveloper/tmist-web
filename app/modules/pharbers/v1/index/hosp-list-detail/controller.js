import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    ajax: inject(),
    actions: {
        submitRun(text) {
            this.transitionToRoute('pharbers.v1.reports')
        },
        talent() {
            this.get('decisionInfo').show();
        },
        backHospList() {
            this.transitionToRoute('pharbers.v1.index.hosp-list', this.uuid);
        }
    }
});
