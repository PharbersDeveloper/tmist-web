import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    isShowList: true,
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
        talent(id) {
            this.logger.log(id);
            this.set('navid', id)
            this.get('decisionInfo').show()
        },
        close() {
            this.get('decisionInfo').hide()
        }
    }
});