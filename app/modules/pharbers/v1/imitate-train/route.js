import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
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
    model() {
        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": { "major": 1, "minor": 0 },
            "data": {
                "type": "checkpoints",
                "condition": {}
            }
        }
        return this.get('ajax').request('/api/proposal/lst', this.getAjaxOpt(condition))
            .then(({ status, result, error }) => {
                if (status === "ok") {
                    return result.data.attribute
                } else {
                    this.set('errorMessage', error.message);
                }
            }, () => {})
    },
    actions: {
        simulation(pid, uuid) {
            this.transitionTo('pharbers.v1.hosp-list', pid, uuid)
        },
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