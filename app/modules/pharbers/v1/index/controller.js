import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    init() {
        this._super(...arguments);
        let today = new Date();
        let month = (today.getMonth() + 1) < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
        this.month = month;
    },
    actions: {
        submitRun(text) {
            this.logger.log(text);
            alert('请先进行数据处理')
        },
        talent() {
            this.get('decisionInfo').show()
        }
    }


});
