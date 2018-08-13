import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    ajax: inject(),
    cookies: inject(),
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
            "token": this.get('cookies').read('user_token'),
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
        linkPage(hospid) {
            let params = this.get('model');
            this.transitionToRoute('pharbers.v1.hosp-list-detail', params.uuid, hospid)
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
