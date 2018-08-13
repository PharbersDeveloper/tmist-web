import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    isShowList: true,
    actions: {
        close() {
            this.get('decisionInfo').hide()
        }
    }
});
