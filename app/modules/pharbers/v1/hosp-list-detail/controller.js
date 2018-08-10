import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    ajax: inject(),
    getAjaxOpt(data) {
        return {
            method: 'POST',
            dataType: 'json',
            cache: false,
            data: JSON.stringify(data),
            contentType: 'application/json',
            Accpt: 'application/json'
        }
    },
    queryDetail(uuid, hospid) {
        let condition = {
            "token": "bearera67c2dc93dfc7ff2a19baefee72034f4",
            "timestamp": 1530689119000,
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "hospital",
                "condition": {
                    "uuid": uuid,
                    "hospital_id": hospid
                }
            }
        };

        this.get('ajax')
            .request('/api/proposal/hospital/detail', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    let results = res.result.data.attribute;
                    this.set('hospDetail', results);
                } else {
                    this.set('errorMes', res.error.message)
                }
            })
    },
    init() {
        this._super(...arguments);
        this.hospDetail = [];
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
            let params = this.get('model');
            this.logger.log(params);
            this.transitionToRoute('pharbers.v1.reports', params.uuid)
        },
        talent() {
            this.get('decisionInfo').show();
            // this.transitionToRoute('pharbers.v1.talent-train')
        },
        backH() {
            this.transitionToRoute('/pharbers/v1/tm/hosp-list/65ccdece-cf90-4186-aeea-b14fee19a291');
        }
    }
});