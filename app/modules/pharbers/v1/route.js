import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
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
    model() {
        let condition = {
            "token": this.get('cookies').read('user_token'),
            "version": {
                "major": 1,
                "minor": 0
            },
            "data": {
                "type": "rep_list",
                "condition": {
                    "uuid": "65ccdece-cf90-4186-aeea-b14fee19a291"
                }
            }
        };
        return this.get('ajax')
            .request('/api/proposal/rep/info', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    return res.result.data.attribute;
                } else {
                    return res.error.message
                }
            })
    }
});
