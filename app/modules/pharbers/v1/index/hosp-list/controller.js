import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    actions: {
        linkPage(hospid) {
            this.transitionToRoute('pharbers.v1.index.hosp-list-detail', hospid)
        },
        submitRun(text) {
            this.logger.log(text);
            alert('请先进行数据处理')
        },
        talent() {
            this.get('decisionInfo').show()
        }
    }
});
