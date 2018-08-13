import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    init() {
        this._super(...arguments);
        let today = new Date();
        let month = (today.getMonth() + 1) < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
        this.month = month;

        this.dropdownData = {
            "text": "提交执行",
            "budget": {
                "used": 6000,
                "total": 8000,
            },
            "manpower": [{
                "name": "小赵",
                "total": 30,
                "used": 10
            }, {
                "name": "小钱",
                "total": 30,
                "used": 23
            }, {
                "name": "小孙",
                "total": 30,
                "used": 13
            }, {
                "name": "小李",
                "total": 30,
                "used": 5
            }, {
                "name": "小秦",
                "total": 30,
                "used": 28
            }],
        };
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
