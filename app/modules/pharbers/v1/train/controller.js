import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { later } from '@ember/runloop';
const { keys } = Object;

export default Controller.extend({
    ajax: inject(),
    cookies: inject(),
    getAjaxOpt(data) {
        return {
            method: 'POST',
            dataType: "json",
            cache: false,
            data: JSON.stringify(data),
            contentType: "application/json",
            Accpt: "application/json"
        }
    },

    /**
     * 查询关卡
     */
    queryTrains() {
        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": { "major": 1, "minor": 0 },
            "data": {
                "type": "checkpoints",
                "condition": {}
            }
        }
        this.get('ajax').request('/api/proposal/lst', this.getAjaxOpt(condition))
            .then(({ status, result, error }) => {
                if (status === "ok") {
                    this.set('checkpoints', result.data.attribute)
                } else {
                    this.set('errorMessage', error.message);
                }
            }, () => {})
    },

    init() {
        this._super(...arguments);
        this.queryTrains();
    },

    actions: {
        logut() {
            keys(this.get('cookies').read()).forEach(item => {
                this.get('cookies').clear(item, {
                    path: '/'
                })
            });
            later(this, () => {
                window.location = "/";
            }, 1000)
        }
    }
});