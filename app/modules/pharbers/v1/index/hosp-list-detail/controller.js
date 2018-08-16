import Controller from '@ember/controller';
import { inject } from '@ember/service';
import Route from '@ember/routing/route';

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
            console.log(preHopsid)
            if (preHopsid != null)
                this.transitionToRoute('pharbers.v1.index.hosp-list-detail', preHopsid)
        },
        nextHosp(nextHospid) {
            // console.log(nextHospid);
            if (nextHospid != null)
                this.transitionToRoute('pharbers.v1.index.hosp-list-detail', nextHospid)
        }
    },
});