import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    ajax: inject(),
    cookies: inject(),
    isShowList: true,
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
    init() {
        this._super(...arguments);
        let today = new Date();
        let month = (today.getMonth() + 1) < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
        this.month = month;
    },
    queryManagerRepTime(uuid) {
        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "rep_list",
                "condition": {
                    "uuid": uuid
                }
            }
        };
        this.get('ajax')
            .request('/api/proposal/rep/info', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    this.set('manager_rep', res.result.data.attribute)
                } else {
                    this.set('error', res.error.message)
                }
            })
    },
    actions: {
        submitRun(text) {
            this.logger.log(text);
            alert('请先进行数据处理')
        },
        talent() {
            this.get('decisionInfo').show()
        },
        close() {
            this.get('decisionInfo').hide()
        }
    }
});
