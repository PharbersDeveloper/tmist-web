import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
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
    queryList(uuid) {
        let condition = {
            "token": "bearera67c2dc93dfc7ff2a19baefee72034f4",
            "timestamp": 1530689119000,
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "hosp_lst",
                "condition": {
                    "uuid": uuid
                }
            }
        };
        this.get('ajax')
            .request('/api/proposal/hospital/lst', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    this.set("result", res.result.data.attribute);
                } else {
                    this.set('errorMes', res.error.message)
                }
            })
    },
    init() {
        this._super(...arguments);
        this.result = [];
        this.month = {
            "month": "08",
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
        linkPage(hospid) {
            let params = this.get('model');
            this.transitionToRoute('pharbers.v1.hosp-list-detail', params.pid, params.uuid, hospid)
        },
        submitRun(text) {
            this.logger.log(text);
            alert('请先进行数据处理')
        },
        talent() {
            this.transitionToRoute('pharbers.v1.talent-train')
        }
    }
});
