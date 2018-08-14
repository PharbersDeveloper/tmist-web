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
    actions: {
        linkPage(hospid) {
            let params = this.get('model');
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
