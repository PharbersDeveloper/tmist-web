import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
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
    model() {
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
                    "uuid": "65ccdece-cf90-4186-aeea-b14fee19a291"
                }
            }
        };
        return this.get('ajax')
            .request('/api/proposal/hospital/lst', this.getAjaxOpt(condition))
            .then((res) => {
                if (res.status === "ok") {
                    return res.result.data.attribute;
                } else {
                    this.set('errorMes', res.error.message)
                }
            })
    }
});