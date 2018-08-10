import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    ajax: inject(),
    init() {
        this._super(...arguments);
        this.month = {
            "month": 12
        };
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
            this.transitionToRoute('pharbers.v1.reports')
        },
        talent() {
            this.get('decisionInfo').show();
            // this.transitionToRoute('pharbers.v1.talent-train')
        },
        backH() {
            this.transitionToRoute('/pharbers/v1/tm/hosp-list/5b42fd43ed925c05565b5bdb/65ccdece-cf90-4186-aeea-b14fee19a291');
        }
    }
});
