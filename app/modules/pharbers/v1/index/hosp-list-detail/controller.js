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
        },
        preHosp(preHopsid) {
            this.logger.log(preHopsid)
            if (preHopsid != null)
                this.transitionToRoute('pharbers.v1.index.hosp-list-detail', preHopsid)
        },
        nextHosp(nextHospid) {
            // this.logger.log(nextHospid);
            if (nextHospid != null)
                this.transitionToRoute('pharbers.v1.index.hosp-list-detail', nextHospid)
        },
        chooseRep(name) {
            this.logger.log('chooserep');
            this.logger.log(name)
        }
    },
});